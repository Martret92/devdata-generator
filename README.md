# NTEC ToolBox · DevData Generator

Aplicación web desarrollada con React para generar datos ficticios configurables destinados a pruebas, ejercicios, prototipos, bases de datos y aplicaciones.

El proyecto forma parte de una práctica guiada de Desarrollo Web FullStack y se desarrolla de forma incremental a lo largo de cuatro sesiones.

## Objetivo

DevData Generator permite preparar conjuntos de datos ficticios sin tener que escribir manualmente cada registro.

La aplicación está pensada principalmente para estudiantes y desarrolladores que necesiten datos para probar:

- tablas;
- formularios;
- componentes;
- APIs;
- bases de datos;
- operaciones CRUD;
- importaciones y exportaciones.

## Tecnologías

- React
- Vite
- JavaScript
- CSS
- ESLint
- Git
- GitHub

## Dependencias

### Utilizada

- `@faker-js/faker`: generación de datos ficticios.

### Previstas o posibles para la Sesión 3

- `papaparse`: posible apoyo para generar archivos CSV;
- `file-saver`: posible apoyo para descargar archivos desde el navegador.

PapaParse y FileSaver no están instaladas actualmente. Su uso se decidirá al implementar las exportaciones.

## Plantillas

La aplicación incluye tres plantillas:

### Usuarios

- nombre;
- apellidos;
- email;
- teléfono;
- edad;
- ciudad;
- UUID;
- fecha de alta.

### Alumnos

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

- ID;
- nombre;
- categoría;
- precio;
- stock;
- activo.

La definición y las decisiones iniciales se explican en [Sesión 1: análisis y diseño](docs/sesion-1-analisis-diseno.md).

## Estado actual

### Implementado

Después de completar la Sesión 2, la aplicación permite:

- seleccionar Usuarios, Alumnos o Productos;
- indicar una cantidad entre 1 y 100 registros;
- activar o desactivar campos;
- validar cantidades y selección de campos;
- generar datos ficticios con Faker;
- generar mediante el botón o la tecla `Enter`;
- mostrar todos los resultados en una tabla;
- mostrar todos los resultados en formato JSON;
- alternar entre las vistas Tabla y JSON;
- limpiar los resultados al cambiar una opción de configuración;
- utilizar la interfaz en distintos tamaños de pantalla;
- navegar mediante teclado;
- utilizar controles con foco visible.

> **Vista JSON:** implementada.
> **Exportación JSON descargable:** pendiente.

### Pendiente

La Sesión 3 se centrará principalmente en:

- exportación JSON descargable;
- exportación CSV;
- generación de SQL INSERT;
- descarga de archivos;
- posible copia al portapapeles;
- revisión final del diseño responsive;
- revisión final de accesibilidad;
- mejoras opcionales después de completar el alcance obligatorio.

## Formatos obligatorios

La versión final deberá permitir exportar:

- JSON;
- CSV;
- SQL INSERT.

Actualmente existe una vista JSON completa, pero todavía no se descarga como archivo.

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

### Instalar las dependencias

```bash
npm install
```

## Ejecución local

```bash
npm run dev
```

Vite mostrará en la terminal la dirección local desde la que puede abrirse la aplicación.

En Windows, si la configuración de PowerShell bloquea el comando `npm`, puede utilizarse:

```powershell
npm.cmd run dev
```

## Scripts disponibles

| Comando           | Descripción                                          |
| ----------------- | ---------------------------------------------------- |
| `npm run dev`     | Inicia el servidor de desarrollo de Vite             |
| `npm run build`   | Genera la compilación de producción                  |
| `npm run lint`    | Ejecuta ESLint sobre el proyecto                     |
| `npm run preview` | Previsualiza localmente la compilación de producción |

Los mismos scripts pueden ejecutarse con `npm.cmd` cuando sea necesario en PowerShell.

## Documentación

* [Sesión 1: análisis y diseño](docs/sesion-1-analisis-diseno.md)
* [Investigación de herramientas similares](docs/investigacion-herramientas.md)
* [Wireframe aprobado](docs/wireframe.md)
* [Arquitectura orientativa de componentes](docs/componentes.md)
* [Registro de prompts](docs/registro-prompts.md)
* [Cierre de la Sesión 2](docs/sesion-2-cierre.md)

## Roadmap

### Sesión 1 — Análisis y diseño

**Estado: completada**

Incluyó:

* investigación de herramientas similares;
* definición del problema y de los usuarios;
* selección de plantillas y campos;
* wireframe;
* árbol inicial de componentes;
* estados previstos;
* primeros prompts;
* creación del proyecto con React y Vite;
* configuración de Git y GitHub;
* validación de lint, build y ejecución local.

### Sesión 2 — Desarrollo del núcleo

**Estado: completada**

Incluyó:

* componentes principales;
* selector de plantilla;
* cantidad entre 1 y 100;
* selector de campos;
* validaciones;
* integración de Faker;
* generación de datos ficticios;
* tabla completa;
* vista JSON completa;
* alternancia Tabla/JSON;
* responsive inicial;
* navegación mediante teclado y foco visible.

### Sesión 3 — Exportación y revisión de interfaz

**Estado: pendiente**

Objetivos previstos:

* exportación JSON;
* exportación CSV;
* SQL INSERT;
* descarga de archivos;
* posible copia al portapapeles;
* revisión responsive;
* revisión de accesibilidad;
* mejoras de interfaz;
* refactorización solo si resulta necesaria.

### Sesión 4 — Revisión y entrega final

**Estado: pendiente**

Objetivos previstos:

* búsqueda de errores;
* optimización;
* limpieza;
* pruebas finales;
* actualización de documentación;
* capturas;
* presentación;
* versión definitiva.

## Uso de IA

La IA se utilizó como apoyo para organizar requisitos, preparar tareas y revisar documentación. Las decisiones, los cambios y las pruebas fueron revisados por el autor.

El detalle de las preguntas de análisis y de otras consultas relevantes puede consultarse en el [registro de prompts](docs/registro-prompts.md).

## Contexto académico

* Proyecto: NTEC ToolBox · DevData Generator
* Asignatura: Desarrollo Web FullStack
* Profesor: Óscar Burgos
* Autor: Jaime Martret
* Fecha prevista de entrega final: 31 de julio de 2026

## Extras opcionales

Fuera del núcleo obligatorio quedan ideas como:

* seed;
* relaciones entre entidades;
* Excel;
* importación;
* API REST;
* estructuras anidadas;
* creación libre de plantillas;
* historial;
* edición avanzada;
* filtros.

Estas ideas no están implementadas ni deben desplazar el alcance obligatorio.
