import { cvData as master } from './master';

export const cvData = {
  ...master,
  personalInfo: {
    ...master.personalInfo,
    title: "Fullstack Developer | React, Next.js & Supabase",
    specialty: "Desarrollo Web, SaaS y Dashboards de Negocio",
  },
  summary: `Fullstack Developer con base de Ingeniero Electrónico y más de 10 años de trayectoria técnica, especializado en crear productos web modernos con React, Next.js, TypeScript y Supabase. Experiencia construyendo dashboards, SaaS multi-tenant, tiendas online y flujos operativos conectados a datos reales. Combino frontend de alto impacto, backend con PostgreSQL/RLS y despliegues pragmáticos para convertir requerimientos de negocio en software funcional, medible y escalable.`,
  experience: [
    {
      title: "Fullstack Developer & Responsable de Plataformas Digitales",
      company: "IMPORTADORA GM BRUÑO S.A.",
      date: "2023 - Actualidad",
      description: [
        "Desarrollo de productos web: Construcción de tienda online, dashboards estratégicos y flujos internos para una operación nacional de 18 sucursales.",
        "Frontend moderno: Implementación de interfaces con React, TypeScript y Tailwind, enfocadas en usabilidad, velocidad de carga y claridad operativa.",
        "Backend, datos e IA: Modelado con Supabase/PostgreSQL, consultas SQL y automatizaciones asistidas por IA para inventario, trazabilidad y reporting.",
        "Entrega end-to-end: Despliegue, monitoreo y mejora continua en Docker/VPS, conectando necesidades operativas con software usable y medible."
      ]
    },
    {
      title: "Líder de Proyectos de Software y Capacitación",
      company: "FUNDESOTEC",
      date: "2021 - 2022",
      description: [
        "Dirección de iniciativas digitales y automatización de procesos académicos, traduciendo requerimientos de usuarios en soluciones implementables.",
        "Capacitación técnica a equipos y usuarios, facilitando adopción de herramientas digitales y buenas prácticas de operación."
      ]
    },
    {
      title: "Coordinador de Operaciones y Automatización",
      company: "STELASUR S.A.",
      date: "2017 - 2020",
      description: [
        "Implementación de chatbot operativo para 4 sucursales y soporte a flujos de comunicación interna.",
        "Gestión de infraestructura técnica, soporte y monitoreo de KPIs para asegurar continuidad operativa."
      ]
    }
  ],
  projects: [
    {
      name: "DentiApp Online — SaaS clínico multi-tenant",
      role: "Fullstack Architect",
      description: "Sistema web clínico para admisión, enfermería, odontología, configuración administrativa y flujos de facturación/pagos.",
      impact: "Arquitectura SaaS modular con RLS, Server Actions y flujos clínicos listos para operación multi-tenant.",
      stack: "Next.js, React, TypeScript, Supabase, PostgreSQL/RLS, PayPhone",
      link: "https://dentiapp.online"
    },
    {
      name: "JanusCore — Plataforma web premium",
      role: "Frontend Lead",
      description: "Landing técnica para soluciones de IoT industrial, mantenimiento predictivo y automatización inteligente.",
      impact: "Producto público optimizado para performance, SEO y conversión directa con arquitectura de islas.",
      stack: "Astro 6, React 19, Tailwind CSS 4, Framer Motion, GSAP, Playwright",
      link: "https://januscore.pro"
    },
    {
      name: "iapi.shop — E-commerce y dashboard operativo",
      role: "Fullstack Developer",
      description: "Tienda online y panel estratégico orientado a inventario, trazabilidad y soporte operativo multisede.",
      impact: "Integra producto, datos y automatización para apoyar decisiones de stock y operación nacional.",
      stack: "React, Supabase, Python, SQL, Docker",
      link: "https://iapi.shop"
    }
  ],
  skills: [
    "React", "Next.js", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL/RLS", "Server Actions", "Node.js", "Python", "Docker", "VPS/Linux", "Testing", "SDD/TDD", "UI/UX para dashboards"
  ]
};

export const emailTemplate = {
  to: "[Correo de la empresa / reclutador]",
  subject: "Postulación Fullstack Developer - Jaime Rodríguez",
  body: `Estimados,\n\nEs un gusto saludarlos. Me dirijo a ustedes para presentar mi candidatura a la posición de Fullstack Developer.\n\nMi experiencia combina desarrollo frontend moderno con React/Next.js, backend sobre Supabase/PostgreSQL y entrega end-to-end de productos reales como SaaS, dashboards y plataformas operativas. Actualmente desarrollo soluciones para una operación nacional de 18 sucursales, conectando datos, procesos y experiencia de usuario.\n\nAdjunto mi CV y quedo atento a conversar sobre cómo puedo aportar al desarrollo de sus productos digitales.\n\nSaludos cordiales,\n\nIng. Jaime Rodríguez\n(+593) 0983144424`
};

export const gapAnalysis = {
  title: "Preparación para entrevistas Fullstack",
  items: [
    "Preparar explicación técnica de DentiApp: multi-tenant, RLS, Server Actions y módulos principales.",
    "Tener listo un walkthrough de JanusCore: Astro, React islands, performance y SEO.",
    "Repasar patrones de TypeScript, manejo de formularios, validación y testing de componentes."
  ]
};
