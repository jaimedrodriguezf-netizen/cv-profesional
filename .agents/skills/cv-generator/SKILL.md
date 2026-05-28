---
name: cv-generator
description: >
  Genera un nuevo perfil de CV adaptado a una oferta laboral específica para la aplicación de CV en React.
  Trigger: "nuevo perfil de cv", "crear cv", "oferta de trabajo", "adaptar cv", "necesito un perfil para este trabajo"
license: Apache-2.0
metadata:
  author: gentleman-programming
  version: "1.0"
---

## When to Use

- Cuando el usuario proporciona una oferta de trabajo o rol (ej. "Soporte", "Fullstack") y pide un nuevo CV.
- Cuando el usuario pide adaptar su currículum para una vacante específica.

## Critical Patterns

1. **The Single Source of Truth**: Siempre debes leer `src/profiles/master.ts` para extraer la experiencia base, los datos personales y las habilidades. **NUNCA INVENTES** experiencia o habilidades que no existan en el perfil maestro. Solo puedes re-frasear o destacar aspectos de la experiencia existente que se alineen con la oferta.
2. **Mandato de IA (Diferenciador)**: Es OBLIGATORIO incluir un enfoque en Inteligencia Artificial en cada perfil para destacar al usuario. Debes integrar menciones a "Agentes IA (MCP)", "Automatización Inteligente" o "Soluciones basadas en IA" en el resumen profesional.
3. **AI Toolstack Mandatory**: En la sección de skills, siempre debes incluir el stack de IA de vanguardia: **OpenCode, Gemini CLI, Claude Code y Antigravity**.
4. **Engineering Standards (SDD/TDD)**: Es mandatorio incluir las metodologías **SDD (Spec-Driven Development)** y **TDD (Test-Driven Development)** en la lista de habilidades técnicas o metodológicas para resaltar el compromiso con la calidad del software y el diseño basado en especificaciones.
5. **Creación del Archivo de Perfil**:
   - Crea un nuevo archivo en `src/profiles/{nombre_del_rol}.ts`.
   - Debes importar el perfil maestro y hacer un spread (`...master`) para mantener la base de datos (certificaciones, referencias, etc).
   - Sobrescribe `summary`, `experience` y `skills` filtrando y orientando la redacción a la nueva vacante.
3. **Email Template**:
   - Añade el campo `emailTemplate` con `to`, `subject` y `body`.
   - `to`: Extrae el correo de contacto de la oferta de trabajo. Si no hay, usa "[Correo de la empresa / reclutador]".
   - Redacta un correo profesional presentándose para la vacante, mencionando por qué su perfil se ajusta perfectamente basándote en la experiencia resaltada.
4. **Gap Analysis**:
   - Añade el campo `gapAnalysis` con `title` y una lista de `items` (strings).
   - Analiza qué requisitos pide la oferta vs lo que el usuario sabe. Explica de forma práctica **qué debe estudiar o repasar** para defender la entrevista (términos técnicos, preguntas comunes sobre la tecnología que piden, etc).
5. **Registro en el Índice**:
   - Modifica `src/profiles/index.ts`.
   - Importa el nuevo archivo.
   - Añádelo al objeto `profiles` siguiendo la estructura existente.

## Code Examples

### Plantilla Base para el Nuevo Perfil (`src/profiles/rol.ts`)
```typescript
import { cvData as master } from './master';

export const cvData = {
  ...master,
  personalInfo: {
    ...master.personalInfo,
    specialty: "Especialidad enfocada a la oferta",
  },
  summary: `Resumen adaptado a la oferta sin inventar experiencia...`,
  experience: [
    // Experiencia filtrada y orientada al rol
  ],
  skills: [
    // Habilidades extraídas del master, ordenadas por relevancia para el rol
  ]
};
```

## Commands

```bash
# Para verificar que el proyecto compila tras agregar el perfil
npm run build
```
