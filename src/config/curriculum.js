import argosScreenshot from '../assets/screenshots/argos.png';
import krismerakiScreenshot from '../assets/screenshots/krismeraki.png';
import pixappScreenshot from '../assets/screenshots/pixapp.png';
import pixashScreenshot from '../assets/screenshots/pixash.png';
import pokedexScreenshot from '../assets/screenshots/pokedex.png';
import relappmidosScreenshot from '../assets/screenshots/relappmidos.png';
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
      code: "https://github.com/H3llynx/pixash",
      tags: ["Vue 3", "TypeScript", "TailwindCSS", "Firebase", "Mobile First", "UX Design"]
    },
    {
      name: "RollerScape",
      screenshot: rollerscapeScreenshot,
      link: "https://h3llynx.github.io/rollerscape",
      code: "https://github.com/H3llynx/rollerscape",
      tags: ["React 19", "TypeScript", "TailwindCSS", "Supabase", "Geolocation API", "Vitest"]
    },
    {
      name: "Argos",
      screenshot: argosScreenshot,
      code: "https://github.com/H3llynx/8.Argos",
      tags: ["React 19", "TypeScript", "TailwindCSS", "Supabase", "CRUD"]
    },
    {
      name: "Star Wars SPA",
      screenshot: starwarsScreenshot,
      link: "https://h3llynx.github.io/7.Star-Wars",
      code: "https://github.com/H3llynx/7.Star-Wars",
      tags: ["React 19", "TypeScript", "Redux", "Firebase", "Vitest", "Storybook"]
    },
    {
      name: "Sasha Web Services",
      screenshot: swsScreenshot,
      link: "https://h3llynx.github.io/6.React",
      code: "https://github.com/H3llynx/6.React",
      tags: ["React", "TypeScript", "TailwindCSS", "Vitest"]
    },
    {
      name: "Pokedex Vue",
      screenshot: pokedexScreenshot,
      link: "https://h3llynx.github.io/pokedex-vue/",
      code: "https://github.com/H3llynx/pokedex-vue",
      tags: ["Vue 3", "API Integration", "Multi-View SPA", "Theme Toggle"]
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
        "Interactive UI"
      ]
    },
    {
      name: "Kris Meraki",
      screenshot: krismerakiScreenshot,
      link: "https://krismeraki.com",
      tags: ["WordPress", "E-commerce", "WooCommerce", "Payment Gateway"]
    }
  ]
};

