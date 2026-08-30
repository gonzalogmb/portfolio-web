# Portfolio — Gonzalo Martínez Berzal

Servidor estático con la librería estándar de Python — **sin Flask, sin
plantillas, sin nada que instalar**. Como no hay motor de plantillas ni
lógica de servidor, no puede dar "Internal Server Error": si algo falla,
Python te lo muestra directamente en la terminal donde lo lanzas.

Estructura:

```
deploy2/
├── app.py                 # servidor (usa solo la librería estándar)
└── public/
    ├── index.html          # estructura y contenido de la página
    └── static/
        ├── style.css        # todos los estilos
        └── script.js        # selector de idioma ES/EN, lógica de la página
```

Las imágenes (foto, logos, insignias) siguen embebidas como base64 dentro
del HTML.

## Ejecutar

```bash
python app.py
```

(no hace falta `pip install` nada — solo usa módulos de la librería
estándar: `http.server`, `socketserver`).

Te pregunta cómo quieres arrancarlo:

- **1) Local** → `http://localhost:8000`, solo accesible desde tu propia máquina.
- **2) Servidor** → escucha en `0.0.0.0`, accesible desde fuera. El puerto
  se puede fijar con la variable de entorno `PORT` (por defecto 8000).

También puedes saltarte la pregunta pasando el modo como argumento:

```bash
python app.py local
python app.py server
PORT=9090 python app.py server
```

## Desplegar en un servidor real

Este servidor (`http.server`) es válido para uso personal / bajo tráfico,
pero no está pensado para mucha carga concurrente. Si quieres algo más
robusto detrás de Nginx/Apache, o directamente subirlo a un hosting
puramente estático (Netlify, GitHub Pages, Cloudflare Pages), simplemente
sube el contenido de `public/` tal cual — es HTML/CSS/JS puro, no depende
de `app.py` para nada.
