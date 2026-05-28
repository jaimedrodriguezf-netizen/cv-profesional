import { cvData as master } from './master';

export const cvData = {
  ...master,
  personalInfo: {
    ...master.personalInfo,
    title: "Especialista TI / Soporte Tecnológico",
    specialty: "Soporte Técnico, Infraestructura y Gestión Tecnológica",
  },
  summary: `Ingeniero Electrónico con sólida trayectoria en soporte técnico informático masivo, mantenimiento de infraestructura y gestión de inventarios tecnológicos potenciados por IA. Experto en el soporte integral a 18 sucursales a nivel nacional, utilizando Agentes de IA (MCP) para optimizar el diagnóstico y resolución de incidencias. Poseo experiencia en el apoyo técnico para eventos en vivo (OBS Studio) y una alta capacidad de resolución mediante automatización inteligente.`,
  experience: [
    {
      title: "Responsable de Soporte Nacional, Ingeniería de Datos e IA",
      company: "IMPORTADORA GM BRUÑO S.A.",
      date: "Actualidad",
      description: [
        "Troubleshooting TI multi-sede: Atención técnica para 18 sucursales, cubriendo Windows/Linux, diagnóstico de hardware/software, usuarios, DNS/IP y conectividad de red local.",
        "Soporte remoto e IA aplicada: Resolución de incidencias mediante AnyDesk/RustDesk, documentando tickets con flujos asistidos por IA, checklists y respuestas estandarizadas.",
        "Impresoras y periféricos: Soporte preventivo/correctivo de PCs, impresoras de oficina, equipos multifuncionales y colas de impresión.",
        "Inventario tecnológico: Control digital de activos, garantías y reposición técnica con trazabilidad para continuidad operativa."
      ]
    },
    {
      title: "Coordinador de Operaciones Técnicas",
      company: "STELASUR S.A.",
      date: "2017 - 2020",
      description: [
        "Supervisión de Mantenimiento: Dirección estratégica de contratos de mantenimiento preventivo y correctivo de infraestructura tecnológica bajo cumplimiento de SLAs.",
        "Atención al Usuario: Resolución ágil de incidencias técnicas presenciales y remotas, liderando equipos multidisciplinarios para asegurar la satisfacción del cliente interno.",
        "Instalación y Configuración: Despliegue de sistemas operativos y software corporativo siguiendo estándares de seguridad y rendimiento."
      ]
    },
    {
      title: "Facilitador Técnico y Capacitador",
      company: "FUNDESOTEC",
      date: "2021 - 2022",
      description: [
        "Comunicación y Resolución: Capacitación técnica y nivelación académica avanzada, desarrollando habilidades de comunicación efectiva y atención personalizada a usuarios."
      ]
    }
  ],
  skills: [
    "IA Agéntica (OpenCode, Gemini CLI, Claude Code, Antigravity)",
    "Metodologías (SDD, TDD, Scrum)",
    "Soporte Técnico Presencial y Remoto",
    "Troubleshooting Windows/Linux",
    "Diagnóstico de Hardware y Software",
    "DNS, IP y Red Local Básica",
    "Colas de Impresión e Impresoras de Oficina",
    "Soporte Remoto (AnyDesk/RustDesk)",
    "Instalación de SO (Windows/Linux) y Software",
    "Mantenimiento de PCs y Periféricos",
    "Manejo de OBS Studio (Apoyo en Eventos)",
    "Gestión de Inventario Tecnológico",
    "Redes Básicas (Cisco CCNA)",
    "Ciberseguridad Informática",
    "Comunicación Efectiva y Atención al Usuario",
    "Docker y Virtualización (VPS)"
  ]
};
