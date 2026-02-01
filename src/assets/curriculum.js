import krismerakiScreenshot from './screenshots/krismeraki.png';
import pixappScreenshot from './screenshots/pixapp.png';
import pokedexScreenshot from './screenshots/pokedex.png';
import relappmidosScreenshot from './screenshots/relappmidos.png';
import starwarsScreenshot from './screenshots/starwars.png';
import swsScreenshot from './screenshots/sws.png';

const certifications = {
  ux: {
    link: "https://coursera.org/share/866573eb7566a3192b173fa335ba610a",
    logo: "fa-brands fa-google",
    tags: ["UX Design", "Figma", "Wireframing", "Prototyping", "Web Content Accessibility Guidelines", "Usability Testing"]
  },
  javascript: {
    link: "https://freecodecamp.org/certification/hellynx/javascript-algorithms-and-data-structures-v8",
    logo: "fa-brands fa-free-code-camp",
    tags: ["Javascript", "WebDesign", "Frontend"]
  },
  front: {
    link: "https://www.freecodecamp.org/certification/Hellynx/responsive-web-design",
    logo: "fa-brands fa-free-code-camp",
    tags: ["ResponsiveDesign", "HTML5", "CSS3", "WebDesign", "Frontend"]
  },
}

export const portfolio = {
  title: "Portfolio",
  content: [
    {
      name: "Star Wars",
      screenshot: starwarsScreenshot,
      link: "https://h3llynx.github.io/7.Star-Wars",
      code: "https://github.com/H3llynx/7.Star-Wars",
      tags: [
        "React",
        "TypeScript",
        "Redux",
        "CSS",
        "Firebase",
        "Vitest",
        "Storybook"
      ]
    },
    {
      name: "Sasha Web Services",
      screenshot: swsScreenshot,
      link: "https://h3llynx.github.io/6.React",
      code: "https://github.com/H3llynx/6.React",
      tags: [
        "React",
        "TypeScript",
        "TailwindCSS",
        "Vitest"
      ]
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
      name: "Pokedex",
      screenshot: pokedexScreenshot,
      link: "https://h3llynx.github.io/pokedex-vue/",
      code: "https://github.com/H3llynx/pokedex-vue",
      tags: [
        "Vue",
        "JavaScript",
        "API Integration",
        "Multi-View SPA",
        "Interactive Map",
        "Theme Toggle"
      ]
    },
    {
      name: "Kris Meraki",
      screenshot: krismerakiScreenshot,
      link: "https://krismeraki.com",
      tags: [
        "Wordpress",
        "Online store",
        "Payment Gateway Integration",
        "WordPress Customization"
      ]
    }
  ]
};

