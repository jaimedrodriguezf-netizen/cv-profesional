import { cvData as master } from './master';

export const cvData = {
  ...master,
  personalInfo: {
    ...master.personalInfo,
    title: "Data & Automation Engineer | SQL, Dashboards & Procesos",
    specialty: "Arquitectura de Datos, Inventarios y Automatización Operativa",
  },
  summary: `Data & Automation Engineer con base en Ingeniería Electrónica y experiencia optimizando operaciones mediante datos, SQL, dashboards y automatización. Especialista en convertir procesos manuales en sistemas trazables, medibles y escalables para inventario, soporte y toma de decisiones. Combino criterio operativo, modelado de datos y herramientas modernas para reducir fricción, mejorar visibilidad y acelerar decisiones de negocio.`,
  experience: [
    {
      title: "Responsable de Ingeniería de Datos y Automatización Operativa",
      company: "IMPORTADORA GM BRUÑO S.A.",
      date: "2023 - Actualidad",
      description: [
        "Dashboards y KPIs: Construcción de paneles estratégicos para visibilidad de inventario, trazabilidad y operación en 18 sucursales.",
        "Arquitectura de datos: Organización de SKUs, clasificación ABC y estructuras SQL para mejorar análisis, reabastecimiento y control operativo.",
        "Automatización de procesos: Digitalización de flujos críticos para reducir dependencia manual y mejorar consistencia de la información.",
        "IA aplicada a datos: Uso de agentes y flujos asistidos para acelerar consultas, documentación, diagnóstico y toma de decisiones."
      ]
    },
    {
      title: "Líder de Proyectos y Capacitación Técnica",
      company: "FUNDESOTEC",
      date: "2021 - 2022",
      description: [
        "Diseño de herramientas digitales para gestión académica y seguimiento de procesos.",
        "Capacitación técnica y transferencia de conocimiento a equipos multidisciplinarios."
      ]
    },
    {
      title: "Coordinador de Operaciones Técnicas",
      company: "STELASUR S.A.",
      date: "2017 - 2020",
      description: [
        "Monitoreo de KPIs operativos, cumplimiento de SLAs y mejora de flujos de soporte.",
        "Implementación de chatbot para canalizar requerimientos y mejorar comunicación entre sucursales."
      ]
    }
  ],
  projects: [
    {
      name: "iapi.shop — Dashboard e inventario inteligente",
      role: "Data & Automation Engineer",
      description: "Panel operativo para inventario, trazabilidad y soporte de decisiones en una red comercial multisede.",
      impact: "Integra datos operativos, automatización y lógica de negocio para mejorar control de stock y visibilidad gerencial.",
      stack: "React, Supabase, PostgreSQL, SQL, Python, Docker",
      link: "https://iapi.shop"
    },
    {
      name: "SRI Invoice Downloader — Automatización documental",
      role: "Automation Developer",
      description: "Herramienta para apoyar descargas y organización de comprobantes/documentos tributarios.",
      impact: "Reduce trabajo repetitivo y mejora orden documental mediante automatización orientada a usuario final.",
      stack: "JavaScript, Playwright, Chrome Extension, Testing",
      link: "Proyecto demostrable bajo solicitud"
    },
    {
      name: "DentiApp Online — Datos clínicos multi-tenant",
      role: "Data Model & Fullstack Developer",
      description: "Sistema clínico con datos segmentados por tenant, RLS y módulos operativos para atención y facturación.",
      impact: "Modelado relacional y seguridad por tenant para datos sensibles y operación modular.",
      stack: "Next.js, Supabase, PostgreSQL/RLS, TypeScript",
      link: "https://dentiapp.online"
    }
  ],
  skills: [
    "SQL", "PostgreSQL", "Supabase", "Dashboards", "KPIs", "Automatización de Procesos", "Python", "JavaScript", "Clasificación ABC", "Inventarios", "Docker", "Análisis Operativo", "IA aplicada a datos"
  ]
};

export const emailTemplate = {
  to: "[Correo de la empresa / reclutador]",
  subject: "Postulación Data & Automation Engineer - Jaime Rodríguez",
  body: `Estimados,\n\nEs un gusto saludarlos. Adjunto mi CV para la posición de Data & Automation Engineer.\n\nMi experiencia se centra en transformar procesos operativos en sistemas medibles mediante SQL, dashboards, automatización y arquitectura de datos. Actualmente trabajo con una operación de 18 sucursales, donde he desarrollado soluciones para inventario, trazabilidad y toma de decisiones basada en datos.\n\nQuedo atento a una entrevista para conversar sobre cómo puedo aportar a sus objetivos de automatización y eficiencia operativa.\n\nSaludos cordiales,\n\nIng. Jaime Rodríguez\n(+593) 0983144424`
};

export const gapAnalysis = {
  title: "Preparación para roles Data & Automation",
  items: [
    "Preparar casos con métricas: reducción de tiempos, trazabilidad, clasificación ABC y control de inventario.",
    "Repasar SQL: joins, índices, agregaciones, normalización y reporting.",
    "Explicar cómo conectas procesos reales con dashboards y automatización útil para negocio."
  ]
};