export const english = {
  techSkills: {
    title: "Technical Skills",
    content: [
      {
        category: "Languages & Frameworks",
        skills: "HTML5, CSS3, JavaScript (ES6+), TypeScript, React 19, Vue 3, Redux, TailwindCSS, Sass"
      },
      {
        category: "Backend & Tools",
        skills: "RESTful APIs, Supabase, Firebase, Python (basics), Git, GitHub, Docker, Vitest, Storybook"
      },
      {
        category: "UX & Design",
        skills: "Wireframes (Figma), User Flows, Prototyping, Usability Testing & Research, WCAG Accessibility"
      },
      {
        category: "Methodologies",
        skills: "Scrum / Agile, Component-Driven Architecture, CI/CD basics"
      },
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
        year: "2025 - Present",
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
        period: "2025 - Present",
        title: "Front End Developer",
        company: "Barcelona Activa · Remote",
        description: "Frontend development for a knowledge sharing application following Agile (SCRUM) methodologies. New features development, API integration and creation of accessible UI components compliant with basic accessibility best practices, implementing frontend–backend integrations, aligning request/response payloads with PHP REST APIs. Stack: React 19, TypeScript, TailwindCSS, Context API, REST API, Vitest, Docker, Figma"
      },
      {
        period: "2022 - 2025",
        title: "Customer Support (French Market & Collectables)",
        company: "Catawiki · Remote",
        description: "Managed high-volume technical troubleshooting for a global E-commerce auction platform. Recognized as top performer for quality and efficiency."
      },
      {
        period: "2021 - 2022",
        title: "Customer Service Team Lead",
        company: "Teleperformance & Stripe · Remote",
        description: "Led a team of 13 agents in a high-growth FinTech environment. Developed data-driven metric trackers and localized technical documentation for the French B2B market."
      },
      {
        period: "2021",
        title: "Technical Support Expert for Stripe",
        company: "Teleperformance & Stripe · Remote",
        description: "First-line technical support for Stripe's French B2B market. Diagnosed payment/payout flow issues and guided merchants through dashboard configuration, API key setup (test/production environments)."
      },
      {
        period: "2020 - 2021",
        title: "Freelance Web & Digital Consultant",
        company: "Remote",
        description: "Spearheaded the e-commerce transformation of krismeraki.com, integrating full WooCommerce functionality with secure payment gateways."
      },
      {
        period: "2012 - 2014",
        title: "Customer Support (International Markets)",
        company: "eDreams ODIGEO · Barcelona",
        description: "Handled high-volume troubleshooting and booking resolution for a global E-commerce leader, utilizing complex internal GDS systems."
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
    title: "Habilidades Técnicas",
    content: [
      {
        category: "Lenguajes & Frameworks",
        skills: "HTML5, CSS3, JavaScript (ES6+), TypeScript, React 19, Vue 3, Redux, TailwindCSS, Sass"
      },
      {
        category: "Backend & Herramientas",
        skills: "APIs RESTful, Supabase, Firebase, Git, GitHub, Docker, Vitest, Storybook"
      },
      {
        category: "UX & Diseño",
        skills: "Wireframes (Figma), flujos de usuario, prototipos, pruebas de usabilidad, accesibilidad WCAG"
      },
      {
        category: "Metodologías",
        skills: "Scrum / Agile, arquitectura orientada a componentes, fundamentos de CI/CD"
      },
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
        year: "2025 - Presente",
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
    title: "Experiencia Laboral",
    content: [
      {
        period: "2025 - Presente",
        title: "Desarrolladora Front-End",
        company: "Barcelona Activa · Remoto",
        description: "Desarrollo frontend para una aplicación de intercambio de conocimiento siguiendo metodologías ágiles (SCRUM). Desarrollo de nuevas funcionalidades, integración de APIs y creación de componentes de UI accesibles cumpliendo con buenas prácticas básicas de accesibilidad. Implementación de integraciones frontend–backend, alineando los payloads de solicitudes y respuestas con APIs REST en PHP. Stack: React 19, TypeScript, TailwindCSS, Context API, REST API, Vitest, Docker, Figma."
      },
      {
        period: "2022 - 2025",
        title: "Atención al Cliente (Mercado Francés)",
        company: "Catawiki · Remoto",
        description: "Gestión de incidencias técnicas en una plataforma líder de subastas E-commerce. Reconocida por alta productividad y eficiencia en la resolución de problemas complejos."
      },
      {
        period: "2021 - 2022",
        title: "Team Lead de Atención al Cliente (Stripe)",
        company: "Teleperformance & Stripe · Remoto",
        description: "Liderazgo de equipo (13 agentes) en entorno FinTech. Creación de dashboards de métricas y localización de la base de conocimientos técnicos para el mercado francés."
      },
      {
        period: "2021",
        title: "Experta en Soporte Técnico (Stripe)",
        company: "Teleperformance & Stripe · Remoto",
        description: "Consultora técnica B2B. Diagnóstico de flujos de pago, configuración de claves API (Test/Prod) y gestión de escalaciones técnicas para fallos de integración."
      },
      {
        period: "2020 - 2021",
        title: "Consultora Freelance en Marketing Digital",
        company: "Remoto",
        description: "Lanzamiento de campañas de generación de leads en plataformas Meta. Diseño de landing pages responsive enfocadas en la optimización del túnel de conversión. Lideré la transformación e-commerce de krismeraki.com (WordPress), incluyendo UX, configuración del CMS e integración de pago."
      },
      {
        period: "2012 - 2014",
        title: "Atención al Cliente (Mercados Internacionales)",
        company: "eDreams ODIGEO · Barcelona",
        description: "Resolución de incidencias técnicas y reservas para un líder global de E-commerce, utilizando sistemas GDS complejos en un entorno dinámico."
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
    title: "Compétences Techniques",
    content: [
      {
        category: "Langages & Frameworks",
        skills: "HTML5, CSS3, JavaScript (ES6+), TypeScript, React 19, Vue 3, Redux, TailwindCSS, Sass"
      },
      {
        category: "Backend & Outils",
        skills: "APIs RESTful, Supabase, Firebase, Git, GitHub, Docker, Vitest, Storybook"
      },
      {
        category: "UX & Design",
        skills: "Maquettes (Figma), parcours utilisateur, prototypes, tests d'utilisabilité, accessibilité WCAG"
      },
      {
        category: "Méthodologies",
        skills: "Scrum / Agile, architecture orientée composants, bases CI/CD"
      },
    ]
  },
  professionalStrengths: {
    title: "Atouts Professionnels",
    content: [
      "Développement orienté produit",
      "Résolution de problèmes centrée utilisateur",
      "Communication technique inter-équipes",
      "Expertise FinTech & E-commerce B2B",
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
        year: "2025 - Présent",
        title: "Micro-certification en Développement Front-End",
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
    title: "Expérience Professionnelle",
    content: [
      {
        period: "2025 - Présent",
        title: "Développeuse Front-End",
        company: "Barcelona Activa · Télétravail",
        description: "Développement frontend pour une application de partage de connaissances suivant les méthodologies Agile (SCRUM). Développement de nouvelles fonctionnalités, intégration d’API et création de composants UI accessibles respectant les bonnes pratiques de base en accessibilité. Mise en œuvre des intégrations frontend–backend, en alignant les payloads de requêtes et de réponses avec des API REST en PHP. Stack : React 19, TypeScript, TailwindCSS, Context API, REST API, Vitest, Docker, Figma."
      },
      {
        period: "2022 - 2025",
        title: "Support Client (Marché Français & Objets de Collection)",
        company: "Catawiki · Télétravail",
        description: "Gestion des incidents techniques pour une plateforme d'enchères E-commerce internationale. Reconnue pour la qualité et l'efficacité dans la résolution des demandes des utilisateurs."
      },
      {
        period: "2021 - 2022",
        title: "Chef d’Équipe Service Clients (Stripe)",
        company: "Teleperformance & Stripe · Télétravail",
        description: "Management d'une équipe de 13 agents en environnement FinTech. Création d'outils de suivi de performance et localisation de la base de connaissances techniques pour le marché français."
      },
      {
        period: "2021",
        title: "Experte Support Technique (Stripe)",
        company: "Teleperformance & Stripe · Télétravail",
        description: "Consultante technique B2B. Diagnostic des flux de paiement, configuration des clés API (Test/Prod) et gestion des escalades techniques pour les échecs d'intégration."
      },
      {
        period: "2020 - 2021",
        title: "Consultante Indépendante en Marketing Digital",
        company: "Télétravail",
        description: "Réalisation de campagnes publicitaires sur les réseaux sociaux. Conception de landing pages responsive axées sur l'optimisation du tunnel de conversion. Pilotage de la transformation e-commerce de krismeraki.com (Wordpress): optimisation visuelle du site et intégration de la solution WooCommerce avec passerelles de paiement sécurisées."
      },
      {
        period: "2012 - 2014",
        title: "Agent de Voyages en Ligne",
        company: "eDreams ODIGEO · Barcelone",
        description: "Résolution d'incidents techniques et de réservations pour un leader mondial de l'E-commerce. GDS utilisés: Amadeus, Galileo"
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