export const english = {
  uxDesignSkills: {
    title: "UX & Design Skills",
    content: [
      "Prototypes, wireframes, user flows, mockups",
      "User research and usability testing"
    ]
  },
  toolsAndPlatforms: {
    title: "Supporting tools",
    content: [
      "Google Workspace & Microsoft Office Suite",
      "Advanced Excel & Google Sheets for data analysis",
      "CRM & help-desk systems (Zendesk, Salesforce, Kustomer)",
      "Remote collaboration: Slack, Zoom"
    ]
  },
  professionalStrengths: {
    title: "Professional strengths",
    content: [
      "Detail-oriented",
      "User-focused problem solving",
      "Cross-team collaboration & communication",
      "Project and workflow organization",
      "Multilingual communication (EN/FR/ES)"
    ]
  },
  formalEducation: {
    title: "Formal education",
    content: [
      {
        year: "2011",
        title: "Bachelor's Degree in Tourism"
      },
      {
        year: "2009",
        title: "High School Diploma in Economics and Social Science"
      }
    ]
  },
  technicalProfessionalTraining: {
    title: "Technical & profesional training",
    content: [
      {
        year: "2025",
        title: "Front-End Development Bootcamp (React specialization) ",
        institution: "IT Academy (Barcelona Activa)",
        status: "in progress"
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
        title: "Front-End Developer Course",
        institution: "UOC",
      },
      {
        year: "2025",
        title: "Foundations of Python Programming",
        institution: "IDFO"
      },
      {
        year: "2025",
        title: "Responsive Web Design Developer",
        institution: "freeCodeCamp",
      },
      {
        year: "2021",
        title: "Application Development for the Internet and Mobile Devices – AF 4 (IFCD017PO)",
        institution: "Grupo Hedima"
      },
      {
        year: "2020",
        title: "Social Media Advertising & Marketing Analytics",
        institution: "ITO"
      }
    ]
  },
  workExperience: {
    title: "Work experience",
    content: [
      {
        period: "2022 - 2025",
        title: "Customer Support (French Market & Collectables)",
        company: "Catawiki · Remote (based in Barcelona, Spain)",
        description: "Handled diverse customer inquiries, ensuring timely and effective resolutions, and recognized as a top performer for high productivity."
      },
      {
        period: "2021 - 2022",
        title: "Customer Service Team Lead",
        company: "Teleperformance Spain & Stripe · Remote (based in Barcelona, Spain)",
        description: "Led a team of 9 to 13 customer service agents, ensuring high performance through coaching, monitoring, and workflow management."
      },
      {
        period: "2021",
        title: "Technical Support Expert for Stripe (French Market)",
        company: "Teleperformance Spain & Stripe · Remote (based in Barcelona, Spain)",
        description: "Resolved complex technical issues with strong analytical skills, ensuring high satisfaction levels for B2B clients."
      },
      {
        period: "2020 - 2021",
        title: "Freelance Digital Marketing Consultant",
        company: "Remote",
        description: "Designed targeted lead generation campaigns and intuitive landing pages to boost conversions. Redesigned and launched a client’s full website including e-commerce functionality."
      },
      {
        period: "2019 - 2020",
        title: "IT Recruitment Consultant",
        company: "Grupo Norconsulting · Canary Islands"
      },
      {
        period: "2018 - 2019",
        title: "See Lion Activities Promoter",
        company: "Aspro Parks · Canary Islands"
      },
      {
        period: "2015 - 2018",
        title: "Hospitality Service Professional (5* Resort)",
        company: "Salobre Hotel Resort & Serenity · Canary Islands"
      },
      {
        period: "2012 - 2014",
        title: "Online Travel Agent",
        company: "eDreams (ODIGEO) · Barcelona, Spain"
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
  uxDesignSkills: {
    title: "Habilidades UX y de Diseño",
    content: [
      "Prototipos, wireframes, flujos de usuario, maquetas",
      "Investigación de usuarios y pruebas de usabilidad"
    ]
  },
  toolsAndPlatforms: {
    title: "Herramientas complementarias",
    content: [
      "Google Workspace y Microsoft Office",
      "Excel avanzado / Google Sheets",
      "CRM y sistemas de ticketing (Zendesk, Salesforce, Kustomer)",
      "Colaboración remota: Slack, Zoom"
    ]
  },
  professionalStrengths: {
    title: "Fortalezas profesionales",
    content: [
      "Orientación al detalle",
      "Colaboración interdepartamental",
      "Optimización de flujos de trabajo",
      "Comunicación multilingüe"
    ]
  },
  formalEducation: {
    title: "Formación académica",
    content: [
      {
        year: "2011",
        title: "Técnico Superior en Turismo"
      },
      {
        year: "2009",
        title: "Bachillerato en Economía y Ciencias Sociales"
      }
    ]
  },
  technicalProfessionalTraining: {
    title: "Formación profesional complementaria",
    content: [
      {
        year: "2025",
        title: "Bootcamp de Desarrollo Front End (especialización React)",
        institution: "IT Academy (Barcelona Activa)",
        status: "en curso"
      },
      {
        year: "2025",
        title: "Certificado Profesional en Diseño UX de Google",
        institution: "Coursera",
      },
      {
        year: "2025",
        title: "Algoritmos y Estructuras de Datos en JavaScript",
        institution: "freeCodeCamp",
      },
      {
        year: "2025",
        title: "Front End Developer",
        institution: "UOC"
      },
      {
        year: "2025",
        title: "Fundamentos de Programación en Python",
        institution: "IDFO"
      },
      {
        year: "2025",
        title: "Diseño web responsive",
        institution: "freeCodeCamp",
      },
      {
        year: "2021",
        title: "Desarrollo de aplicaciones para internet y dispositivos móviles – AF 4 (IFCD017PO)",
        institution: "Grupo Hedima"
      },
      {
        year: "2020",
        title: "Publicidad en Redes Sociales y Análisis de Marketing",
        institution: "ITO"
      }
    ]
  },
  workExperience: {
    title: "Experiencia laboral",
    content: [
      {
        period: "2022 - 2025",
        title: "Atención al Cliente (mercado francés y coleccionables)",
        company: "Catawiki · Remoto (Barcelona)",
        description:
          "Atención y soporte multilingüe a clientes internacionales, gestionando incidencias y consultas en subastas online. Reconocida por productividad y eficiencia."
      },
      {
        period: "2021 - 2022",
        title: "Jefa de Equipo de Atención al Cliente",
        company: "Teleperformance España & Stripe · Remoto (Barcelona)",
        description:
          "Liderazgo de equipo (9-13 agentes) en el sector fintech, seguimiento de KPIs y optimización del rendimiento y calidad del servicio."
      },
      {
        period: "2021",
        title: "Agente de Soporte Técnico (mercado francés)",
        company: "Teleperformance España & Stripe · Remoto (Barcelona)",
        description:
          "Resolución de incidencias técnicas complejas para clientes B2B, con enfoque en la satisfacción del cliente y mejora continua del servicio."
      },
      {
        period: "2020 - 2021",
        title: "Consultora Freelance en Marketing Digital",
        company: "Remoto",
        description:
          "Creación de campañas de generación de leads y diseño de páginas de destino intuitivas para impulsar conversiones. Rediseño e implementación completa de una web de cliente, incluyendo la configuración de tienda online. "
      },
      {
        period: "2019 - 2020",
        title: "Consultora de Reclutamiento IT",
        company: "Grupo Norconsulting · Gran Canaria"
      },
      {
        period: "2018 - 2019",
        title: "Promotora de Actividades con Leones Marinos",
        company: "Aspro Parks · Gran Canaria"
      },
      {
        period: "2015 - 2018",
        title: "Profesional de Atención en Hostelería (Resort 5*)",
        company: "Salobre Hotel Resort & Serenity · Gran Canaria"
      },
      {
        period: "2012 - 2014",
        title: "Agente de Viaje Online",
        company: "eDreams (ODIGEO) · Barcelona"
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
  uxDesignSkills: {
    title: "Compétences UX et Design",
    content: [
      "Prototypes, wireframes, parcours utilisateur et maquettes",
      "Recherche utilisateur et tests d’utilisabilité"
    ]
  },
  toolsAndPlatforms: {
    title: "Outils complémentaires",
    content: [
      "Google Workspace et Microsoft Office",
      "Excel avancé / Google Sheets",
      "CRM et systèmes de tickets (Zendesk, Salesforce, Kustomer)",
      "Collaboration à distance : Slack, Zoom"
    ]
  },
  professionalStrengths: {
    title: "Atouts professionnels",
    content: [
      "Résolution de problèmes centrée sur l’utilisateur",
      "Collaboration et communication inter-équipes",
      "Leadership et organisation des processus opérationnels",
      "Communication multilingue (EN/FR/ES)"
    ]
  },
  formalEducation: {
    title: "Formation académique",
    content: [
      {
        year: "2011",
        title: "BTS Ventes et productions tourisriques"
      },
      {
        year: "2009",
        title: "Baccalauréat Économique et Social"
      }
    ]
  },
  technicalProfessionalTraining: {
    title: "Formation technique et professionnelle",
    content: [
      {
        year: "2025",
        title: "Bootcamp Développement Front-end (spécialisation React)",
        institution: "IT Academy (Barcelona Activa)",
        status: "en cours"
      },
      {
        year: "2025",
        title: "Google Certificat Professionnel: UX Design",
        institution: "Coursera",
      },
      {
        year: "2025",
        title: "Algorithmes et Structures de Données en JavaScript",
        institution: "freeCodeCamp",
      },
      {
        year: "2025",
        title: "Formation Développeur Front-End",
        institution: "UOC",
      },
      {
        year: "2025",
        title: "Bases de la programmation Python",
        institution: "IDFO"
      },
      {
        year: "2025",
        title: "Web design responsive",
        institution: "freeCodeCamp",
      },
      {
        year: "2021",
        title: "Développement d’applications web et mobiles – AF 4 (IFCD017PO)",
        institution: "Grupo Hedima"
      },
      {
        year: "2020",
        title: "Publicité sur les réseaux sociaux & analyse marketing",
        institution: "ITO"
      }
    ]
  },
  workExperience: {
    title: "Expérience professionnelle",
    content: [
      {
        period: "2022 - 2025",
        title: "Support client (Marché français & objets de collection)",
        company: "Catawiki · Télétravail (depuis Barcelone, Espagne)",
        description: "Traitement de diverses demandes clients, garantissant des solutions rapides et efficaces. Reconnue parmi les meilleurs performeurs de mon équipe."
      },
      {
        period: "2021 - 2022",
        title: "Chef d’équipe service clients",
        company: "Teleperformance Spain & Stripe · Télétravail (depuis Barcelone, Espagne)",
        description: "Management d’équipe, coaching individuel et optimisation de la performance collective."
      },
      {
        period: "2021",
        title: "Expert support technique pour Stripe (Marché français)",
        company: "Teleperformance Spain & Stripe · Télétravail (depuis Barcelone, Espagne)",
        description: "Résolution de problèmes techniques complexes, garantissant la satisfaction client B2B"
      },
      {
        period: "2020 - 2021",
        title: "Consultante indépendante en marketing digital",
        company: "Télétravail",
        description: "Création de campagnes de génération de leads et conception UX/UI de landing pages pour maximiser les conversions. Refonte et mise en œuvre complète du site d'un client, incluant la boutique en ligne."
      },
      {
        period: "2019 - 2020",
        title: "Consultante en recrutement IT",
        company: "Grupo Norconsulting · Îles Canaries"
      },
      {
        period: "2018 - 2019",
        title: "Animatrice activités otaries",
        company: "Aspro Parks · Îles Canaries"
      },
      {
        period: "2015 - 2018",
        title: "Professionnelle de l’hôtellerie (Resort 5*)",
        company: "Salobre Hotel Resort & Serenity · Îles Canaries"
      },
      {
        period: "2012 - 2014",
        title: "Agent de voyages en ligne",
        company: "eDreams (ODIGEO) · Barcelone, Espagne"
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
