import argosScreenshot from '../assets/screenshots/argos.png';
import HappyPetScreenshot from '../assets/screenshots/happypet.png';
import krismerakiScreenshot from '../assets/screenshots/krismeraki.png';
import pixappScreenshot from '../assets/screenshots/pixapp.png';
import pixashLight from '../assets/screenshots/pixash-light.png';
import pixashScreenshot from '../assets/screenshots/pixash.png';
import pokedexScreenshot from '../assets/screenshots/pokedex.png';
import relappmidosScreenshot from '../assets/screenshots/relappmidos.png';
import rollerscapeLight from '../assets/screenshots/rollerscape-light.png';
import rollerscapeScreenshot from '../assets/screenshots/rollerscape.png';
import starwarsScreenshot from '../assets/screenshots/starwars.png';
import swsScreenshot from '../assets/screenshots/sws.png';

const certifications = {
  ux: {
    link: "https://coursera.org/share/866573eb7566a3192b173fa335ba610a",
    logo: "fa-brands fa-google",
    tags: ["UX Design", "Figma", "Wireframing", "Prototyping", "WCAG", "Usability Testing"]
  },
  javascript: {
    link: "https://freecodecamp.org/certification/hellynx/javascript-algorithms-and-data-structures-v8",
    logo: "fa-brands fa-free-code-camp",
    tags: ["JavaScript", "Frontend"]
  },
  front: {
    link: "https://www.freecodecamp.org/certification/Hellynx/responsive-web-design",
    logo: "fa-brands fa-free-code-camp",
    tags: ["Responsive Design", "HTML5", "CSS3", "Frontend"]
  },
}

export const portfolio = {
  title: "Portfolio",
  content: [
    {
      name: "Pixash [In Progress]",
      screenshot: pixashScreenshot,
      screenshotLight: pixashLight,
      link: "https://h3llynx.github.io/pixash/",
      code: "https://github.com/H3llynx/pixash",
      tags: ["Vue 3", "Composition API", "TypeScript", "TailwindCSS", "Firebase", "Mobile First"]
    },
    {
      name: "RollerScape",
      screenshot: rollerscapeScreenshot,
      screenshotLight: rollerscapeLight,
      link: "https://h3llynx.github.io/rollerscape",
      code: "https://github.com/H3llynx/rollerscape",
      tags: ["React 19", "TypeScript", "TailwindCSS", "Supabase", "Geolocation API", "Responsive UI"]
    },
    {
      name: "Argos",
      screenshot: argosScreenshot,
      code: "https://github.com/H3llynx/8.Argos",
      tags: ["React 19", "TypeScript", "TailwindCSS", "Supabase", "CRUD", "Responsive UI"]
    },
    {
      name: "Star Wars SPA",
      screenshot: starwarsScreenshot,
      link: "https://h3llynx.github.io/7.Star-Wars",
      code: "https://github.com/H3llynx/7.Star-Wars",
      tags: ["React 19", "TypeScript", "Redux", "Firebase", "Responsive UI"]
    },
    {
      name: "Sasha Web Services",
      screenshot: swsScreenshot,
      link: "https://h3llynx.github.io/6.React",
      code: "https://github.com/H3llynx/6.React",
      tags: ["React", "TypeScript", "TailwindCSS", "Responsive UI"]
    },
    {
      name: "Pokedex Vue",
      screenshot: pokedexScreenshot,
      link: "https://h3llynx.github.io/pokedex-vue/",
      code: "https://github.com/H3llynx/pokedex-vue",
      tags: ["Vue 3", "API Integration", "Multi-View SPA", "Theme Toggle", "Responsive UI"]
    },
    {
      name: "Relappmidos",
      screenshot: relappmidosScreenshot,
      code: "https://github.com/H3llynx/Relappmidos",
      tags: [
        "HTML",
        "CSS",
        "JavaScript",
        "Authentication",
        "API Integration",
        "Interactive UI",
        "Game Mechanics"
      ]
    },
    {
      name: "PixApp",
      screenshot: pixappScreenshot,
      link: "https://h3llynx.github.io/PixApp/",
      code: "https://github.com/H3llynx/PixApp",
      tags: [
        "HTML",
        "CSS",
        "JavaScript",
        "Interactive UI",
        "Responsive UI"
      ]
    },
    {
      name: "Kris Meraki",
      screenshot: krismerakiScreenshot,
      link: "https://krismeraki.com",
      tags: ["WordPress", "E-commerce", "WooCommerce", "Payment Gateway", "Responsive UI"]
    },
    {
      name: "Happy Pet",
      screenshot: HappyPetScreenshot,
      tags: ["WordPress", "Elementor", "Landing page", "Responsive UI"]
    }
  ]
};

