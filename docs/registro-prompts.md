# Registro de prompts

## 1. Objetivo

Este documento registra los prompts relevantes utilizados para:

- analizar requisitos;
- diseñar la aplicación;
- preparar la arquitectura;
- implementar funcionalidades;
- revisar código;
- realizar pruebas;
- preparar documentación;
- mantener la trazabilidad del proyecto.

No se registrarán:

- saludos;
- confirmaciones triviales;
- mensajes sin impacto;
- preguntas operativas menores.

## 2. Regla de veracidad

Cuando no se conserve el texto literal de un prompt o de su respuesta:

- no se reconstruirá como si fuera una cita exacta;
- se indicará que no consta literalmente;
- se documentará únicamente su objetivo;
- se conservará la decisión final consolidada;
- se evitará atribuir cambios que no puedan comprobarse.

## 3. Formato del registro

| Campo | Descripción |
|---|---|
| Identificador | Código único del registro |
| Fecha o sesión | Momento en el que se utilizó |
| Conversación o herramienta | Lugar desde el que se realizó |
| Prompt | Texto literal o resumen identificado como no literal |
| Objetivo | Resultado que se buscaba |
| Resultado | Respuesta útil o decisión obtenida |
| Cambios aplicados | Archivos o decisiones afectados |
| Validación | Comprobación posterior |

## 4. Registros iniciales

### PROMPT-001

**Fecha o sesión:** Sesión 1
**Conversación o herramienta:** No consta
**Texto disponible:** Literal

> ¿Cómo organizarías una aplicación React para generar datos ficticios?

**Objetivo:**

Obtener una propuesta inicial de organización para una aplicación React dedicada a configurar, generar, previsualizar y exportar datos ficticios.

**Resultado:**

No consta la respuesta histórica literal.

Las decisiones consolidadas posteriormente fueron:

- utilizar una sola pantalla;
- separar configuración, resultados y exportación;
- mantener el flujo principal visible;
- gestionar inicialmente el estado compartido desde `App`;
- crear componentes de forma progresiva.

**Cambios aplicados:**

- wireframe aprobado;
- árbol orientativo de componentes;
- propuesta de distribución de estados.

**Validación:**

Las decisiones quedaron revisadas durante el cierre documental de la Entrega 1.

---

### PROMPT-002

**Fecha o sesión:** Sesión 1
**Conversación o herramienta:** No consta
**Texto disponible:** Literal

> ¿Qué componentes reutilizables crearías?

**Objetivo:**

Identificar componentes React con responsabilidades diferenciadas y evitar que toda la aplicación quedara concentrada en `App`.

**Resultado:**

No consta la respuesta histórica literal.

La decisión consolidada propone:

- `TemplateSelector`;
- `QuantitySelector`;
- `FieldSelector`;
- `GenerateButton`;
- `PreviewTable`;
- `CodePreview`;
- componentes de exportación;
- paneles para agrupar responsabilidades.

**Cambios aplicados:**

Se creó el árbol orientativo documentado en `docs/componentes.md`.

**Validación:**

La estructura fue revisada para:

- evitar componentes duplicados;
- evitar un `Sidebar` innecesario;
- evitar componentes vacíos;
- mantener crecimiento progresivo.

---

### PROMPT-003

**Fecha o sesión:** Sesión 1
**Conversación o herramienta:** No consta
**Texto disponible:** Literal

> ¿Qué estructura tendría?

**Objetivo:**

Definir una posible jerarquía de componentes y la organización general del proyecto.

**Resultado:**

No consta la respuesta histórica literal.

La estructura consolidada es:

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
**Cambios aplicados:**

* árbol orientativo;
* responsabilidades documentadas;
* flujo de datos definido;
* separación entre estados compartidos y locales.

**Validación:**

La propuesta se revisó para evitar sobrearquitectura y no obliga a crear componentes vacíos.

## 5. Prompts posteriores relevantes

### PROMPT-004

**Fecha o sesión:** Sesión 1
**Conversación o herramienta:** DevData Generator · Ideación y requisitos
**Texto disponible:** No se conserva aquí el texto literal completo.

**Resumen fiel:**

Consolidar los requisitos ya contenidos en la conversación y en los documentos originales, sin abrir una fase nueva de ideación ni inventar requisitos.

**Objetivo:**

Preparar un traspaso fiable hacia DevData Generator · Main con:

* requisitos del profesor;
* entregables;
* funcionalidades obligatorias;
* funcionalidades recomendadas;
* decisiones aprobadas;
* decisiones pendientes.

**Resultado:**

Se consolidó el alcance inicial del proyecto y se separaron:

* requisitos obligatorios;
* recomendaciones;
* extras;
* elementos pendientes.

**Cambios aplicados:**

* definición del alcance;
* plantillas iniciales;
* formatos obligatorios;
* coordinación entre conversaciones.

**Validación:**

