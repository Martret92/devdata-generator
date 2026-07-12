# Sesión 1 — Análisis y diseño

## 1. Información general

- Proyecto: NTEC ToolBox · DevData Generator
- Sesión: 1
- Tipo de trabajo: análisis, diseño inicial y preparación técnica
- Estado: completada
- Fecha de cierre: 12 de julio de 2026
- Profesor: Óscar Burgos
- Autor: Jaime Martret

## 2. Propósito de este documento

Este documento registra el trabajo realizado durante la Sesión 1 y permite distinguir entre:

- decisiones de diseño aprobadas;
- preparación técnica completada;
- funcionalidades implementadas;
- funcionalidades todavía pendientes.

La Sesión 1 no tenía como objetivo completar el generador. Su finalidad era definir el problema, estudiar referencias, acotar el MVP, diseñar la interfaz y preparar la base técnica del proyecto.

## 3. Objetivos oficiales de la Sesión 1

Los objetivos documentales y técnicos de la primera sesión fueron:

1. Investigar herramientas similares.
2. Definir el problema que resolverá la aplicación.
3. Identificar los usuarios previstos.
4. Establecer las plantillas iniciales.
5. Definir los campos de cada plantilla.
6. Diseñar un wireframe de la pantalla principal.
7. Preparar un árbol inicial de componentes React.
8. Identificar los principales estados de la aplicación.
9. Registrar los primeros prompts utilizados.
10. Crear el proyecto React con Vite.
11. Preparar el repositorio Git.
12. Publicar el repositorio en GitHub.
13. Verificar la base técnica mediante lint, build y ejecución local.

## 4. Investigación realizada

Se analizaron tres referencias:

- Mockaroo;
- JSON Generator;
- Faker.js Playground.

### Resultado general

La investigación permitió separar tres necesidades distintas:

- una interfaz visual sencilla para configurar datos;
- una vista de código para comprobar la estructura;
- un motor técnico para generar los valores.

Mockaroo se tomó como referencia conceptual para el flujo de configuración, generación, vista previa y exportación.

JSON Generator se tomó como referencia para la representación de datos mediante código.

Faker.js se identificó como posible motor interno de generación, no como modelo de interfaz.

La investigación completa se encuentra en:

[Investigación de herramientas similares](investigacion-herramientas.md)

## 5. Definición del problema

DevData Generator busca resolver la necesidad de crear rápidamente datos ficticios para:

- probar componentes;
- rellenar tablas;
- simular información de una API;
- realizar ejercicios con bases de datos;
- probar importaciones y exportaciones;
- preparar demostraciones.

La creación manual de datos es lenta, repetitiva y ofrece poca variedad. La aplicación permitirá generar conjuntos de registros mediante una interfaz visual.

## 6. Usuarios previstos

Los usuarios principales serán:

- estudiantes de programación;
- desarrolladores frontend;
- desarrolladores backend;
- desarrolladores full-stack;
- personas que necesiten datos ficticios para pruebas o demostraciones.

La primera versión estará orientada a usuarios con conocimientos técnicos básicos, pero no exigirá escribir código para generar los datos.

## 7. Alcance aprobado del MVP

El MVP deberá permitir:

1. Elegir una plantilla.
2. Elegir la cantidad de registros.
3. Elegir los campos.
4. Generar datos ficticios.
5. Mostrar los registros en una tabla.
6. Mostrar los registros mediante una vista de código.
7. Exportar los mismos datos en JSON.
8. Exportar los mismos datos en CSV.
9. Exportar los mismos datos como SQL INSERT.
10. Mostrar validaciones cuando la configuración no sea correcta.
11. Adaptar la interfaz a diferentes tamaños de pantalla.

Durante la Sesión 1 estas funcionalidades quedaron diseñadas, pero no fueron implementadas.

## 8. Plantillas aprobadas

Las plantillas iniciales son:

- Usuarios;
- Alumnos;
- Productos.

Se ha mantenido un alcance reducido para que las tres plantillas puedan completarse, probarse y exportarse correctamente.

## 9. Campos aprobados

### 9.1. Usuarios

Los campos oficiales de la plantilla Usuarios son:

