"""
Portfolio de Gonzalo Martínez Berzal — servidor estático con la librería
estándar de Python (sin Flask, sin plantillas, sin dependencias que instalar).

Sirve tal cual el contenido de la carpeta public/ (index.html + static/).
Como no hay motor de plantillas ni lógica de servidor, no puede dar
"Internal Server Error": si algo falla, el propio Python muestra el error
directamente en esta terminal.

Uso interactivo:
    python app.py
  -> te pregunta si quieres correrlo en local o en modo servidor.

Uso no interactivo:
    python app.py local     # equivalente a elegir la opción 1
    python app.py server    # equivalente a elegir la opción 2

En modo servidor, el puerto se puede fijar con la variable de entorno PORT
(algunos hostings como Render/Railway la inyectan solos); si no está
definida, usa 8000.
"""

import functools
import http.server
import os
import socketserver
import sys

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
PUBLIC_DIR = os.path.join(BASE_DIR, "public")


def check_files() -> None:
    index_path = os.path.join(PUBLIC_DIR, "index.html")
    if not os.path.isfile(index_path):
        print(f"No encuentro: {index_path}")
        print(f"app.py está en: {BASE_DIR}")
        print("Debe tener, en esa misma carpeta, una subcarpeta 'public' con")
        print("index.html dentro (y 'public/static/' con style.css y script.js).")
        sys.exit(1)


def ask_mode() -> str:
    print("¿Cómo quieres ejecutar la app?")
    print("  1) Local     -> http://localhost:8000 (solo esta máquina)")
    print("  2) Servidor  -> accesible desde fuera (escucha en 0.0.0.0)")
    while True:
        choice = input("Elige 1 o 2: ").strip()
        if choice in ("1", "2"):
            return "local" if choice == "1" else "server"
        print("Opción no válida, escribe 1 o 2.")


if __name__ == "__main__":
    check_files()

    arg = sys.argv[1].lower() if len(sys.argv) > 1 else None
    mode = arg if arg in ("local", "server") else ask_mode()

    if mode == "local":
        host, port = "127.0.0.1", 8000
    else:
        host = "0.0.0.0"
        port = int(os.environ.get("PORT", 8000))

    Handler = functools.partial(
        http.server.SimpleHTTPRequestHandler, directory=PUBLIC_DIR
    )
    socketserver.TCPServer.allow_reuse_address = True

    with socketserver.TCPServer((host, port), Handler) as httpd:
        display_host = "localhost" if host == "127.0.0.1" else host
        print(f"\nSirviendo {PUBLIC_DIR}")
        print(f"-> http://{display_host}:{port}  (Ctrl+C para parar)\n")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nServidor detenido.")
