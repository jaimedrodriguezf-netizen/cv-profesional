export interface CVProject {
  name: string;
  role: string;
  description: string;
  impact: string;
  stack: string;
  link: string;
}

export const cvData = {
  personalInfo: {
    fullName: "Jaime Daniel Rodríguez Fajardo",
    title: "Ingeniero Electrónico",
    specialty: "Arquitectura de Datos y Automatización Inteligente",
    location: "Quito, Ecuador (Quitumbe, Av. Rumichaca Ñan y S41)",
    email: "jaimedrodriguezf@gmail.com",
    phone: "(+593) 0983144424",
  },
  summary: `Ingeniero Electrónico con más de 10 años de trayectoria liderando la convergencia entre hardware, 
    software y procesos operativos. Especialista en Arquitectura de Datos y Automatización Inteligente con IA. 
    Experto en el desarrollo de soluciones escalables mediante el ecosistema Java, SQL e IA Agéntica (MCP) 
    para la optimización de la cadena de suministro, garantizando trazabilidad total y eficiencia 
    operativa de alto impacto.`,
  experience: [
    {
      title: "Responsable de Desarrollo, Ingeniería de Datos e IA",
      company: "IMPORTADORA GM BRUÑO S.A.",
      date: "Actualidad",
      description: [
        "Arquitectura operativa: Reestructuración de inventario, clasificación ABC y nomenclatura técnica de SKUs para mejorar búsqueda, trazabilidad y control nacional.",
        "Datos y automatización: Diseño de dashboards, consultas SQL y flujos digitales para monitorear inventario, reabastecimiento y puntos críticos de operación.",
        "IA aplicada: Uso de agentes de IA y flujos asistidos para documentar procesos, acelerar análisis operativo y apoyar decisiones de inventario.",
        "Soporte especializado: Gestión de garantías, diagnóstico técnico y continuidad operativa de activos tecnológicos."
      ]
    },
    {
      title: "Facilitador Técnico",
      company: "FUNDESOTEC",
      date: "2021 - 2022",
      description: [
        "Gestión de programas de capacitación técnica y nivelación académica avanzada. Optimización de metodologías de transferencia de conocimiento y liderazgo de equipos multidisciplinarios."
      ]
    },
    {
      title: "Coordinador de Operaciones Técnicas",
      company: "STELASUR S.A.",
      date: "2017 - 2020",
      description: [
        "Supervisión estratégica de contratos de mantenimiento preventivo y correctivo. Garantía de SLA (Service Level Agreement) y gestión de KPI técnicos para el cumplimiento de objetivos institucionales."
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
    "AI Agents (MCP/OpenCode)",
    "Java (Maven)",
    "Python",
    "SQL (Oracle/PostgreSQL)",
    "Arduino",
    "Microcontroladores PIC",
    "Proteus",
    "Cisco CCNA",
    "Cybersecurity",
    "Automatización Industrial",
    "Bases de Datos",
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