| Nombre visible | Clave sugerida | Tipo orientativo | Ejemplo | Por defecto |
|---|---|---|---|---|
| Nombre | `nombre` | string | `"Laura"` | Sí |
| Apellidos | `apellidos` | string | `"García López"` | Sí |
| Email | `email` | string | `"laura.garcia@example.com"` | Sí |
| Teléfono | `telefono` | string | `"+34 612 345 678"` | Sí |
| Edad | `edad` | integer | `29` | Sí |
| Ciudad | `ciudad` | string | `"Barcelona"` | Sí |
| UUID | `uuid` | string | `"550e8400-e29b-41d4-a716-446655440000"` | Sí |
| Fecha de alta | `fechaAlta` | fecha ISO | `"2026-05-18"` | Sí |

### 9.2. Alumnos

La propuesta inicial de Alumnos incluía los mismos datos personales que Usuarios y una fecha de matriculación.

Para diferenciar la plantilla y darle utilidad académica se añadió únicamente `curso`.

| Nombre visible | Clave sugerida | Tipo orientativo | Ejemplo | Por defecto |
|---|---|---|---|---|
| Nombre | `nombre` | string | `"Daniel"` | Sí |
| Apellidos | `apellidos` | string | `"Martínez Ruiz"` | Sí |
| Email | `email` | string | `"daniel.martinez@example.com"` | Sí |
| Teléfono | `telefono` | string | `"+34 633 120 845"` | No |
| Edad | `edad` | integer | `22` | Sí |
| Ciudad | `ciudad` | string | `"Valencia"` | No |
| UUID | `uuid` | string | `"6fa459ea-ee8a-3ca4-894e-db77e160355e"` | Sí |
| Curso | `curso` | string | `"Desarrollo Web FullStack"` | Sí |
| Fecha de matriculación | `fechaMatriculacion` | fecha ISO | `"2026-02-10"` | Sí |

### 9.3. Productos

La propuesta inicial de Productos era:

- nombre;
- precio;
- stock;
- activo.

Se añadieron únicamente `id` y `categoria`.

`id` facilitará la identificación de registros y la generación de SQL.

`categoria` permitirá producir datos más útiles para filtros y agrupaciones sin introducir relaciones entre tablas.

| Nombre visible | Clave sugerida | Tipo orientativo | Ejemplo | Por defecto |
|---|---|---|---|---|
| ID | `id` | integer | `1` | Sí |
| Nombre | `nombre` | string | `"Teclado mecánico"` | Sí |
| Categoría | `categoria` | string | `"Informática"` | Sí |
| Precio | `precio` | decimal | `49.99` | Sí |
| Stock | `stock` | integer | `25` | Sí |
| Activo | `activo` | boolean | `true` | Sí |

## 10. Wireframe aprobado

Se aprobó una aplicación de una sola pantalla compuesta por:

- cabecera;
- panel de configuración;
- selector de plantilla;
- selector de cantidad;
- selector de campos;
- zona de validaciones;
- botón de generación;
- vista previa en tabla;
- vista previa de código;
- zona de exportación;
- estado inicial sin resultados;
- pie de página mínimo.

El wireframe completo se encuentra en:

[Wireframe aprobado](wireframe.md)

## 11. Árbol orientativo de componentes

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
Este árbol es orientativo.

No obliga a crear todos los componentes desde el comienzo ni a mantener componentes vacíos. Durante el desarrollo solo se separarán componentes cuando tengan una responsabilidad concreta.

La explicación completa se encuentra en:

[Arquitectura orientativa de componentes](componentes.md)

## 12. Estados orientativos

Los estados compartidos inicialmente previstos son:

| Estado             | Responsabilidad                    |
| ------------------ | ---------------------------------- |
| `selectedTemplate` | Plantilla activa                   |
| `fields`           | Campos disponibles y seleccionados |
| `numberRecords`    | Cantidad de registros              |
| `generatedData`    | Datos generados                    |
| `exportFormat`     | Formato de salida seleccionado     |
| `loading`          | Estado temporal de generación      |
| `errors`           | Errores o avisos de validación     |

Estos estados son una guía de diseño y no representan una implementación existente.

Los detalles finales podrán adaptarse durante el desarrollo para evitar estado duplicado o innecesario.

## 13. Primeros prompts

Los primeros prompts que deben quedar registrados son:

1. ¿Cómo organizarías una aplicación React para generar datos ficticios?
2. ¿Qué componentes reutilizables crearías?
3. ¿Qué estructura tendría?

