# Registro de prompts

## Uso de IA en el proyecto

La IA se utilizó para ordenar requisitos, comparar opciones, preparar tareas técnicas y revisar cambios.

Las decisiones finales, los cambios del repositorio y las pruebas se comprobaron manualmente.

No se incluyen saludos, mensajes de coordinación ni consultas sin impacto directo en el proyecto.

## A. Prompts iniciales de la Entrega 1

El profesor propuso utilizar preguntas de análisis sin pedir código.

No guardamos una respuesta independiente para cada pregunta. Las ideas se fueron concretando durante la sesión y quedaron reflejadas en el wireframe, el árbol de componentes y los estados previstos.

### 1. Organización general

**Prompt**

> ¿Cómo organizarías una aplicación React para generar datos ficticios?

**Objetivo**

Pensar el flujo principal antes de comenzar a programar.

**Resultado**

Durante el análisis terminamos planteando una sola pantalla dividida en:

- configuración;
- resultados;
- exportación.

También decidimos que la tabla, la vista de código y las exportaciones utilizarían el mismo conjunto de datos.

**Documentos relacionados**

- [Wireframe](wireframe.md)
- [Componentes y estados](componentes.md)

### 2. Componentes reutilizables

**Prompt**

> ¿Qué componentes reutilizables crearías?

**Objetivo**

Evitar que toda la aplicación quedara concentrada en `App`.

**Resultado**

A lo largo de la sesión se propusieron componentes para:

- seleccionar la plantilla;
- indicar la cantidad;
- seleccionar campos;
- generar;
- mostrar tabla y código;
- exportar.

El árbol se utiliza como guía y no obliga a crear componentes vacíos.

**Documento relacionado**

- [Componentes y estados](componentes.md)

### 3. Estructura

**Prompt**

> ¿Qué estructura tendría?

**Objetivo**

Definir la relación entre configuración, vista previa y exportación.

**Resultado**

La propuesta inicial quedó reflejada en este árbol:

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

Los estados previstos son:

- `selectedTemplate`;
- `fields`;
- `numberRecords`;
- `generatedData`;
- `exportFormat`;
- `loading`;
- `errors`.

**Documento relacionado**

- [Componentes y estados](componentes.md)

## B. Otros prompts relevantes

Este apartado recoge una selección de consultas que influyeron directamente en decisiones, entregables o cambios del proyecto. No es un historial completo.

Los textos son resúmenes y no citas literales.

### Consolidación de requisitos

**Objetivo**

Reunir los requisitos del profesor sin añadir funcionalidades nuevas.

**Resultado**

Se separaron:

- requisitos obligatorios;
- recomendaciones;
- extras;
- decisiones pendientes.

El documento del profesor se mantuvo como fuente oficial.

### Preparación de la Entrega 1

**Objetivo**

Organizar la investigación, las plantillas, los campos, el wireframe, los componentes y los primeros prompts.

**Resultado**

Se prepararon los entregables documentales exigidos para la Sesión 1.

### Preparación técnica inicial

**Objetivo**

Revisar el proyecto Vite y dejar una base mínima antes de comenzar el generador.

**Resultado**

Se eliminó el contenido de demostración de Vite y se dejó una pantalla inicial sencilla.

Se comprobaron:

- lint;
- build;
- servidor local.

## Proceso de trabajo asistido

Los cambios se dividieron en tareas pequeñas. Antes de modificar el repositorio se revisó su estado y, después, se comprobaron el diff, lint, build y el funcionamiento local.

En Windows algunos comandos se ejecutaron con `npm.cmd` por la configuración de PowerShell.
