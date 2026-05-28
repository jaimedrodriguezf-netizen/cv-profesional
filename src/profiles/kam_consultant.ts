import { cvData as master } from './master';

export const cvData = {
  ...master,
  personalInfo: {
    ...master.personalInfo,
    title: "Ingeniero Consultor de Soluciones Tecnológicas | Key Account Manager",
    specialty: "Venta Consultiva & Estrategia Tecnológica",
  },
  summary: `Ingeniero Electrónico con 10 años de trayectoria técnica y estratégica. Experto en Venta Consultiva y gestión de cuentas tecnológicas clave. Especialista en identificar brechas operativas y transformarlas en soluciones de alto impacto mediante IA Agéntica, Automatización e Infraestructura Cloud. Capacidad demostrada para liderar negociaciones técnicas y asegurar la satisfacción del cliente a escala nacional (18 sucursales).`,
  experience: [
    {
      title: "Responsable de Estrategia Tecnológica y Soluciones de IA (KAM)",
      company: "IMPORTADORA GM BRUÑO S.A.",
      date: "2023 - Actualidad",
      description: [
        "Consultoría tecnológica interna: Responsable de traducir necesidades operativas de una red de 18 sucursales en soluciones digitales con impacto medible.",
        "IA como propuesta de valor: Diseño de soluciones con RAG, agentes MCP y automatización para mejorar logística, soporte y toma de decisiones ejecutivas.",
        "Gestión de valor y ROI: Presentación de dashboards, oportunidades de ahorro y beneficios de automatización para facilitar decisiones de dirección."
      ]
    },
    {
      title: "Líder de Proyectos y Consultoría Técnica",
      company: "FUNDESOTEC",
      date: "2021 - 2022",
      description: [
        "Desarrollo de Negocio: Dirección de proyectos digitales orientados a la automatización, gestionando la relación directa con clientes institucionales.",
        "Venta Consultiva: Traducción de requerimientos técnicos complejos en beneficios de negocio claros para facilitar el cierre de acuerdos comerciales."
      ]
    },
    {
      title: "Coordinador de Operaciones y Relaciones Técnicas",
      company: "STELASUR S.A.",
      date: "2017 - 2020",
      description: [
        "Gestión de Fidelización (SLA): Aseguramiento del cumplimiento de acuerdos de nivel de servicio para activos críticos, garantizando la continuidad operativa y satisfacción del cliente.",
        "Soluciones Proactivas: Implementación de chatbots operativos para 4 sucursales, proveyendo consultoría preventiva antes de la detección de necesidades por parte del cliente."
      ]
    }
  ],
  skills: [
    "Venta Consultiva & Negociación Técnica",
    "Gestión de Cuentas Clave (KAM)",
    "Estrategia de Transformación Digital",
    "IA Agéntica & Automatización de Procesos",
    "Análisis de Retorno de Inversión (ROI)",
    "Gestión de Proyectos Ágiles (Scrum)",
    "Fullstack Development (React/Python/Supabase)",
    "Infraestructura Cloud & Docker",
    "Cisco CCNA & Networking"
  ]
};

export const emailTemplate = {
  to: "[Correo de la empresa / reclutador]",
  subject: "Postulación KAM Freelance Sector Tecnología - Ing. Jaime Rodríguez",
  body: `Estimados,\n\nEs un gusto saludarlos. Me dirijo a ustedes para presentar mi postulación al cargo de Key Account Manager Freelance.\n\nMi perfil combina 10 años de sólidos fundamentos en ingeniería con una visión estratégica orientada a la venta consultiva. Actualmente gestiono la estrategia tecnológica de una red nacional de 18 sucursales, donde he demostrado mi capacidad para detectar necesidades de negocio y transformarlas en soluciones de alto impacto mediante IA y automatización.\n\nEstoy convencido de que mi capacidad para liderar conversaciones técnicas y mi enfoque en el logro de objetivos comerciales aportarán gran valor a su equipo de ventas tecnológicas.\n\nQuedo a su disposición para una entrevista.\n\nSaludos cordiales,\n\nIng. Jaime Rodríguez\n(+593) 0983144424`
};

export const gapAnalysis = {
  title: "Estrategia para el rol de KAM",
  items: [
    "Venta Consultiva: Repasar cómo presentar el dashboard de 18 sucursales no como una app, sino como un ahorro de costos y aumento de eficiencia.",
    "KPIs de Ventas: Estar listo para hablar de embudos de ventas, fidelización de clientes y gestión de cuentas (Account Planning).",
    "Freelance Mindset: Demostrar proactividad y capacidad de autogestión en entornos remotos basándote en tu experiencia liderando equipos en Fundesotec."
  ]
};