El documento original del profesor se mantuvo como fuente oficial y fue entregado también a Main.

---

### PROMPT-005

**Fecha o sesión:** Sesión 1
**Conversación o herramienta:** DevData Generator · Documentación y entrega
**Texto disponible:** Disponible en la conversación, no reproducido íntegramente en este registro para evitar duplicación excesiva.

**Resumen fiel:**

Preparar los entregables documentales completos de la Entrega 1, incluyendo:

* investigación de herramientas;
* problema y usuarios;
* plantillas y campos;
* wireframe;
* árbol de componentes;
* distribución de estados;
* registro inicial de prompts;
* paquete de cierre para Main.

**Objetivo:**

Cerrar documentalmente la Sesión 1 sin modificar el repositorio ni afirmar funcionalidades inexistentes.

**Resultado:**

Se preparó:

* comparación de Mockaroo, JSON Generator y Faker.js Playground;
* definición del problema;
* campos definitivos recomendados;
* wireframe;
* árbol del MVP;
* distribución orientativa de estados;
* registro inicial de prompts;
* decisiones pendientes;
* checklist de Entrega 1.

**Cambios aplicados:**

En ese momento no se modificó el repositorio.

Las decisiones quedaron preparadas para su incorporación documental.

**Validación:**

Main confirmó que la Entrega 1 estaba completada y validada.

---

### PROMPT-006

**Fecha o sesión:** Sesión 1
**Conversación o herramienta:** DevData Generator · Codex
**Texto disponible:** No se reproduce aquí el texto literal completo.

**Resumen fiel:**

Inspeccionar el proyecto Vite existente antes de realizar cambios y sustituir la plantilla promocional por una pantalla mínima, manteniendo cambios pequeños y verificables.

**Objetivo:**

Preparar una base técnica limpia sin implementar todavía la lógica del generador.

**Resultado comunicado:**

Codex informó de:

* inspección de la estructura Vite;
* detección de logos, enlaces, contador y estilos promocionales;
* sustitución por una estructura mínima;
* simplificación de estilos;
* eliminación de imports y recursos sin uso cuando correspondía.

**Cambios aplicados:**

Los detalles exactos deben comprobarse mediante el diff o el estado actual del repositorio antes de documentar archivos concretos.

A nivel de resultado consolidado se considera confirmada una pantalla mínima inicial.

**Validación:**

Según el estado técnico comunicado:

* ejecución local superada;
* `npm run lint` superado;
* `npm run build` superado.

No se validaron funcionalidades del generador porque todavía no existían.

---

### PROMPT-007

**Fecha o sesión:** Cierre de Sesión 1
**Conversación o herramienta:** DevData Generator · Documentación y entrega
**Texto disponible:** Disponible en la conversación actual.

**Resumen fiel:**

Preparar una actualización documental incremental para sustituir el README estándar de Vite y añadir:

* resumen de Sesión 1;
* investigación;
* wireframe;
* arquitectura de componentes;
* registro de prompts;
* roadmap;
* estado técnico real.

**Objetivo:**

Permitir que el profesor compruebe el trabajo realizado durante la primera sesión directamente desde el repositorio.

**Resultado:**

Se preparó el contenido completo para:

```text
README.md
docs/sesion-1-analisis-diseno.md
docs/investigacion-herramientas.md
docs/wireframe.md
docs/componentes.md
docs/registro-prompts.md
```

**Cambios aplicados:**

Ninguno desde esta conversación.

Los archivos quedaron listos para ser incorporados por el flujo técnico correspondiente.

**Validación:**

Se contrastó antes de redactar:

* que el repositorio es público;
* que la rama principal es `main`;
* que el README seguía siendo el de Vite;
* que el commit inicial existe;
* que `package.json` contiene los scripts esperados;
* que Faker, Papa Parse y FileSaver todavía no están declarados como dependencias.

## 6. Plantilla para registros futuros

```text
### PROMPT-XXX

**Fecha o sesión:**
**Conversación o herramienta:**
**Texto disponible:** Literal / Resumen / No consta

> Texto literal, cuando esté disponible.

**Objetivo:**

Descripción del propósito.

**Resultado:**

Decisión o información obtenida.

**Cambios aplicados:**

- archivo;
- funcionalidad;
- decisión;
- ninguno.

**Validación:**

- prueba ejecutada;
- revisión;
- resultado;
- pendiente.
```

## 7. Criterios para próximas sesiones

En las siguientes sesiones deberán registrarse especialmente los prompts usados para:

* instalar Faker;
* definir las plantillas en código;
* implementar selección de campos;
* implementar generación;
* crear la tabla;
* crear la vista de código;
* implementar exportaciones;
* corregir errores;
* refactorizar;
* preparar pruebas;
* revisar README;
* preparar presentación.

Cada registro deberá distinguir entre:

* propuesta;
* cambio aplicado;
* validación;
* limitación;
* tarea pendiente.