No se conserva la respuesta histórica literal obtenida para cada prompt.

Por veracidad documental, solo se registran las decisiones consolidadas posteriormente:

* una pantalla principal;
* separación entre configuración, vista previa y exportación;
* componentes reutilizables;
* estado compartido gestionado inicialmente desde `App`;
* arquitectura pequeña y progresiva.

El registro completo se encuentra en:

[Registro de prompts](registro-prompts.md)

## 14. Creación del proyecto Vite

Durante la Sesión 1 se creó la base técnica mediante React y Vite.

El proyecto incluye:

* React;
* React DOM;
* Vite;
* JavaScript;
* CSS;
* ESLint;
* scripts de desarrollo, compilación, lint y previsualización.

La creación del proyecto no implica que el generador esté terminado. En este punto solo existe la base sobre la que se desarrollarán las siguientes sesiones.

## 15. Git y GitHub

Se completaron las siguientes acciones:

* inicialización del repositorio Git;
* preparación de `.gitignore`;
* creación del primer commit;
* vinculación con GitHub;
* publicación en la rama `main`;
* creación de un repositorio público.

Repositorio:

```text
https://github.com/Martret92/devdata-generator
```

Primer commit:

```text
43e7d43 chore: initialize React and Vite project
```

## 16. Validaciones ejecutadas

La base técnica fue validada mediante:

### Ejecución local

La aplicación pudo iniciarse localmente mediante Vite.

Resultado:

```text
Superado
```

### ESLint

Se ejecutó:

```bash
npm run lint
```

Resultado:

```text
Superado
```

### Build

Se ejecutó:

```bash
npm run build
```

Resultado:

```text
Superado
```

Estas validaciones demuestran que la base técnica funciona, pero no validan funcionalidades del generador que todavía no existen.

## 17. Decisiones adoptadas

Durante la Sesión 1 se adoptaron las siguientes decisiones:

* usar React, Vite, JavaScript y CSS;
* crear una aplicación frontend sin backend;
* utilizar una única pantalla principal;
* limitar el MVP a tres plantillas;
* utilizar JSON, CSV y SQL INSERT como formatos obligatorios;
* reservar Faker.js como motor de generación;
* no exigir al usuario escribir código;
* mostrar tabla y código a partir del mismo conjunto de datos;
* no regenerar datos simplemente por cambiar el formato;
* centralizar inicialmente los estados compartidos;
* crear componentes de forma progresiva;
* evitar duplicación y sobrearquitectura;
* documentar la evolución desde la primera sesión.

## 18. Elementos aplazados

Quedaron expresamente fuera de la Sesión 1:

* instalación e integración de Faker;
* generación real de registros;
* selector funcional de plantillas;
* selector funcional de cantidad;
* selector funcional de campos;
* tabla;
* vista de código;
* exportación JSON;
* exportación CSV;
* exportación SQL;
* responsive definitivo;
* modo oscuro;
* seed configurable;
* relaciones entre entidades;
* Excel;
* importación de esquemas;
* API simulada;
* estructuras anidadas;
* backend;
* autenticación;
* almacenamiento persistente.

## 19. Diseño aprobado frente a implementación real

### Diseño aprobado

* plantillas;
* campos;
* wireframe;
* componentes orientativos;
* estados orientativos;
* flujo de generación;
* flujo de exportación;
* alcance del MVP;
* roadmap.

### Implementación real al cerrar la sesión

* proyecto React con Vite;
* estructura inicial de JavaScript y CSS;
* configuración de ESLint;
* pantalla mínima;
* Git;
* GitHub;
* lint correcto;
* build correcto;
* ejecución local correcta.

### No implementado

Toda la lógica funcional del generador.

## 20. Estado final de la Entrega 1

La Entrega 1 queda completada documental y técnicamente en su alcance inicial.

### Entregables completados

* investigación de herramientas similares;
* definición del problema;
* definición de usuarios;
* plantillas;
* campos;
* wireframe;
* árbol de componentes;
* estados orientativos;
* registro inicial de prompts;
* proyecto React con Vite;
* Git y GitHub;
* commit inicial;
* validaciones básicas.

### Resultado

El proyecto dispone de una base técnica válida y de un diseño suficientemente definido para iniciar la Sesión 2 sin ampliar innecesariamente el alcance.
