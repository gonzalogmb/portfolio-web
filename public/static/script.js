(function () {
    var STRINGS = {
      en: {
        heroLine: "// Portfolio — updated August 2026",
        promptLine: "3+ yrs · PySpark · AWS · GCP",
        madridSpain: "Madrid, Spain",
        downloadCv: "Download CV",
        navSummary: "summary", navExperience: "experience", navSkills: "skills",
        navProjects: "projects", navEducation: "education", navCertifications: "certifications",
        summaryText: "Data Analyst / Data Engineer with 3+ years of experience building PySpark data pipelines on AWS and GCP for enterprise financial institutions. Proven track record designing NLP and Large Language Model (LLM) solutions, leading large-scale cloud data migrations, and coordinating Agile workflows across global teams. Master's in Data Science and AI — AWS Certified Cloud Practitioner.",
        experienceEyebrow: "Experience",
        entry1Dates: "Sept 2024 — Present",
        entry1Role: "Consultant, Data Analyst at BBVA",
        currentTag: "Current",
        entry1B1: "Designed and optimized PySpark data structures in AWS SageMaker to support enterprise debt monitoring.",
        entry1B2: "Coordinated international work backlogs across 7 global geographies using Agile methodologies, improving cross-team delivery alignment.",
        entry1B3: "Led platform migration to JIRA and built automated tracking dashboards for MVPs, streamlining monthly executive reporting.",
        entry2Role: "Associate Consultant, Data Analyst at BBVA",
        entry2B1: "Built Natural Language Processing (NLP) chatbots on Google Cloud Platform (GCP) using Vertex AI to query and process custom institutional data.",
        entry2B2: "Migrated a legacy Python codebase to PySpark to execute a large-scale AWS data migration, leveraging SageMaker, S3, and Athena.",
        entry3Dates: "Research project",
        entry3B1: "Built an investment strategy in pandas combining technical indicators with machine learning models (XGBoost, Random Forest, SVM).",
        entry3B2: "Validated strategy performance through backtesting, using Sharpe and Sortino Ratios to benchmark risk-adjusted returns.",
        entry4Dates: "Jan 2022 — Jul 2023",
        entry4B1: "Led frontend development for a streaming platform, owning architecture decisions and code quality standards across React and Angular.",
        entry4B2: "Built the core media player with Digital Rights Management (DRM) integration to ensure secure content delivery.",
        entry4B3: "Designed dynamic UI components and integrated native LG WebOS Magic Remote controls.",
        entry4B4: "Delivered production apps for FilmIn and Tivify.",
        skillsEyebrow: "Skills",
        skillHeader1: "Data Science & AI",
        projectsEyebrow: "Projects",
        project1Desc: "Python tool to fetch and analyze market data from Yahoo Finance.",
        project2Desc: "Zero-dependency Python HTTP server (standard library only) that builds and serves this portfolio — no Flask, no templates, nothing to install.",
        viewOnGithub: "GitHub",
        viewDemo: "Demo",
        educationEyebrow: "Education",
        eduOrg1: "University of Navarra",
        eduRole1: "Master in Data Science and AI",
        eduSubNote1: "Specialized in statistical and mathematical algorithms, deep learning, machine learning, and Large Language Models (LLMs).",
        eduOrg2: "University Complutense of Madrid",
        eduRole2: "Bachelor of Science in Computer Engineering",
        eduSubNote2: "Bachelor's Thesis: Decentralized Finance — Integrated DeFi Platform for Cryptocurrency Fund Investments and Token Exchanges.",
        certLangEyebrow: "Certifications & languages",
        viewCredential: "View credential",
        langSpanishName: "Spanish", langSpanishLevel: "— Native",
        langEnglishName: "English", langEnglishLevel: "— Professional working proficiency"
      },
      es: {
        heroLine: "// Portfolio profesional — actualizado agosto 2026",
        promptLine: "3+ años · PySpark · AWS · GCP",
        madridSpain: "Madrid, España",
        downloadCv: "Descargar CV",
        navSummary: "resumen", navExperience: "experiencia", navSkills: "skills",
        navProjects: "proyectos", navEducation: "formación", navCertifications: "certificaciones",
        summaryText: "Data Analyst / Data Engineer con más de 3 años de experiencia diseñando pipelines de datos en PySpark sobre AWS y GCP para grandes instituciones financieras. Ha desarrollado soluciones de NLP y modelos de lenguaje (LLM), liderado migraciones de datos en la nube a gran escala y coordinado equipos globales con metodologías Agile. Máster en Data Science e IA — AWS Certified Cloud Practitioner.",
        experienceEyebrow: "Experiencia",
        entry1Dates: "Sept 2024 — Presente",
        entry1Role: "Consultant, Data Analyst en BBVA",
        currentTag: "Actual",
        entry1B1: "Diseño de estructuras de datos en PySpark sobre AWS SageMaker para automatizar el seguimiento de deuda empresarial.",
        entry1B2: "Coordinación de equipos internacionales en 7 países bajo metodologías Agile, alineando las entregas entre las distintas áreas.",
        entry1B3: "Liderazgo de la migración a JIRA y puesta en marcha de paneles de seguimiento de MVPs para agilizar el reporte mensual a dirección.",
        entry2Role: "Associate Consultant, Data Analyst en BBVA",
        entry2B1: "Desarrollo de chatbots de NLP en Google Cloud Platform con Vertex AI, capaces de consultar y procesar datos institucionales a medida.",
        entry2B2: "Reescritura en PySpark de un proyecto originalmente en Python, para ejecutar una migración de datos a gran escala en AWS con SageMaker, S3 y Athena.",
        entry3Dates: "Proyecto de investigación",
        entry3B1: "Diseño en pandas de una estrategia de inversión que combinaba indicadores técnicos con modelos de machine learning (XGBoost, Random Forest, SVM).",
        entry3B2: "Validación de la estrategia mediante backtesting, evaluando su rentabilidad ajustada al riesgo con los ratios de Sharpe y Sortino.",
        entry4Dates: "Ene 2022 — Jul 2023",
        entry4B1: "Liderazgo del desarrollo frontend de una plataforma de streaming, definiendo la arquitectura y los estándares de calidad de código en React y Angular.",
        entry4B2: "Creación del reproductor de vídeo principal, integrando DRM para proteger el contenido y asegurar su entrega.",
        entry4B3: "Diseño de componentes de interfaz dinámicos e integración del control remoto Magic Remote nativo de LG WebOS.",
        entry4B4: "Puesta en producción de aplicaciones para FilmIn y Tivify.",
        skillsEyebrow: "Skills",
        skillHeader1: "Data Science & IA",
        projectsEyebrow: "Proyectos",
        project1Desc: "Herramienta en Python para obtener y analizar datos de mercado de Yahoo Finance.",
        project2Desc: "Servidor HTTP en Python sin dependencias (solo librería estándar) que construye y sirve este mismo portfolio — sin Flask, sin plantillas, sin nada que instalar.",
        viewOnGithub: "GitHub",
        viewDemo: "Demo",
        educationEyebrow: "Formación",
        eduOrg1: "Universidad de Navarra",
        eduRole1: "Máster en Data Science e Inteligencia Artificial",
        eduSubNote1: "Especialización en algoritmos estadísticos y matemáticos, deep learning, machine learning y modelos de lenguaje (LLMs).",
        eduOrg2: "Universidad Complutense de Madrid",
        eduRole2: "Grado en Ingeniería Informática",
        eduSubNote2: "Trabajo de fin de grado: Decentralized Finance — plataforma DeFi integrada para inversión en fondos de criptomonedas e intercambio de tokens.",
        certLangEyebrow: "Certificaciones & idiomas",
        viewCredential: "Ver credencial",
        langSpanishName: "Español", langSpanishLevel: "— Nativo",
        langEnglishName: "Inglés", langEnglishLevel: "— Nivel profesional"
      }
    };

    function applyLang(lang) {
      var dict = STRINGS[lang] || STRINGS.en;
      document.querySelectorAll("[data-i18n]").forEach(function (el) {
        var key = el.getAttribute("data-i18n");
        if (dict[key] != null) el.textContent = dict[key];
      });
      document.documentElement.lang = lang;
      document.querySelectorAll(".lang-btn").forEach(function (btn) {
        var isActive = btn.getAttribute("data-lang") === lang;
        btn.classList.toggle("active", isActive);
        btn.setAttribute("aria-pressed", isActive ? "true" : "false");
      });
      try { localStorage.setItem("portfolio-lang", lang); } catch (e) {}
    }

    var initialLang = "en";
    try {
      var saved = localStorage.getItem("portfolio-lang");
      if (saved === "en" || saved === "es") initialLang = saved;
    } catch (e) {}

    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.addEventListener("click", function () { applyLang(btn.getAttribute("data-lang")); });
    });

    applyLang(initialLang);
  })();

  (function () {
    var reduceMotion = window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Scroll-reveal for cards and timeline entries.
    var revealTargets = document.querySelectorAll(
      ".t-item, .project-card, .cert-card, .skill-group, .lang-item"
    );
    revealTargets.forEach(function (el, i) {
      el.classList.add("reveal");
      el.style.transitionDelay = (Math.min(i % 6, 5) * 70) + "ms";
    });

    if (revealTargets.length) {
      if (!reduceMotion && "IntersectionObserver" in window) {
        var revealObserver = new IntersectionObserver(function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("in-view");
              revealObserver.unobserve(entry.target);
            }
          });
        }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });
        revealTargets.forEach(function (el) { revealObserver.observe(el); });
      } else {
        revealTargets.forEach(function (el) { el.classList.add("in-view"); });
      }
    }

    // Scrollspy: highlight the current section in the sidebar nav.
    var navLinks = document.querySelectorAll(".side-nav a[href^='#']");
    var sections = Array.prototype.map.call(navLinks, function (a) {
      return document.querySelector(a.getAttribute("href"));
    }).filter(Boolean);

    if (sections.length && "IntersectionObserver" in window) {
      var spyObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          var link = document.querySelector(".side-nav a[href='#" + entry.target.id + "']");
          if (!link || !entry.isIntersecting) return;
          navLinks.forEach(function (l) { l.classList.remove("active"); });
          link.classList.add("active");
        });
      }, { rootMargin: "-40% 0px -55% 0px", threshold: 0 });
      sections.forEach(function (s) { spyObserver.observe(s); });
    }
  })();