export const english = {
  techSkills: {
    title: "Technical Skills",
    content: [
      {
        category: "Front-End Development",
        skills: "HTML5, CSS3, JavaScript (ES6+), TypeScript, React 19, Vue 3, Redux, Tailwind CSS, Sass"
      },
      {
        category: "APIs & Data",
        skills: "REST API integration, Supabase, Firebase, SQL (fundamentals), Python (fundamentals)"
      },
      {
        category: "Development Tools & Testing",
        skills: "Git, GitHub, Docker, Vitest, Storybook, CI/CD fundamentals"
      },
      {
        category: "UX & Accessibility",
        skills: "Figma, Wireframing, User Flows, Prototyping, Usability Testing, User Research, WCAG fundamentals"
      },
      {
        category: "Development Practices",
        skills: "Scrum, Component-Based Architecture, Responsive Design"
      }
    ]
  },
  professionalStrengths: {
    title: "Professional Strengths",
    content: [
      "Product-minded development",
      "User-focused problem solving",
      "Cross-team technical communication",
      "B2B FinTech & E-commerce expertise",
      "Multilingual communication (EN/FR/ES)"
    ]
  },
  formalEducation: {
    title: "Formal Education",
    content: [
      { year: "2011", title: "Bachelor's Degree in Tourism" },
      { year: "2009", title: "High School Diploma in Economics and Social Science" }
    ]
  },
  technicalProfessionalTraining: {
    title: "Technical & Professional Training",
    content: [
      {
        year: "2025 - 2026",
        title: "Microcredential in Front-End Development",
        institution: "Universitat Politècnica de Catalunya",
        status: "In Progress"
      },
      {
        year: "2025",
        title: "Front-End React Specialization Bootcamp",
        institution: "IT Academy (Barcelona Activa)",
      },
      {
        year: "2025",
        title: "Front-End Development Course",
        institution: "Universitat Oberta de Catalunya (UOC)",
      },
      {
        year: "2025",
        title: "Google UX Design Professional Certificate",
        institution: "Coursera",
      },
      {
        year: "2025",
        title: "JavaScript Algorithms and Data Structures",
        institution: "freeCodeCamp",
      },
      {
        year: "2025",
        title: "Foundations of Python Programming",
        institution: "IDFO",
      },
      {
        year: "2025",
        title: "Responsive web design",
        institution: "freeCodeCamp",
      },
      {
        year: "2021",
        title: "App Development for Internet & Mobile (IFCD017PO)",
        institution: "Grupo Hedima"
      }
    ]
  },
  workExperience: {
    title: "Work Experience",
    content: [
      {
        period: "2026 - Present",
        title: "Tech Support Analyst",
        company: "IQVIA · Remote",
        description: "Processed a high volume of user account creation, role modification, and account deactivation requests for connected devices, supporting users worldwide. Contributed to a dedicated task force that cleared a critical backlog of access requests and restored compliance with agreed service-level targets (SLAs)."
      },
      {
        period: "2025 - 2026",
        title: "Front End Developer",
        company: "Barcelona Activa · Remote",
        description: "Collaborated on a knowledge-sharing application using React and TypeScript within a Scrum framework. Developed features and reusable UI components following accessibility best practices. Integrated PHP REST APIs and coordinated request and response data structures between the front end and back end. Stack: React 19, TypeScript, Tailwind CSS, Context API, Vitest, Docker, Figma."
      },
      {
        period: "2022 - 2025",
        title: "Customer Support (French Market & Collectables)",
        company: "Catawiki · Remote",
        description: "Managed high-volume technical troubleshooting for a global E-commerce auction platform. Recognized as top performer for quality and efficiency."
      },
      {
        period: "2021–2022",
        title: "Customer Support Team Lead — Stripe",
        company: "Teleperformance — Stripe account · Remote",
        description: "Led a team of 13 customer support agents serving Stripe’s French-speaking business customers. Created performance-tracking tools and localized technical knowledge-base content for the French market."
      },
      {
        period: "2021",
        title: "Technical Support Expert — Stripe",
        company: "Teleperformance — Stripe account · Remote",
        description: "Provided first-line technical support to Stripe’s French-speaking business customers. Investigated payment and payout issues and guided merchants through dashboard configuration and API key setup for test and live environments. Acted as a point of contact for merchants undergoing fraud-related reviews, collecting information requested by the Risk and Compliance teams and communicating review outcomes."
      },
      {
        period: "2020–2021",
        title: "Freelance Web & UX/UI Designer",
        company: "Self-employed · Remote",
        description: "Designed and built responsive websites and landing pages using WordPress and Elementor. Managed the redesign and launch of the krismeraki.com WooCommerce store, including payment setup. Created and monitored Meta Ads campaigns, using A/B testing and user-behaviour data to refine landing pages and conversion journeys. Stack: WordPress, Elementor, WooCommerce, HTML/CSS, Meta Ads."
      },
      {
        period: "2014 - 2015",
        title: "Freelance Web Developer — Independent Projects",
        company: "Remote",
        description: "Designed and developed responsive websites and HTML/CSS templates for sports professionals and personal projects. Built PrestaShop e-commerce projects, focusing on page layouts, mobile usability, and navigation."
      },
      {
        period: "2012 - 2014",
        title: "Customer Support (International Markets)",
        company: "eDreams ODIGEO · Barcelona",
        description: "Provided customer support in French, English, and Spanish, handling billing enquiries, flight bookings, changes, and cancellations using the Amadeus and Galileo global distribution systems (GDS)."
      }
    ]
  },
  certifications: {
    title: "Digital certifications",
    content: {
      ux: {
        title: "Google UX Design",
        info: certifications.ux
      },
      javascript: {
        title: "JavaScript Algorithms and Data Structures",
        info: certifications.javascript
      },
      front: {
        title: "Responsive Web Design",
        info: certifications.front
      }
    }
  }
};

