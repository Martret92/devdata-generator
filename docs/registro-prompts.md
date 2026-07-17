# Registro de prompts

## Uso de IA en el proyecto

La IA se utilizó como apoyo para analizar requisitos, ordenar la arquitectura, preparar documentación y revisar el trabajo. En el caso de Codex, el proceso se dividió en tareas pequeñas: inspección previa del repositorio, cambios acotados, revisión del diff y ejecución de pruebas.

Este documento no reconstruye conversaciones que no se conservaron. Distingue entre:

- **texto literal**: contenido disponible palabra por palabra;
- **resumen fiel**: síntesis identificada como tal;
- **resultado consolidado**: decisión que terminó reflejada en el proyecto;
- **texto no conservado**: contenido que no puede citarse ni recuperarse desde este registro.

## A. Prompts iniciales de la Entrega 1

El Paso 9 proponía tres preguntas de análisis sin pedir código:

1. ¿Cómo organizarías una aplicación React para generar datos ficticios?
2. ¿Qué componentes reutilizables crearías?
3. ¿Qué estructura tendría?

> No guardamos una respuesta independiente para cada pregunta. Las respuestas se fueron concretando durante la sesión y quedaron reflejadas en el wireframe, el árbol de componentes y las decisiones de estado.

### Organización de la aplicación

Durante el análisis terminamos planteando una sola pantalla con tres zonas: configuración, resultados y exportación. El estado compartido partiría de `App` y los componentes se extraerían de forma progresiva.

### Componentes reutilizables

A lo largo de la sesión se propusieron selectores de plantilla, cantidad y campos; controles de validación y generación; vistas de tabla y código; y componentes para la exportación. Se descartó `Sidebar` porque solo duplicaría el panel de configuración del MVP.

### Estructura resultante

La estructura final quedó reflejada en este árbol:

```text
App
├── Header
├── GeneratorPanel
│   ├── TemplateSelector
│   ├── QuantitySelector
│   ├── FieldSelector
│   ├── ValidationMessage
│   └── GenerateButton
├── PreviewPanel
│   ├── PreviewTabs
│   ├── EmptyState
│   ├── PreviewTable
│   └── CodePreview
├── ExportPanel
│   ├── ExportFormatSelector
│   └── ExportButton
└── Footer
```

Las decisiones se fueron concretando en el [wireframe](wireframe.md), la [arquitectura de componentes](componentes.md) y la distribución de estados. El árbol es una guía y no obliga a crear componentes vacíos.

## B. Organización de las conversaciones del Project

El proyecto se ha dividido en varias conversaciones para no mezclar coordinación, desarrollo, cambios en el repositorio y documentación. Esta organización ayuda a repartir el trabajo, pero no forma parte de la arquitectura React.

### DevData Generator · Main

Es la conversación de coordinación. Se utiliza para:

- mantener el estado general;
- revisar requisitos;
- decidir el siguiente paso;
- aprobar los resultados;
- preparar mensajes para las demás conversaciones;
- comprobar que una tarea está realmente terminada.

### DevData Generator · Desarrollo React

Se utiliza para analizar y validar el trabajo técnico. Sus tareas principales son:

- inspeccionar el repositorio;
- dividir el desarrollo en cambios pequeños;
- revisar los cambios realizados por Codex;
- ejecutar pruebas;
- detectar errores;
- comprobar que el código respeta el alcance aprobado.

### DevData Generator · Codex

Se utiliza para realizar cambios concretos sobre el repositorio. Antes de aceptar un cambio se revisan:

- los archivos modificados;
- el diff;
- lint;
- build;
- funcionamiento local;
- estado de Git.

### DevData Generator · Documentación y entrega

Se encarga de:

- README;
- documentos de cada sesión;
- investigación;
- wireframes;
- árbol de componentes;
- registro de prompts;
- pruebas documentadas;
- presentación final.

### DevData Generator · Ideación y requisitos

Conserva el origen y el contexto del proyecto:

- documento del profesor;
- propuesta inicial;
- requisitos obligatorios;
- decisiones históricas;
- ideas opcionales;
- dudas que aparecieron al definir el alcance.

Aunque se consulta menos durante la implementación, permite comprobar de dónde procede cada decisión.

## C. Prompts posteriores relevantes

Este apartado recoge una selección de prompts que tuvieron impacto directo en decisiones, entregables o cambios del repositorio. No es un historial completo de todos los mensajes ni de todas las conversaciones. Los textos siguientes son resúmenes, no citas literales.

### PROMPT-004 — Consolidación de requisitos

- **Conversación:** DevData Generator · Ideación y requisitos.
- **Objetivo:** reunir los requisitos existentes sin inventar otros nuevos.
- **Resultado:** se separaron requisitos obligatorios, recomendaciones, extras y decisiones pendientes.
- **Comprobación:** el documento del profesor se mantuvo como fuente oficial.

### PROMPT-005 — Preparación de la Entrega 1

- **Conversación:** DevData Generator · Documentación y entrega.
- **Objetivo:** preparar la investigación, las plantillas, los campos, el wireframe, los componentes y los primeros prompts.
- **Resultado:** se creó el paquete documental de la Sesión 1.
- **Comprobación:** Main revisó y aprobó el contenido.

### PROMPT-006 — Preparación técnica inicial

- **Conversaciones:** DevData Generator · Desarrollo React y DevData Generator · Codex.
- **Objetivo:** inspeccionar el repositorio, crear la base React con Vite y limpiar la plantilla inicial sin empezar el generador.
- **Resultado:** se dejó una pantalla mínima y un proyecto preparado para comenzar la Sesión 2.
- **Comprobación:** lint, build y servidor local superados.

### PROMPT-007 — Incorporación de la documentación

- **Conversaciones:** DevData Generator · Main, DevData Generator · Codex y DevData Generator · Desarrollo React.
- **Objetivo:** incorporar el README y los documentos de la Sesión 1 mediante un cambio exclusivamente documental.
- **Resultado:** se publicaron el README y los cinco archivos de `docs/`.
- **Comprobación:** diff revisado, lint y build superados, commit publicado y repositorio limpio.

### PROMPT-008 — Revisión editorial

- **Conversaciones:** DevData Generator · Main, DevData Generator · Documentación y entrega, DevData Generator · Codex y DevData Generator · Desarrollo React.
- **Objetivo:** reducir repeticiones, usar un tono más natural y corregir la explicación del Paso 9.
- **Resultado:** se preparó una versión más breve y clara de los seis documentos.
- **Comprobación:** revisión editorial en Main y validación técnica antes del commit.
