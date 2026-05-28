import { cvData as master } from './master';

export const cvData = {
  ...master,
  personalInfo: {
    ...master.personalInfo,
    title: "Ingeniero Electrónico | Especialista Multidisciplinario en Tecnología",
    specialty: "Integración de Software, Robótica y Telecomunicaciones",
  },
  summary: `Ingeniero Electrónico con 10 años de trayectoria técnica y una formación integral que abarca desde la programación avanzada hasta la robótica y las telecomunicaciones. Especialista en la creación de soluciones tecnológicas que unen el hardware y el software, con sólida experiencia en arquitecturas de datos (IA/RAG), gestión de redes (CCNA) y automatización industrial. Mi perfil híbrido me permite abordar proyectos complejos con una visión de 360 grados, garantizando eficiencia y escalabilidad.`,
  experience: [
    {
      ...master.experience[0],
      title: "Responsable de Desarrollo, Ingeniería de Datos e IA",
      description: [
        "Integración 360: Implementación de soluciones para 18 sucursales combinando software, bases de datos, soporte, redes básicas e infraestructura local.",
        "IA aplicada transversal: Uso de agentes, RAG y automatización inteligente para acelerar documentación, análisis operativo y mejora de procesos.",
        "Infraestructura y continuidad: Supervisión de redes, activos tecnológicos y despliegues Docker/VPS para mantener servicios estables."
      ]
    },
    {
      ...master.experience[1],
      title: "Líder de Proyectos de Software y Capacitación Técnica",
      description: [
        "Dirección Técnica: Gestión de proyectos para el despliegue de herramientas digitales y soluciones de automatización orientadas a la eficiencia operativa.",
        "Formación Multidisciplinaria: Capacitación en áreas técnicas avanzadas, facilitando el aprendizaje de nuevas tecnologías y metodologías de ingeniería."
      ]
    },
    {
      ...master.experience[2],
      title: "Coordinador de Operaciones, Redes y Soporte Técnico",
      description: [
        "Gestión de Redes y Telecomunicaciones: Administración de infraestructura de redes básicas y soporte técnico integral para asegurar la operatividad de activos críticos.",
        "Automatización Temprana: Desarrollo de un chatbot para 4 sucursales y optimización de procesos mediante el monitoreo de KPIs técnicos.",
        "Mantenimiento de Hardware: Gestión integral de activos tecnológicos y cumplimiento de SLAs operativos."
      ]
    }
  ],
  skills: [
    "Programación Fullstack (React, Python, SQL, Java)",
    "Inteligencia Artificial & Automatización (Agentes MCP, RAG)",
    "Robótica & Automatización Industrial (Arduino, PIC, PLCs)",
    "Telecomunicaciones & Redes (Cisco CCNA, Cybersecurity)",
    "Gestión de Bases de Datos (PostgreSQL, Oracle)",
    "Infraestructura & DevOps (Docker, Linux, VPS)",
    "Metodologías de Ingeniería (SDD, TDD, Scrum)",
    "Soporte Técnico & Mantenimiento de Hardware"
  ]
};

export const emailTemplate = {
  to: "[Empresa / Reclutador]",
  subject: "Postulación para Ingeniero Multidisciplinario - Ing. Jaime Rodríguez",
  body: `Estimados,\n\nEs un gusto saludarlos. Me dirijo a ustedes con gran interés en la vacante publicada que busca un profesional con conocimientos integrales en informática, programación, telecomunicaciones y robótica.\n\nMi perfil como Ingeniero Electrónico con 10 años de experiencia me ha permitido desarrollar una visión 360 de la tecnología. He liderado proyectos nacionales que integran desde la administración de redes y hardware hasta el desarrollo de software avanzado con IA y bases de datos SQL. Mi pasión por la tecnología me impulsa a buscar desafíos donde pueda aplicar este conocimiento multidisciplinario para generar soluciones innovadoras.\n\nAdjunto mi currículum y quedo a su disposición para conversar sobre cómo mis competencias pueden aportar al éxito de su equipo.\n\nAtentamente,\n\nIng. Jaime Rodríguez\n(+593) 0983144424`
};

export const gapAnalysis = {
  title: "Estrategia para el Perfil Multidisciplinario",
  items: [
    "Robótica/Electrónica: Estar preparado para explicar tu base en microcontroladores y automatización industrial de la Universidad.",
    "Telecomunicaciones: Resaltar tu certificación CCNA y tu experiencia gestionando redes en Stelasur y GM Bruño.",
    "Versatilidad: Enfatizar que tu experiencia de 10 años te da una visión de conjunto que un recién graduado no tiene, permitiéndote resolver problemas de raíz."
  ]
};
