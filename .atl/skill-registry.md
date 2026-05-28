# Skill Registry

**Delegator use only.** Any agent that launches sub-agents reads this registry to resolve compact rules, then injects them directly into sub-agent prompts.

## User Skills

| Trigger | Skill | Path |
|---------|-------|------|
| nuevo perfil de cv, crear cv, oferta de trabajo, adaptar cv | cv-generator | /home/jaimepop/cv-profesional/.agents/skills/cv-generator/SKILL.md |
| quién soy, mi perfil, mi experiencia, datos de mi cv, mi bio | personal-identity | /home/jaimepop/.gemini/skills/personal-identity/SKILL.md |
| license headers, batch refactor, large changes | skill-creator | /home/jaimepop/.gemini/skills/skill-creator/SKILL.md |
| commit, pr, work unit | work-unit-commits | /home/jaimepop/.gemini/skills/work-unit-commits/SKILL.md |

## Compact Rules

### cv-generator
- Read `src/profiles/master.ts` as Single Source of Truth. NUNCA inventar experiencia.
- Obligatorio incluir enfoque en IA Agéntica (MCP) y Automatización Inteligente.
- Stack IA mandatorio: OpenCode, Gemini CLI, Claude Code, Antigravity.
- Metodologías mandatorias: SDD y TDD.
- Generar: nuevo archivo en `src/profiles/`, Email Template y Gap Analysis.

### personal-identity
- Jaime Rodríguez: Ing. Electrónico, AI Specialist & Fullstack Developer.
- Fuerte en IA Agéntica (MCP), RAG, React, Supabase, Python y Automatización.
- NUNCA inventar datos biográficos; usar este perfil como base para bios y CVs.
- Siempre resaltar la integración de IA en soluciones técnicas y calidad vía SDD/TDD.

### work-unit-commits
- Estructurar cambios como unidades de trabajo entregables.
- Mantener tests y docs junto al código que verifican.
- Usar commits convencionales sin atribución de IA.

## Project Conventions

| File | Path | Notes |
|------|------|-------|
| GEMINI.md | /home/jaimepop/cv-profesional/GEMINI.md | |
| .gitignore | /home/jaimepop/cv-profesional/.gitignore | |