export const spanish = {
  techSkills: {
    title: "Competencias técnicas",
    content: [
      {
        category: "Desarrollo front-end",
        skills: "HTML5, CSS3, JavaScript (ES6+), TypeScript, React 19, Vue 3, Redux, Tailwind CSS, Sass"
      },
      {
        category: "APIs y datos",
        skills: "Integración de APIs REST, Supabase, Firebase, conocimientos básicos de SQL y Python"
      },
      {
        category: "Herramientas de desarrollo y pruebas",
        skills: "Git, GitHub, Docker, Vitest, Storybook, fundamentos de CI/CD"
      },
      {
        category: "UX y accesibilidad",
        skills: "Figma, wireframes, flujos de usuario, prototipado, pruebas de usabilidad, investigación de usuarios, fundamentos de las WCAG"
      },
      {
        category: "Prácticas de desarrollo",
        skills: "Scrum, arquitectura basada en componentes, diseño responsive"
      }
    ]
  },
  professionalStrengths: {
    title: "Fortalezas Profesionales",
    content: [
      "Desarrollo orientado a producto",
      "Resolución de problemas centrada en el usuario",
      "Comunicación técnica interfuncional",
      "Experiencia en FinTech y E-commerce B2B",
      "Comunicación multilingüe (EN/FR/ES)"
    ]
  },
  formalEducation: {
    title: "Formación Académica",
    content: [
      { year: "2011", title: "Grado en Turismo" },
      { year: "2009", title: "Bachillerato en Economía y Ciencias Sociales" }
    ]
  },
  technicalProfessionalTraining: {
    title: "Formación Técnica",
    content: [
      {
        year: "2025 - 2026",
        title: "Microcredencial en Desarrollo Front-End",
        institution: "Universitat Politècnica de Catalunya",
        status: "En curso"
      },
      {
        year: "2025",
        title: "Bootcamp de Especialización en React",
        institution: "IT Academy (Barcelona Activa)",
      },
      {
        year: "2025",
        title: "Curso de Desarrollador Front-End",
        institution: "Universitat Oberta de Catalunya (UOC)",
      },
      {
        year: "2025",
        title: "Certificado Profesional de Diseño UX de Google",
        institution: "Coursera",
      },
      {
        year: "2025",
        title: "Algoritmos y Estructuras de Datos en JavaScript",
        institution: "freeCodeCamp",
      },
      {
        year: "2025",
        title: "Fundamentos de Programación en Python",
        institution: "IDFO",
      },
      {
        year: "2025",
        title: "Diseño web responsive",
        institution: "freeCodeCamp",
      },
      {
        year: "2021",
        title: "Desarrollo de Aplicaciones para Internet y Móviles (IFCD017PO)",
        institution: "Grupo Hedima"
      }
    ]
  },
  workExperience: {
    title: "Experiencia profesional",
    content: [
      {
        period: "2026–Actualidad",
        title: "Analista de soporte técnico",
        company: "IQVIA · Remoto",
        description: "Gestión de un gran volumen de solicitudes de creación de cuentas de usuario, modificación de roles y desactivación de cuentas para dispositivos conectados, dando soporte a usuarios de todo el mundo. Participación en un equipo de refuerzo que resolvió una acumulación crítica de solicitudes de acceso y restableció el cumplimiento de los plazos de servicio acordados (SLA)."
      },
      {
        period: "2025–2026",
        title: "Desarrolladora front-end — Proyecto en equipo de IT Academy",
        company: "Barcelona Activa · Remoto",
        description: "Desarrollo en equipo de una aplicación para compartir conocimientos con React y TypeScript, siguiendo el marco Scrum. Creación de funcionalidades y componentes de interfaz reutilizables siguiendo buenas prácticas de accesibilidad. Integración de APIs REST desarrolladas en PHP y coordinación de los formatos de datos intercambiados entre el frontend y el backend. Stack: React 19, TypeScript, Tailwind CSS, Context API, Vitest, Docker, Figma."
      },
      {
        period: "2022–2025",
        title: "Especialista en atención al cliente — Mercado francés y artículos de colección",
        company: "Catawiki · Remoto",
        description: "Gestión de un gran volumen de consultas y resolución de incidencias de usuarios en una plataforma internacional de subastas online, para el mercado francés y la categoría de artículos de colección. Reconocida por la calidad del servicio y la eficiencia en la gestión de solicitudes."
      },
      {
        period: "2021–2022",
        title: "Responsable de equipo de atención al cliente — Stripe",
        company: "Teleperformance — Servicio para Stripe · Remoto",
        description: "Dirección de un equipo de 13 agentes de atención al cliente para empresas francófonas usuarias de Stripe. Creación de herramientas de seguimiento del rendimiento y adaptación de los contenidos de la base de conocimientos técnicos al mercado francés."
      },
      {
        period: "2021",
        title: "Experta en soporte técnico — Stripe",
        company: "Teleperformance — Servicio para Stripe · Remoto",
        description: "Soporte técnico de primer nivel a clientes empresariales francófonos de Stripe. Diagnóstico de incidencias en pagos y transferencias a cuentas bancarias, y asistencia en la configuración del panel de control y de las claves API para los entornos de prueba y producción. Punto de contacto para los comercios sujetos a revisiones por sospecha de fraude: recopilación de la información solicitada por los equipos de Riesgo y Cumplimiento Normativo y comunicación de los resultados de las revisiones."
      },
      {
        period: "2020–2021",
        title: "Diseñadora web y UX/UI freelance",
        company: "Autónoma · Remoto",
        description: "Diseño y desarrollo de sitios web y landing pages responsive con WordPress y Elementor. Gestión del rediseño y lanzamiento de la tienda WooCommerce krismeraki.com, incluida la configuración de los métodos de pago. Creación y seguimiento de campañas de Meta Ads, con pruebas A/B y análisis del comportamiento de los usuarios para ajustar las páginas y los recorridos de conversión. Stack: WordPress, Elementor, WooCommerce, HTML/CSS, Meta Ads."
      },
      {
        period: "2014–2015",
        title: "Desarrolladora web freelance",
        company: "Autónoma · Remoto",
        description: "Diseño y desarrollo de sitios web responsive y plantillas HTML/CSS para profesionales del deporte y proyectos personales. Desarrollo de proyectos de comercio electrónico con PrestaShop, con especial atención a la estructura visual, la usabilidad móvil y la navegación."
      },
      {
        period: "2012–2014",
        title: "Agente de viajes online — Mercados internacionales",
        company: "eDreams ODIGEO · Barcelona",
        description: "Atención al cliente en francés, inglés y español: gestión de consultas de facturación, reservas, cambios y cancelaciones de vuelos mediante los sistemas de distribución global (GDS) Amadeus y Galileo."
      }
    ]
  },
  certifications: {
    title: "Certificaciones digitales",
    content: {
      ux: {
        title: "Google UX Design",
        info: certifications.ux
      },
      javascript: {
        title: "Algoritmos y Estructuras de Datos en JavaScript",
        info: certifications.javascript
      },
      front: {
        title: "Diseño web responsive",
        info: certifications.front
      }
    }
  }
};

