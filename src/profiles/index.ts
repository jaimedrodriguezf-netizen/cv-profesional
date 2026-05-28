import { cvData as baseProfile } from './base';
import { cvData as masterProfile } from './master';
import { cvData as kamConsultantProfile, emailTemplate as kamEmail, gapAnalysis as kamGap } from './kam_consultant';
import { cvData as ingenieroIntegralProfile, emailTemplate as integralEmail, gapAnalysis as integralGap } from './ingeniero_integral';
import { cvData as soporteTiProfile } from './ti_soporte';
import { cvData as aiEngineerProfile } from './ai_engineer';
import { cvData as fullstackDeveloperProfile, emailTemplate as fullstackEmail, gapAnalysis as fullstackGap } from './fullstack_developer';
import { cvData as dataAutomationProfile, emailTemplate as dataEmail, gapAnalysis as dataGap } from './data_automation';

export interface CVProfile {
  id: string;
  name: string;
  data: typeof baseProfile;
  emailTemplate: {
    to: string;
    subject: string;
    body: string;
  };
  gapAnalysis: {
    title: string;
    items: string[];
  };
}

export const profiles: Record<string, CVProfile> = {
  master: {
    id: 'master',
    name: 'Perfil Maestro (Completo)',
    data: masterProfile,
    emailTemplate: {
      to: "[Correo de la empresa / reclutador]",
      subject: "Postulación para [Nombre del Puesto] - Ing. Jaime Rodríguez",
      body: "Estimados,\n\nEs un gusto saludarlos. Por medio de la presente, adjunto mi hoja de vida para la vacante de [Nombre del Puesto].\n\nComo Ingeniero Electrónico con más de 10 años de experiencia, he desarrollado una sólida capacidad para integrar hardware, software, datos e inteligencia artificial en la optimización de procesos. Actualmente lidero iniciativas de desarrollo, ingeniería de datos y soporte nacional para una operación de 18 sucursales, implementando soluciones de automatización y trazabilidad con alto impacto operativo.\n\nQuedo a su disposición para concertar una entrevista y profundizar en cómo mi perfil puede aportar valor a su equipo.\n\nAtentamente,\n\nIng. Jaime Rodríguez\n(+593) 0983144424"
    },
    gapAnalysis: {
      title: "Puntos fuertes generales a repasar (Perfil Maestro)",
      items: [
        "Preparar casos de éxito donde tu gestión de inventario, soporte nacional o desarrollo de software ahorró tiempo o redujo fricción operativa.",
        "Tener fresco el pipeline técnico de dashboards y SaaS: React/Next.js, Supabase, PostgreSQL/RLS y despliegue.",
        "Estructurar un elevator pitch que explique tu evolución desde electrónica/hardware hacia software, datos e IA aplicada."
      ]
    }
  },
  ti_soporte: {
    id: 'ti_soporte',
    name: 'TI / Soporte Tecnológico',
    data: soporteTiProfile,
    emailTemplate: {
      to: "[Correo de la empresa / reclutador]",
      subject: "Postulación Soporte TI e Infraestructura - Jaime Rodríguez",
      body: "Estimados,\n\nEs un gusto saludarlos. Me dirijo a ustedes para presentar mi candidatura a una posición de Soporte TI, Infraestructura o Técnico Informático.\n\nMi perfil combina formación en Ingeniería Electrónica con experiencia práctica en soporte técnico presencial/remoto, diagnóstico de hardware y software, mantenimiento de impresoras, redes básicas y gestión tecnológica para una operación nacional de 18 sucursales. Además, aplico herramientas de automatización e IA para acelerar diagnóstico, documentación y resolución de incidencias.\n\nAdjunto mi CV y quedo atento a la posibilidad de conversar en una entrevista.\n\nSaludos cordiales,\n\nIng. Jaime Rodríguez\n(+593) 0983144424"
    },
    gapAnalysis: {
      title: "Preparación para roles TI / Soporte",
      items: [
        "Dominar troubleshooting de Windows/Linux, impresoras, red local, DNS, IP, colas de impresión y soporte remoto con AnyDesk/RustDesk.",
        "Preparar ejemplos de atención a usuarios no técnicos con paciencia, claridad y seguimiento.",
        "Explicar cómo usas IA/automatización para documentar incidentes y acelerar diagnósticos."
      ]
    }
  },
  fullstack_developer: {
    id: 'fullstack_developer',
    name: 'Fullstack Developer',
    data: fullstackDeveloperProfile,
    emailTemplate: fullstackEmail,
    gapAnalysis: fullstackGap
  },
  ai_engineer: {
    id: 'ai_engineer',
    name: 'AI Engineer / Applied AI',
    data: aiEngineerProfile,
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
  },
  data_automation: {
    id: 'data_automation',
    name: 'Data & Automation Engineer',
    data: dataAutomationProfile,
    emailTemplate: dataEmail,
    gapAnalysis: dataGap
  },
  kam_tech: {
    id: 'kam_tech',
    name: 'Consultor Tech / KAM Técnico',
    data: kamConsultantProfile,
    emailTemplate: kamEmail,
    gapAnalysis: kamGap
  },
  ingeniero_integral: {
    id: 'ingeniero_integral',
    name: 'Ingeniero Integral / Multidisciplinario',
    data: ingenieroIntegralProfile,
    emailTemplate: integralEmail,
    gapAnalysis: integralGap
  },
  base: {
    id: 'base',
    name: 'Base: Datos y Automatización',
    data: baseProfile,
    emailTemplate: {
      to: "[Correo de la empresa / reclutador]",
      subject: "Ingeniero de Datos / Automatización - Jaime Rodríguez",
      body: "Saludos cordiales,\n\nAdjunto mi currículum para una posición orientada a datos, automatización o mejora de procesos. Mi enfoque se centra en crear arquitecturas de datos escalables, dashboards dinámicos y flujos de automatización que facilitan la toma de decisiones estratégicas.\n\nEspero tener la oportunidad de conversar sobre cómo mi experiencia técnica puede contribuir a sus objetivos tecnológicos.\n\nAtentamente,\n\nIng. Jaime Rodríguez\n(+593) 0983144424"
    },
    gapAnalysis: {
      title: "Áreas de enfoque técnico (base)",
      items: [
        "Bases de Datos: Repasar optimización de consultas SQL, índices y modelos relacionales.",
        "Arquitectura: Explicar cómo la clasificación ABC se traduce a modelos de datos o lógica de backend.",
        "Infraestructura: Preparar explicación breve de Docker/VPS y despliegue de servicios internos."
      ]
    }
  }
};
