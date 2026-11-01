
/* =========================================================
   ROBERTO MOUTINHO — PORTFOLIO INTERACTIONS
   Multilingual support: English, Portuguese and Spanish.
   No external translation API required.
   ========================================================= */

(() => {
  "use strict";

  const root = document.documentElement;

  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  const navAnchors = [
    ...document.querySelectorAll('.nav-links a[href^="#"]')
  ];

  const filterButtons = [
    ...document.querySelectorAll(".filter-button")
  ];

  const projectCards = [
    ...document.querySelectorAll(".project-card")
  ];

  const projectCount = document.querySelector(".project-count");
  const year = document.getElementById("year");

  const languageButtons = [
    ...document.querySelectorAll(".language-button")
  ];

  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  /* =========================================================
     1. TRANSLATIONS
     ========================================================= */

  const translations = {

    en: {

      skip: "Skip to content",

      navAbout: "About",
      navProjects: "Projects",
      navExpertise: "Expertise",
      navResearch: "Research",
      navContact: "Contact",
      resume: "Resume",

      eyebrow: "MACHINE LEARNING · DATA SCIENCE · ML ENGINEERING",

      heroIntro: "Hello, I'm Roberto.",
      heroLine1: "I turn complex data",
      heroLine2: "into",
      heroHighlight: "meaningful insight.",

      heroDescription:
        "Computer Science undergraduate and researcher focused on data science, machine learning, mathematical modeling and intelligent systems.",

      explore: "Explore my work",
      viewResume: "View resume",

      performance: "MODEL PERFORMANCE",
      analytical: "Analytical thinking",
      caption: "Curiosity meets computation.",

      aboutKicker: "01 / ABOUT",
      aboutTitle: "Driven by questions.",
      aboutSubtitle: "Grounded in evidence.",

      aboutP1:
        'I am a Computer Science undergraduate at the <strong>Federal University of ABC (UFABC)</strong>, interested in the intersection of mathematical foundations, data and intelligent systems.',

      aboutP2:
        "My work brings together statistical reasoning, machine learning and computational methods to investigate complex problems. I value rigorous experimentation, reproducible workflows and clear communication of results.",

      aboutP3:
        "Currently, I am deepening my work in symbolic regression, time-series analysis and research-oriented applications of machine learning.",

      connect: "Let's connect",

      portraitLabel: "PROFILE / PORTRAIT",
      photoText: "YOUR PHOTO HERE",
      photoCaption: "Computer Science · Research · Data Science",

      projectsKicker: "02 / SELECTED WORK",
      projectsTitle: "Selected Projects &",
      projectsSubtitle: "experiments.",

      projectsDescription:
        "A selection of research and engineering work. Each project is an opportunity to turn a well-defined question into a reproducible result.",

      filterAll: "All work",
      filterResearch: "Research",
      filterML: "Machine Learning",

      project1Top: "RESEARCH / 2024—2025",
      project1Title: "Time Series Forecasting",

      project1Description:
        "A forecasting pipeline to model and investigate the evolution of Brazilian academic indicators using scientometric data, recurrent neural networks and nonlinear regression.",

      focus: "FOCUS",
      approach: "APPROACH",
      temporal: "Temporal modeling",
      repository: "View repository",
      researchProject: "Research project",

      project2Top: "COMPUTATIONAL METHODS / 2026",
      project2Title: "Symbolic Regression Benchmarking",

      project2Description:
        "A comparative experimental workflow for symbolic regression algorithms, emphasizing hyperparameter optimization, reproducibility and evaluation across datasets and experimental conditions.",

      symbolic: "Symbolic ML",
      genetic: "Genetic Algorithms · Supervised Learning",
      ongoing: "Ongoing research",

      note: "NOTE",
      metricsNote:
        "Quantitative performance metrics are intentionally omitted until validated results are available. Add verified values, datasets and evaluation protocols here.",

      expertiseKicker: "03 / TECHNICAL EXPERTISE",
      expertiseTitle: "Tools for",
      expertiseSubtitle: "thinking and building.",

      skillsIntro:
        "A technical foundation built around analytical problem-solving, experimentation and software development.",

      skillsFootnote:
        "The technologies below reflect areas of study and project experience. Adjust the list to match your current proficiency.",

      programming: "Programming",
      dataML: "Data & Machine Learning",
      mathMethods: "Mathematics & Methods",
      statModel: "Statistical Modeling",
      timeSeries: "Time Series",
      optimization: "Optimization",
      symbolicRegression: "Symbolic Regression",
      tools: "Tools & Environment",

      researchKicker: "04 / RESEARCH & RECOGNITION",
      researchTitle: "Curiosity, translated",
      researchSubtitle: "into research.",

      researchType1: "UNDERGRADUATE RESEARCH · UFABC",

      research1Title:
        "Scientometric Time-Series Analysis: Modeling and Forecasting Brazilian Academic Data",

      research1Description:
        "Research project investigating academic indicators through time-series modeling, LSTM networks and nonlinear regression, using data from Lattes and OpenAlex.",

      advisor: "Advisor: Prof. Jesús Mena-Chalco",

      researchType2: "ACADEMIC RECOGNITION",

      research2Title:
        "Honorable Mention — XV Undergraduate Research Meeting",

      research2Description:
        "Recognition for the best work developed in the Communication and Information track at the XV Encontro de Iniciação Científica UFABC/USCS.",

      november: "November 2025",

      researchType3: "RESEARCH IN PROGRESS",

      research3Title:
        "Symbolic Regression & Reproducible Benchmarking",

      research3Description:
        "Experimental evaluation of symbolic regression algorithms, including systematic hyperparameter tuning and controlled comparisons across datasets.",

      algorithmEvaluation: "Research / Algorithm evaluation",
      academicProfiles: "ACADEMIC PROFILES",

      contactKicker: "05 / GET IN TOUCH",
      contactTitle: "Have a question",
      contactSubtitle: "or an interesting",
      problem: "problem?",

      contactDescription:
        "I am always interested in thoughtful conversations, research collaborations and opportunities to build useful things with data.",

      startConversation: "Start a conversation",

      footerText: "Designed with intention. Built with curiosity."
    },

    pt: {

      skip: "Pular para o conteúdo",

      navAbout: "Sobre",
      navProjects: "Projetos",
      navExpertise: "Competências",
      navResearch: "Pesquisa",
      navContact: "Contato",
      resume: "Currículo",

      eyebrow: "APRENDIZADO DE MÁQUINA · CIÊNCIA DE DADOS · ENGENHARIA DE ML",

      heroIntro: "Olá, sou Roberto.",
      heroLine1: "Transformo dados complexos",
      heroLine2: "em",
      heroHighlight: "conhecimento significativo.",

      heroDescription:
        "Graduando em Ciência da Computação e pesquisador com foco em ciência de dados, aprendizado de máquina, modelagem matemática e sistemas inteligentes.",

      explore: "Explore meus projetos",
      viewResume: "Ver currículo",

      performance: "DESEMPENHO DO MODELO",
      analytical: "Pensamento analítico",
      caption: "Curiosidade encontra a computação.",

      aboutKicker: "01 / SOBRE",
      aboutTitle: "Movido por perguntas.",
      aboutSubtitle: "Fundamentado em evidências.",

      aboutP1:
        'Sou graduando em Ciência da Computação na <strong>Universidade Federal do ABC (UFABC)</strong>, interessado na interseção entre fundamentos matemáticos, dados e sistemas inteligentes.',

      aboutP2:
        "Meu trabalho reúne raciocínio estatístico, aprendizado de máquina e métodos computacionais para investigar problemas complexos. Valorizo a experimentação rigorosa, fluxos de trabalho reproduzíveis e a comunicação clara dos resultados.",

      aboutP3:
        "Atualmente, estou aprofundando meus estudos em regressão simbólica, análise de séries temporais e aplicações de aprendizado de máquina voltadas à pesquisa.",

      connect: "Vamos conversar",

      portraitLabel: "PERFIL / RETRATO",
      photoText: "SUA FOTO AQUI",
      photoCaption: "Ciência da Computação · Pesquisa · Ciência de Dados",

      projectsKicker: "02 / TRABALHOS SELECIONADOS",
      projectsTitle: "Projetos selecionados e",
      projectsSubtitle: "experimentos.",

      projectsDescription:
        "Uma seleção de trabalhos de pesquisa e engenharia. Cada projeto representa uma oportunidade de transformar uma questão bem definida em um resultado reproduzível.",

      filterAll: "Todos",
      filterResearch: "Pesquisa",
      filterML: "Aprendizado de Máquina",

      project1Top: "PESQUISA / 2024—2025",
      project1Title: "Previsão de Séries Temporais",

      project1Description:
        "Pipeline de previsão para modelar e investigar a evolução de indicadores acadêmicos brasileiros utilizando dados cientométricos, redes neurais recorrentes e regressão não linear.",

      focus: "FOCO",
      approach: "ABORDAGEM",
      temporal: "Modelagem temporal",
      repository: "Ver repositório",
      researchProject: "Projeto de pesquisa",

      project2Top: "MÉTODOS COMPUTACIONAIS / 2026",
      project2Title: "Benchmark de Regressão Simbólica",

      project2Description:
        "Fluxo experimental comparativo de algoritmos de regressão simbólica, com ênfase na otimização de hiperparâmetros, reprodutibilidade e avaliação em diferentes conjuntos de dados e condições experimentais.",

      symbolic: "Aprendizado de Máquina Simbólico",
      genetic: "Algoritmos Genéticos · Aprendizado Supervisionado",
      ongoing: "Pesquisa em andamento",

      note: "NOTA",
      metricsNote:
        "As métricas quantitativas de desempenho foram intencionalmente omitidas até que resultados validados estejam disponíveis. Adicione aqui valores verificados, conjuntos de dados e protocolos de avaliação.",

      expertiseKicker: "03 / COMPETÊNCIAS TÉCNICAS",
      expertiseTitle: "Ferramentas para",
      expertiseSubtitle: "pensar e construir.",

      skillsIntro:
        "Uma formação técnica fundamentada na resolução analítica de problemas, experimentação e desenvolvimento de software.",

      skillsFootnote:
        "As tecnologias abaixo refletem áreas de estudo e experiências em projetos. Ajuste a lista de acordo com seu nível atual de proficiência.",

      programming: "Programação",
      dataML: "Dados e Aprendizado de Máquina",
      mathMethods: "Matemática e Métodos",
      statModel: "Modelagem Estatística",
      timeSeries: "Séries Temporais",
      optimization: "Otimização",
      symbolicRegression: "Regressão Simbólica",
      tools: "Ferramentas e Ambiente",

      researchKicker: "04 / PESQUISA E RECONHECIMENTO",
      researchTitle: "Curiosidade transformada",
      researchSubtitle: "em pesquisa.",

      researchType1: "INICIAÇÃO CIENTÍFICA · UFABC",

      research1Title:
        "Análise Cientométrica de Séries Temporais: Modelagem e Previsão de Dados Acadêmicos Brasileiros",

      research1Description:
        "Projeto de pesquisa que investiga indicadores acadêmicos por meio de modelagem de séries temporais, redes LSTM e regressão não linear, utilizando dados da Plataforma Lattes e do OpenAlex.",

      advisor: "Orientador: Prof. Jesús Mena-Chalco",

      researchType2: "RECONHECIMENTO ACADÊMICO",

      research2Title:
        "Menção Honrosa — XV Encontro de Iniciação Científica",

      research2Description:
        "Reconhecimento pelo melhor trabalho desenvolvido no eixo Comunicação e Informação no XV Encontro de Iniciação Científica UFABC/USCS.",

      november: "Novembro de 2025",

      researchType3: "PESQUISA EM ANDAMENTO",

      research3Title:
        "Regressão Simbólica e Benchmarking Reprodutível",

      research3Description:
        "Avaliação experimental de algoritmos de regressão simbólica, incluindo ajuste sistemático de hiperparâmetros e comparações controladas entre conjuntos de dados.",

      algorithmEvaluation: "Pesquisa / Avaliação de algoritmos",
      academicProfiles: "PERFIS ACADÊMICOS",

      contactKicker: "05 / ENTRE EM CONTATO",
      contactTitle: "Tem alguma pergunta",
      contactSubtitle: "ou um problema",
      problem: "interessante?",

      contactDescription:
        "Tenho interesse em conversas enriquecedoras, colaborações em pesquisa e oportunidades de desenvolver soluções úteis com dados.",

      startConversation: "Iniciar uma conversa",

      footerText: "Projetado com propósito. Construído com curiosidade."
    },

    es: {

      skip: "Saltar al contenido",

      navAbout: "Sobre mí",
      navProjects: "Proyectos",
      navExpertise: "Competencias",
      navResearch: "Investigación",
      navContact: "Contacto",
      resume: "Currículum",

      eyebrow: "APRENDIZAJE AUTOMÁTICO · CIENCIA DE DATOS · INGENIERÍA DE ML",

      heroIntro: "Hola, soy Roberto.",
      heroLine1: "Transformo datos complejos",
      heroLine2: "en",
      heroHighlight: "conocimiento significativo.",

      heroDescription:
        "Estudiante de Ciencias de la Computación e investigador enfocado en ciencia de datos, aprendizaje automático, modelado matemático y sistemas inteligentes.",

      explore: "Explorar mis proyectos",
      viewResume: "Ver currículum",

      performance: "RENDIMIENTO DEL MODELO",
      analytical: "Pensamiento analítico",
      caption: "La curiosidad se encuentra con la computación.",

      aboutKicker: "01 / SOBRE MÍ",
      aboutTitle: "Impulsado por preguntas.",
      aboutSubtitle: "Fundamentado en evidencias.",

      aboutP1:
        'Soy estudiante de Ciencias de la Computación en la <strong>Universidad Federal del ABC (UFABC)</strong>, interesado en la intersección entre fundamentos matemáticos, datos y sistemas inteligentes.',

      aboutP2:
        "Mi trabajo reúne razonamiento estadístico, aprendizaje automático y métodos computacionales para investigar problemas complejos. Valoro la experimentación rigurosa, los flujos de trabajo reproducibles y la comunicación clara de los resultados.",

      aboutP3:
        "Actualmente, estoy profundizando mis estudios en regresión simbólica, análisis de series temporales y aplicaciones de aprendizaje automático orientadas a la investigación.",

      connect: "Conectemos",

      portraitLabel: "PERFIL / RETRATO",
      photoText: "TU FOTO AQUÍ",
      photoCaption: "Ciencias de la Computación · Investigación · Ciencia de Datos",

      projectsKicker: "02 / TRABAJOS SELECCIONADOS",
      projectsTitle: "Proyectos seleccionados y",
      projectsSubtitle: "experimentos.",

      projectsDescription:
        "Una selección de trabajos de investigación e ingeniería. Cada proyecto es una oportunidad para transformar una pregunta bien definida en un resultado reproducible.",

      filterAll: "Todos",
      filterResearch: "Investigación",
      filterML: "Aprendizaje Automático",

      project1Top: "INVESTIGACIÓN / 2024—2025",
      project1Title: "Predicción de Series Temporales",

      project1Description:
        "Pipeline de predicción para modelar e investigar la evolución de indicadores académicos brasileños utilizando datos cienciométricos, redes neuronales recurrentes y regresión no lineal.",

      focus: "ENFOQUE",
      approach: "METODOLOGÍA",
      temporal: "Modelado temporal",
      repository: "Ver repositorio",
      researchProject: "Proyecto de investigación",

      project2Top: "MÉTODOS COMPUTACIONALES / 2026",
      project2Title: "Benchmark de Regresión Simbólica",

      project2Description:
        "Flujo experimental comparativo de algoritmos de regresión simbólica, con énfasis en la optimización de hiperparámetros, reproducibilidad y evaluación en diferentes conjuntos de datos y condiciones experimentales.",

      symbolic: "Aprendizaje Automático Simbólico",
      genetic: "Algoritmos Genéticos · Aprendizaje Supervisado",
      ongoing: "Investigación en curso",

      note: "NOTA",
      metricsNote:
        "Las métricas cuantitativas de rendimiento se han omitido intencionalmente hasta que haya resultados validados disponibles. Añade aquí valores verificados, conjuntos de datos y protocolos de evaluación.",

      expertiseKicker: "03 / COMPETENCIAS TÉCNICAS",
      expertiseTitle: "Herramientas para",
      expertiseSubtitle: "pensar y construir.",

      skillsIntro:
        "Una formación técnica basada en la resolución analítica de problemas, la experimentación y el desarrollo de software.",

      skillsFootnote:
        "Las tecnologías siguientes reflejan áreas de estudio y experiencia en proyectos. Ajusta la lista según tu nivel actual de competencia.",

      programming: "Programación",
      dataML: "Datos y Aprendizaje Automático",
      mathMethods: "Matemáticas y Métodos",
      statModel: "Modelado Estadístico",
      timeSeries: "Series Temporales",
      optimization: "Optimización",
      symbolicRegression: "Regresión Simbólica",
      tools: "Herramientas y Entorno",

      researchKicker: "04 / INVESTIGACIÓN Y RECONOCIMIENTO",
      researchTitle: "Curiosidad transformada",
      researchSubtitle: "en investigación.",

      researchType1: "INVESTIGACIÓN DE GRADO · UFABC",

      research1Title:
        "Análisis Cienciométrico de Series Temporales: Modelado y Predicción de Datos Académicos Brasileños",

      research1Description:
        "Proyecto de investigación que estudia indicadores académicos mediante modelado de series temporales, redes LSTM y regresión no lineal, utilizando datos de Lattes y OpenAlex.",

      advisor: "Director: Prof. Jesús Mena-Chalco",

      researchType2: "RECONOCIMIENTO ACADÉMICO",

      research2Title:
        "Mención de Honor — XV Encuentro de Investigación de Grado",

      research2Description:
        "Reconocimiento al mejor trabajo desarrollado en el área de Comunicación e Información en el XV Encontro de Iniciação Científica UFABC/USCS.",

      november: "Noviembre de 2025",

      researchType3: "INVESTIGACIÓN EN CURSO",

      research3Title:
        "Regresión Simbólica y Benchmarking Reproducible",

      research3Description:
        "Evaluación experimental de algoritmos de regresión simbólica, incluyendo ajuste sistemático de hiperparámetros y comparaciones controladas entre conjuntos de datos.",

      algorithmEvaluation: "Investigación / Evaluación de algoritmos",
      academicProfiles: "PERFILES ACADÉMICOS",

      contactKicker: "05 / CONTACTO",
      contactTitle: "¿Tienes alguna pregunta",
      contactSubtitle: "o un problema",
      problem: "interesante?",

      contactDescription:
        "Siempre estoy interesado en conversaciones enriquecedoras, colaboraciones de investigación y oportunidades para desarrollar soluciones útiles con datos.",

      startConversation: "Iniciar una conversación",

      footerText: "Diseñado con intención. Construido con curiosidad."
    }
  };

  /* =========================================================
     2. CURRENT YEAR
     ========================================================= */

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  /* =========================================================
     3. LANGUAGE MANAGEMENT
     ========================================================= */

  const supportedLanguages = ["en", "pt", "es"];

  const getSavedLanguage = () => {
    try {
      const saved = localStorage.getItem("portfolio-language");

      return supportedLanguages.includes(saved)
        ? saved
        : "en";

    } catch {
      return "en";
    }
  };

  const updateProjectCount = (visible, language = root.lang) => {

    if (!projectCount) return;

    const formatted = String(visible).padStart(2, "0");

    const labels = {
      en: visible === 1 ? "PROJECT" : "PROJECTS",
      pt: visible === 1 ? "PROJETO" : "PROJETOS",
      es: visible === 1 ? "PROYECTO" : "PROYECTOS"
    };

    projectCount.textContent = `${formatted} ${labels[language] || labels.en}`;
  };

  const applyLanguage = (language) => {

    if (!translations[language]) return;

    const dictionary = translations[language];

    // Update HTML language.
    root.lang = language;

    // Update document title.
    const titles = {
      en: "Roberto Moutinho | Data Scientist",
      pt: "Roberto Moutinho | Cientista de Dados",
      es: "Roberto Moutinho | Científico de Datos"
    };

    document.title = titles[language];

    // Translate all marked elements.
    document.querySelectorAll("[data-i18n]").forEach(element => {

      const key = element.dataset.i18n;

      if (Object.prototype.hasOwnProperty.call(dictionary, key)) {
        element.innerHTML = dictionary[key];
      }

    });

    // Update language buttons.
    languageButtons.forEach(button => {

      const active = button.dataset.language === language;

      button.classList.toggle("is-active", active);

      button.setAttribute("aria-pressed", String(active));

    });

    // Update project counter.
    const visibleProjects = projectCards.filter(card => !card.hidden).length;

    updateProjectCount(visibleProjects, language);

    // Update accessibility labels.
    const languageLabels = {
      en: "Select language",
      pt: "Selecionar idioma",
      es: "Seleccionar idioma"
    };

    const languageSwitcher = document.querySelector(".language-switcher");

    if (languageSwitcher) {
      languageSwitcher.setAttribute(
        "aria-label",
        languageLabels[language]
      );
    }

    // Update navigation accessibility.
    const menuLabels = {
      en: ["Open navigation", "Close navigation"],
      pt: ["Abrir navegação", "Fechar navegação"],
      es: ["Abrir navegación", "Cerrar navegación"]
    };

    const menuOpen = menuToggle?.getAttribute("aria-expanded") === "true";

    if (menuToggle) {
      menuToggle.setAttribute(
        "aria-label",
        menuLabels[language][menuOpen ? 1 : 0]
      );
    }

    // Persist visitor preference.
    try {
      localStorage.setItem("portfolio-language", language);
    } catch {
      // Local storage may be disabled.
    }

  };

  // Language button events.
  languageButtons.forEach(button => {

    button.addEventListener("click", () => {

      const language = button.dataset.language;

      applyLanguage(language);

    });

  });

  // Restore the last selected language.
  applyLanguage(getSavedLanguage());

  /* =========================================================
     4. MOBILE NAVIGATION
     ========================================================= */

  const closeMenu = () => {

    menuToggle?.setAttribute("aria-expanded", "false");

    menuToggle?.setAttribute(
      "aria-label",
      root.lang === "pt"
        ? "Abrir navegação"
        : root.lang === "es"
          ? "Abrir navegación"
          : "Open navigation"
    );

    navLinks?.classList.remove("is-open");

  };

  menuToggle?.addEventListener("click", () => {

    const isOpen =
      menuToggle.getAttribute("aria-expanded") === "true";

    const nextState = !isOpen;

    menuToggle.setAttribute(
      "aria-expanded",
      String(nextState)
    );

    const labels = {
      en: ["Open navigation", "Close navigation"],
      pt: ["Abrir navegação", "Fechar navegação"],
      es: ["Abrir navegación", "Cerrar navegación"]
    };

    menuToggle.setAttribute(
      "aria-label",
      labels[root.lang][nextState ? 1 : 0]
    );

    navLinks?.classList.toggle("is-open", nextState);

  });

  navAnchors.forEach(link => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", event => {

    if (event.key === "Escape") {
      closeMenu();
    }

  });

  document.addEventListener("click", event => {

    if (
      navLinks?.classList.contains("is-open") &&
      !navLinks.contains(event.target) &&
      !menuToggle?.contains(event.target)
    ) {
      closeMenu();
    }

  });

  /* =========================================================
     5. PROJECT FILTERING
     ========================================================= */

  const updateFilters = filter => {

    let visible = 0;

    filterButtons.forEach(button => {

      const active = button.dataset.filter === filter;

      button.classList.toggle("is-active", active);

      button.setAttribute(
        "aria-pressed",
        String(active)
      );

    });

    projectCards.forEach(card => {

      const categories = (
        card.dataset.category || ""
      ).split(/\s+/);

      const show =
        filter === "all" ||
        categories.includes(filter);

      card.hidden = !show;

      if (show) visible++;

    });

    updateProjectCount(visible, root.lang);

  };

  filterButtons.forEach(button => {

    button.addEventListener("click", () => {

      updateFilters(button.dataset.filter);

    });

  });

  updateProjectCount(projectCards.length, root.lang);

  /* =========================================================
     6. SCROLL REVEAL ANIMATIONS
     ========================================================= */

  const revealItems = document.querySelectorAll(".reveal");

  if (
    !reducedMotion &&
    "IntersectionObserver" in window
  ) {

    const revealObserver = new IntersectionObserver(
      (entries, observer) => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {

            entry.target.classList.add("is-visible");

            observer.unobserve(entry.target);

          }

        });

      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -35px 0px"
      }
    );

    revealItems.forEach(item => {
      revealObserver.observe(item);
    });

  } else {

    revealItems.forEach(item => {
      item.classList.add("is-visible");
    });

  }

  /* =========================================================
     7. ACTIVE NAVIGATION SECTION
     ========================================================= */

  const sections = [
    ...document.querySelectorAll("main section[id]")
  ];

  if ("IntersectionObserver" in window) {

    const sectionObserver = new IntersectionObserver(
      entries => {

        entries.forEach(entry => {

          if (!entry.isIntersecting) return;

          navAnchors.forEach(link => {

            const active =
              link.getAttribute("href") === `#${entry.target.id}`;

            link.classList.toggle("active", active);

            if (active) {
              link.setAttribute("aria-current", "location");
            } else {
              link.removeAttribute("aria-current");
            }

          });

        });

      },
      {
        rootMargin: "-35% 0px -55% 0px",
        threshold: 0
      }
    );

    sections.forEach(section => {
      sectionObserver.observe(section);
    });

  }

})();

