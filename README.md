# NTEC ToolBox · DevData Generator

Aplicación web desarrollada con React para generar conjuntos configurables de datos ficticios destinados a pruebas, aprendizaje, prototipos, bases de datos y aplicaciones.

El proyecto forma parte de una práctica guiada de Desarrollo Web FullStack y se desarrolla de manera incremental a lo largo de cuatro sesiones.

## Problema que resuelve

Durante el desarrollo de una aplicación es habitual necesitar datos de ejemplo para probar:

- listados;
- tablas;
- formularios;
- bases de datos;
- APIs;
- componentes frontend;
- operaciones CRUD;
- importaciones y exportaciones.

Crear estos datos manualmente requiere tiempo, produce poca variedad y dificulta realizar pruebas con varios registros.

DevData Generator pretende resolver este problema mediante una interfaz sencilla desde la que el usuario pueda seleccionar una plantilla, escoger los campos necesarios, indicar una cantidad y exportar los datos generados.

## Usuarios previstos

La aplicación está dirigida principalmente a:

- estudiantes de programación;
- desarrolladores frontend;
- desarrolladores backend;
- desarrolladores full-stack;
- personas que necesiten datos ficticios para ejercicios, demostraciones o pruebas.

La primera versión se orienta especialmente a usuarios que prefieran una herramienta visual y no quieran escribir manualmente código o estructuras de datos.

## Tecnologías

### Tecnologías utilizadas

- React
- Vite
- JavaScript
- CSS
- ESLint
- Git
- GitHub

### Librerías previstas

Las siguientes librerías están previstas para las siguientes sesiones, pero todavía no forman parte de la implementación actual:

- `@faker-js/faker`: generación de datos ficticios;
- `papaparse`: conversión y exportación en CSV;
- `file-saver`: descarga de archivos desde el navegador.

> Estas librerías todavía no deben considerarse instaladas ni operativas. Su incorporación se realizará progresivamente cuando la funcionalidad correspondiente sea desarrollada y probada.

## Funcionalidades mínimas previstas

El MVP deberá permitir:

- seleccionar una plantilla;
- indicar la cantidad de registros;
- seleccionar los campos que se desean incluir;
- generar datos ficticios;
- mostrar una vista previa en tabla;
- mostrar una vista previa en código;
- exportar los resultados;
- validar la configuración antes de generar o exportar;
- la interfaz responsive es un objetivo previsto para la versión final.

Estas funcionalidades forman parte del alcance aprobado, pero no todas están implementadas actualmente.

## Plantillas iniciales

La primera versión utilizará tres plantillas:

- Usuarios;
- Alumnos;
- Productos.

### Usuarios

Campos aprobados:

- nombre;
- apellidos;
- email;
- teléfono;
- edad;
- ciudad;
- UUID;
- fecha de alta.

### Alumnos

Campos recomendados para el MVP:

- nombre;
- apellidos;
- email;
- teléfono;
- edad;
- ciudad;
- UUID;
- curso;
- fecha de matriculación.

### Productos

Campos recomendados para el MVP:

- ID;
- nombre;
- categoría;
- precio;
- stock;
- activo.

La definición detallada y las decisiones adoptadas pueden consultarse en [Sesión 1: análisis y diseño](docs/sesion-1-analisis-diseno.md).

## Formatos obligatorios

La versión final deberá exportar los datos en:

- JSON;
- CSV;
- SQL INSERT.

## Estado actual

### Implementado y validado

Actualmente el repositorio contiene:

- proyecto React creado con Vite;
- JavaScript;
- CSS;
- configuración de ESLint;
- pantalla mínima inicial;
- repositorio Git inicializado;
- repositorio público en GitHub;
- rama principal `main`.

Validaciones realizadas:

- ejecución local correcta;
- análisis de ESLint superado;
- compilación de producción superada.

### Diseñado, pero todavía no implementado

Se han definido documentalmente:

- problema y usuarios;
- plantillas y campos;
- wireframe;
- árbol orientativo de componentes;
- distribución inicial de estados;
- flujo general de generación y exportación;
- investigación de herramientas similares.

### Todavía no implementado

En el estado actual todavía no existen:

- selector de plantillas;
- selector de cantidad;
- selector de campos;
- integración con Faker;
- generación de datos;
- tabla de vista previa;
- vista de código o JSON;
- exportación JSON;
- exportación CSV;
- exportación SQL;
- modo oscuro;
- funcionalidades adicionales.

## Instalación

### Requisitos previos

Es necesario disponer de:

- Node.js;
- npm;
- Git.

### Clonar el repositorio

```bash
git clone https://github.com/Martret92/devdata-generator.git
cd devdata-generator
```
### Instalar dependencias

```bash
npm install
```

## Ejecución local

Para iniciar el servidor de desarrollo:

```bash
npm run dev
```

Vite mostrará en la terminal la dirección local desde la que puede abrirse la aplicación.

> En el estado actual se muestra únicamente la pantalla mínima inicial. El generador de datos todavía no está implementado.

## Scripts disponibles

| Comando           | Descripción                                                   |
| ----------------- | ------------------------------------------------------------- |
| `npm run dev`     | Inicia el servidor de desarrollo de Vite                      |
| `npm run build`   | Genera la compilación de producción                           |
| `npm run lint`    | Ejecuta ESLint sobre el proyecto                              |
| `npm run preview` | Permite previsualizar localmente la compilación de producción |

## Documentación

La evolución del proyecto se documenta dentro de la carpeta `docs/`.

* [Sesión 1: análisis y diseño](docs/sesion-1-analisis-diseno.md)
* [Investigación de herramientas similares](docs/investigacion-herramientas.md)
* [Wireframe aprobado](docs/wireframe.md)
* [Arquitectura orientativa de componentes](docs/componentes.md)
* [Registro de prompts](docs/registro-prompts.md)

## Roadmap

### Sesión 1 — Análisis y diseño

**Estado: completada**

Incluye:

* investigación de herramientas similares;
* definición del problema;
* identificación de usuarios;
* selección de plantillas y campos;
* wireframe;
* árbol inicial de componentes;
* registro inicial de prompts;
* creación del proyecto React con Vite;
* configuración de Git y GitHub;
* validación de lint, build y ejecución local.

### Sesión 2 — Desarrollo del núcleo

**Estado: pendiente**

Objetivos previstos:

* componentes;
* selector de plantillas;
* selector de cantidad;
* selector de campos;
* Faker.js;
* generación;
* tabla;
* JSON;
* validaciones;
* refactorización.

### Sesión 3 — Exportación

**Estado: pendiente**

Objetivos previstos:

* exportación JSON;
* exportación CSV;
* SQL INSERT;
* descarga;
* copiar al portapapeles;
* mejora de interfaz;
* responsive;
* modo oscuro;
* accesibilidad;
* refactorización.

### Sesión 4 — Versión final

**Estado: pendiente**

Objetivos previstos:

* búsqueda de errores;
* optimización;
* limpieza;
* README;
* pruebas;
* documentación;
* presentación;
* versión definitiva.

## Historial inicial

Primer commit del proyecto:

```text
43e7d43 chore: initialize React and Vite project
```

## Contexto académico

Proyecto realizado como práctica guiada de Desarrollo Web FullStack.

* Proyecto: NTEC ToolBox · DevData Generator
* Profesor: Óscar Burgos
* Autor: Jaime Martret
* Fecha prevista de entrega final: 31 de julio de 2026

## Nota sobre el estado de la documentación

Este README distingue entre:

* funcionalidades previstas;
* decisiones de diseño;
* elementos implementados;
* validaciones realizadas;
* trabajo pendiente.

Una funcionalidad solo se marcará como terminada cuando haya sido implementada y probada en el repositorio.