export const french = {
  techSkills: {
    title: "Compétences techniques",
    content: [
      {
        category: "Développement front-end",
        skills: "HTML5, CSS3, JavaScript (ES6+), TypeScript, React 19, Vue 3, Redux, Tailwind CSS, Sass"
      },
      {
        category: "API & Données",
        skills: "Intégration d’API REST, Supabase, Firebase, bases en SQL et en Python"
      },
      {
        category: "Outils de développement & Tests",
        skills: "Git, GitHub, Docker, Vitest, Storybook, notions de CI/CD"
      },
      {
        category: "UX & Accessibilité",
        skills: "Figma, wireframes, parcours utilisateurs, prototypage, tests d’utilisabilité, recherche utilisateur, notions des WCAG"
      },
      {
        category: "Pratiques de développement",
        skills: "Scrum, architecture par composants, conception responsive"
      }
    ]
  },
  professionalStrengths: {
    title: "Atouts Professionnels",
    content: [
      "Développement orienté produit",
      "Résolution de problèmes centrée utilisateur",
      "Communication technique inter-équipes",
      "Expérience en fintech B2B et e-commerce",
      "Communication multilingue (EN/FR/ES)"
    ]
  },
  formalEducation: {
    title: "Formation Académique",
    content: [
      { year: "2011", title: "BTS Ventes et Productions Touristiques" },
      { year: "2009", title: "Baccalauréat Économique et Social" }
    ]
  },
  technicalProfessionalTraining: {
    title: "Formation Technique",
    content: [
      {
        year: "2025 - 2026",
        title: "Micro-certification universitaire en Développement Front-End",
        institution: "Universitat Politècnica de Catalunya",
        status: "En cours"
      },
      {
        year: "2025",
        title: "Bootcamp Spécialisation React",
        institution: "IT Academy (Barcelona Activa)",
      },
      {
        year: "2025",
        title: "Formation Développeur Front-End",
        institution: "Universitat Oberta de Catalunya (UOC)",
      },
      {
        year: "2025",
        title: "Google Certificat Professionnel : UX Design",
        institution: "Coursera",
      },
      {
        year: "2025",
        title: "Algorithmes et Structures de Données en JavaScript",
        institution: "freeCodeCamp",
      },
      {
        year: "2025",
        title: "Bases de la Programmation Python",
        institution: "IDFO",
      },
      {
        year: "2025",
        title: "Web design responsive",
        institution: "freeCodeCamp",
      },
      {
        year: "2021",
        title: "Développement d’Applications Web et Mobiles (IFCD017PO)",
        institution: "Grupo Hedima"
      }
    ]
  },
  workExperience: {
    title: "Expérience professionnelle",
    content: [
      {
        period: "Depuis 2026",
        title: "Analyste support technique",
        company: "IQVIA · Télétravail",
        description: "Traitement d’un volume important de demandes de création de comptes utilisateurs, de modification des rôles et de désactivation de comptes pour des appareils connectés, auprès d’utilisateurs du monde entier. Contribution à une équipe de renfort ayant résorbé un retard critique dans le traitement des demandes d’accès et rétabli le respect des délais de service convenus (SLA)."
      },
      {
        period: "2025–2026",
        title: "Développeuse front-end — Projet collectif IT Academy",
        company: "Barcelona Activa · Télétravail",
        description: "Développement en équipe d’une application de partage de connaissances avec React et TypeScript, dans un cadre Scrum. Création de fonctionnalités et de composants d’interface réutilisables suivant les bonnes pratiques d’accessibilité. Intégration d’API REST développées en PHP et coordination des formats de données échangées entre le front-end et le back-end. Stack : React 19, TypeScript, Tailwind CSS, Context API, Vitest, Docker, Figma."
      },
      {
        period: "2022–2025",
        title: "Chargée de support client — Marché français et objets de collection",
        company: "Catawiki · Télétravail",
        description: "Gestion d’un volume important de demandes et résolution de problèmes utilisateurs sur une plateforme internationale d’enchères en ligne, pour le marché français et la catégorie des objets de collection. Reconnue pour la qualité du service et l’efficacité du traitement des demandes."
      },
      {
        period: "2021–2022",
        title: "Cheffe d’équipe support client — Stripe",
        company: "Teleperformance — Mission pour Stripe · Télétravail",
        description: "Encadrement d’une équipe de 13 agents accompagnant les clients professionnels francophones de Stripe. Création d’outils de suivi de la performance et adaptation des contenus de la base de connaissances techniques au marché français."
      },
      {
        period: "2021",
        title: "Experte en support technique — Stripe",
        company: "Teleperformance — Mission pour Stripe · Télétravail",
        description: "Support technique de premier niveau auprès des clients professionnels francophones de Stripe. Diagnostic des problèmes de paiement et de versement, et accompagnement dans la configuration du tableau de bord et des clés API pour les environnements de test et de production. Interlocutrice des marchands dans le cadre de vérifications liées à des suspicions de fraude : collecte des informations demandées par les équipes Risque et Conformité et communication des résultats des vérifications."
      },
      {
        period: "2020–2021",
        title: "Designer web et UX/UI freelance",
        company: "Indépendante · Télétravail",
        description: "Conception et développement de sites web et de landing pages responsive avec WordPress et Elementor. Prise en charge de la refonte et du lancement de la boutique WooCommerce krismeraki.com, y compris la configuration des moyens de paiement. Création et suivi de campagnes Meta Ads, avec tests A/B et analyse du comportement des utilisateurs pour ajuster les pages et les parcours de conversion. Stack : WordPress, Elementor, WooCommerce, HTML/CSS, Meta Ads."
      },
      {
        period: "2014–2015",
        title: "Développeuse web freelance",
        company: "Indépendante · Télétravail",
        description: "Conception et développement de sites web responsive et de modèles de pages en HTML/CSS pour des professionnels du sport et des projets personnels. Réalisation de projets e-commerce sous PrestaShop, avec une attention particulière à la mise en page, à l’ergonomie mobile et à la navigation."
      },
      {
        period: "2012–2014",
        title: "Agente de voyages en ligne — Marchés internationaux",
        company: "eDreams ODIGEO · Barcelone",
        description: "Assistance aux clients en français, anglais et espagnol : facturation, réservations, modifications et annulations de vols à l’aide des systèmes de réservation GDS Amadeus et Galileo."
      }
    ]
  },
  certifications: {
    title: "Certifications numériques",
    content: {
      ux: {
        title: "Google UX Design",
        info: certifications.ux
      },
      javascript: {
        title: "Algorithmes et Structures de Données en JavaScript",
        info: certifications.javascript
      },
      front: {
        title: "Web design responsive",
        info: certifications.front
      }
    }
  }
};

