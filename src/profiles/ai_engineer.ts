import { cvData as master } from './master';

export const cvData = {
  ...master,
  personalInfo: {
    ...master.personalInfo,
    title: "AI Engineer / Applied AI Specialist",
    specialty: "RAG, Agentes MCP, Automatización LLM y Datos",
  },
  summary: `Applied AI Engineer con más de una década de trayectoria en ingeniería, especializado desde 2023 en el diseño de ecosistemas de Inteligencia Artificial Generativa. Experto en arquitecturas RAG (Retrieval-Augmented Generation), orquestación de Agentes de IA (MCP) y desarrollo Fullstack moderno (React/Python). Poseo una probada capacidad para resolver problemas de negocio mediante la automatización inteligente, optimizando flujos de trabajo a gran escala y gestionando el ciclo de vida de los datos (MLOps) sobre infraestructura escalable.`,
  experience: [
    {
      title: "Responsable de Desarrollo de Software e IA Aplicada",
      company: "IMPORTADORA GM BRUÑO S.A.",
      date: "2023 - Actualidad (Enfoque IA)",
      description: [
        "Sistemas de IA aplicada: Diseño de flujos RAG y agentes MCP para consultar inventarios, documentar procesos y apoyar decisiones operativas en 18 sucursales.",
        "Orquestación LLM: Integración de herramientas como Claude Code, Gemini CLI y OpenCode para automatizar análisis, generación de documentación y soporte interno.",
        "Datos + software: Construcción de plataformas con React, Supabase, SQL y Python como capa operativa para soluciones de IA aplicadas al negocio.",
        "Evaluación pragmática: Iteración de prompts, fuentes de datos y flujos de automatización para convertir necesidades reales en asistentes útiles y medibles."
      ]
    },
    {
      title: "Líder de Desarrollo de Software",
      company: "FUNDESOTEC",
      date: "2021 - 2022",
      description: [
        "Desarrollo Fullstack: Liderazgo técnico en el despliegue de soluciones de software y automatización de flujos académicos, asegurando la calidad y escalabilidad de las herramientas digitales."
      ]
    },
    {
      title: "Coordinador de Estrategia Digital",
      company: "STELASUR S.A.",
      date: "2017 - 2020",
      description: [
        "Automatización de Procesos: Diseño e implementación de soluciones de software para la optimización de contratos de mantenimiento y monitoreo de infraestructura técnica."
      ]
    }
  ],
  projects: [
    {
      name: "JanusCore — Plataforma web para automatización inteligente",
      role: "Frontend Lead & Arquitecto de Producto",
      description: "Landing técnica premium para posicionar soluciones de IoT industrial, mantenimiento predictivo y automatización inteligente.",
      impact: "Producto público optimizado para performance, SEO y conversión directa mediante arquitectura de islas.",
      stack: "Astro 6, React 19, Tailwind CSS 4, Framer Motion, GSAP, Playwright",
      link: "https://januscore.pro"
    },
    {
      name: "iapi.shop — E-commerce y dashboard inteligente",
      role: "Fullstack Developer & AI Automation Specialist",
      description: "Tienda online y panel estratégico orientado a inventario, trazabilidad y soporte operativo para una red comercial multisede.",
      impact: "Demuestra integración de producto, datos e IA aplicada para apoyar decisiones de stock y operación nacional.",
      stack: "React, Supabase, Python, SQL, Docker, Agentes IA",
      link: "https://iapi.shop"
    },
    {
      name: "DentiApp Online — SaaS clínico multi-tenant",
      role: "Fullstack Architect",
      description: "Sistema web clínico para admisión, enfermería, odontología, configuración administrativa y flujos de facturación/pagos.",
      impact: "Arquitectura SaaS con RLS, flujos clínicos modulares y patrones modernos de Server Actions.",
      stack: "Next.js, React, Supabase, PostgreSQL/RLS, TypeScript, PayPhone",
      link: "https://dentiapp.online"
    }
  ],
  skills: [
    "IA Agéntica (OpenCode, Gemini CLI, Claude Code, Antigravity)",
    "Applied AI (RAG, Agentes MCP, Orquestación LLM)",
    "Fullstack Dev (React, Tailwind, Supabase, Python)",
    "Metodologías de Ingeniería (SDD, TDD, Scrum)",
    "MLOps (Pipeline, Docker, VPS Monitoring)",
    "Arquitectura de Datos & SQL Avanzado",
    "Automatización de Procesos con Software e IA"
  ],
  emailTemplate: {
    to: "[Correo de la empresa / reclutador]",
    subject: "Postulación AI Engineer / Applied AI - Jaime Rodríguez",
    body: "Estimados,\n\nEs un gusto saludarlos. Me dirijo a ustedes para presentar mi candidatura a una posición de AI Engineer / Applied AI.\n\nComo Ingeniero con más de 10 años de trayectoria técnica, desde 2023 he enfocado mi especialización en IA Generativa, RAG, agentes MCP y automatización inteligente aplicada a procesos reales de negocio. Actualmente desarrollo soluciones Fullstack integradas con datos e IA para apoyar inventario, trazabilidad y toma de decisiones en una red de 18 sucursales.\n\nAdjunto mi CV y quedo atento a conversar sobre cómo mi experiencia en IA aplicada puede aportar a sus productos y operaciones.\n\nAtentamente,\n\nIng. Jaime Rodríguez\n(+593) 0983144424"
  },
  gapAnalysis: {
    title: "Preparación para roles AI Engineer / Applied AI",
    items: [
      "Preparar demo narrativa de RAG/agentes: problema, fuentes de datos, orquestación, evaluación e impacto.",
      "Repasar LangGraph/CrewAI, embeddings, evaluación RAG y despliegue de soluciones con Docker/VPS.",
      "Explicar claramente la diferencia entre usar LLMs como herramienta y diseñar sistemas de IA aplicados a negocio."
    ]
  }
};
