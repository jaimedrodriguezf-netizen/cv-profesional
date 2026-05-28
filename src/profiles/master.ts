import type { CVProject } from './base';

export const cvData = {
  personalInfo: {
    fullName: "Jaime Daniel Rodríguez Fajardo",
    title: "Ingeniero Electrónico | AI Specialist & Fullstack Developer",
    specialty: "Arquitectura de Datos e IA Agéntica",
    location: "Quito, Ecuador (Quitumbe, Av. Rumichaca Ñan y S41)",
    email: "jaimedrodriguezf@gmail.com",
    phone: "(+593) 0983144424",
  },
  summary: `Ingeniero Electrónico con más de 10 años de trayectoria técnica, evolucionando desde 2023 hacia la especialización en Inteligencia Artificial Generativa y Arquitecturas de Datos. Experto en el diseño de sistemas RAG, orquestación de Agentes de IA (MCP) y desarrollo Fullstack moderno. Combino una sólida base en ingeniería de software y automatización de procesos con la implementación aplicada de LLMs para resolver problemas de negocio complejos y optimizar la eficiencia operativa a escala nacional.`,
  experience: [
    {
      title: "Responsable de Desarrollo, Ingeniería de Datos e IA",
      company: "IMPORTADORA GM BRUÑO S.A.",
      date: "2023 - Actualidad (Especialización IA)",
      description: [
        "IA aplicada y datos: Diseño de flujos con RAG, agentes MCP y automatización asistida por LLMs para soporte interno, inventario y toma de decisiones.",
        "Desarrollo Fullstack: Construcción de tienda online, dashboards y herramientas operativas para 18 sucursales con React, Supabase, SQL y Python.",
        "Operación tecnológica: Integración de software, datos, soporte técnico e infraestructura para mejorar trazabilidad, reabastecimiento y continuidad operativa.",
        "Infraestructura: Despliegue y monitoreo de soluciones en Docker/VPS, aplicando prácticas SDD/TDD para mantener calidad y escalabilidad."
      ]
    },
    {
      title: "Líder de Proyectos de Software y Capacitación",
      company: "FUNDESOTEC",
      date: "2021 - 2022",
      description: [
        "Desarrollo de Software: Dirección de equipos para el despliegue de herramientas digitales y soluciones de automatización estándar para la gestión académica.",
        "Facilitación Técnica: Liderazgo en programas de capacitación técnica y nivelación académica avanzada, traduciendo requerimientos técnicos en planes formativos."
      ]
    },
    {
      title: "Coordinador de Operaciones y Mantenimiento",
      company: "STELASUR S.A.",
      date: "2017 - 2020",
      description: [
        "Desarrollo de Chatbot: Diseño e implementación de un chatbot para la gestión operativa en 4 sucursales, optimizando la comunicación y el flujo de requerimientos.",
        "Soporte y Redes: Ejecución de soporte técnico integral y gestión de infraestructura de redes básicas para asegurar la continuidad operativa.",
        "Supervisión Técnica: Gestión de activos tecnológicos y cumplimiento de SLAs mediante el monitoreo de KPIs operativos."
      ]
    }
  ],
  projects: [] as CVProject[],
  education: [
    {
      title: "Ingeniería Electrónica",
      school: "Universidad Politécnica Salesiana",
      date: "2015 - 2021"
    }
  ],
  skills: [
    "IA Agéntica (OpenCode, Gemini CLI, Claude Code, Antigravity)",
    "AI Agents (MCP - Model Context Protocol)",
    "Metodologías de Ingeniería (SDD, TDD, Scrum)",
    "Fullstack Development (React/Tailwind)",
    "Backend & BaaS (Java/Supabase)",
    "Soporte Remoto (AnyDesk/RustDesk)",
    "Mantenimiento de Impresoras y Hardware",
    "SQL (Oracle/PostgreSQL)",
    "Contenedores (Docker)",
    "Infraestructura (VPS Locales)",
    "Metodologías Ágiles (Scrum)",
    "Cisco CCNA & Cybersecurity",
    "Arduino & Microcontroladores PIC",
    "Automatización Industrial",
    "Ingeniería de Inventarios",
    "Gestión Económica y Análisis"
  ],
  certifications: [
    "Cisco: CCNA Routing and Switching",
    "Cisco: Cybersecurity Operations",
    "Elements of AI (University of Helsinki)"
  ],
  references: [
    {
      name: "Mgs. Geovanny Bermúdez",
      role: "Contador General - GM Bruño",
      phone: "0989612590"
    },
    {
      name: "Ing. Ayde Merino",
      role: "Gerente General - WillSeb",
      phone: "0998722324"
    },
    {
      name: "Econ. Nataly Utreras",
      role: "Economista",
      phone: "0993693004"
    }
  ]
};
