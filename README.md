# NTEC ToolBox · DevData Generator

Aplicación web desarrollada con React para generar datos ficticios configurables destinados a pruebas, ejercicios, prototipos, bases de datos y aplicaciones.

El proyecto forma parte de una práctica guiada de Desarrollo Web FullStack y se desarrolla de forma incremental a lo largo de cuatro sesiones.

## Objetivo

DevData Generator permite preparar conjuntos de datos ficticios sin escribir manualmente cada registro. Está pensado principalmente para estudiantes y desarrolladores que necesiten datos para probar:

- tablas y formularios;
- componentes y APIs;
- bases de datos y operaciones CRUD;
- importaciones y exportaciones;
- prototipos y demostraciones.

## Estado actual

Las Sesiones 1, 2 y 3 están completadas. La aplicación permite:

- elegir entre las plantillas Usuarios, Alumnos y Productos;
- indicar una cantidad entre 1 y 100 registros;
- seleccionar los campos incluidos;
- validar la configuración antes de generar;
- generar datos ficticios con Faker;
- consultar los registros en Tabla o JSON;
- descargar los mismos registros como JSON o CSV;
- generar y descargar sentencias SQL `INSERT`;
- copiar al portapapeles el JSON mostrado y descargado;
- mostrar un estado explicativo cuando todavía no existen resultados;
- utilizar una interfaz responsive validada en `390 × 844` y `1280 × 800`;
- navegar mediante teclado, utilizar controles etiquetados y reconocer el foco visible;
- alternar entre modo claro y oscuro, conservando la preferencia en `localStorage`.

La generación, las vistas, la copia y las exportaciones parten del mismo conjunto de datos actual. Cambiar la configuración limpia los resultados anteriores para evitar mostrar datos desactualizados.

## Plantillas

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

## Formatos de salida

| Formato | Vista | Descarga | Copia |
| --- | --- | --- | --- |
| JSON | Sí | Sí | Sí |
| CSV | No | Sí | No |
| SQL `INSERT` | No | Sí | No |

El SQL generado contiene sentencias `INSERT` descargables. La aplicación no ejecuta SQL ni afirma compatibilidad con múltiples dialectos.

## Interfaz y accesibilidad

La interfaz incluye:

- estado vacío antes de generar o después de limpiar resultados;
- diseño adaptable a móvil y escritorio;
- modo oscuro persistente;
- controles HTML nativos con etiquetas;
- mensajes de validación y de resultado de copia;
- navegación mediante teclado y foco visible;
- regiones desplazables para contenidos amplios.

Estas medidas representan accesibilidad básica. No constituyen una auditoría WCAG completa ni una prueba formal completa con lector de pantalla.

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

### Evaluadas, no instaladas

- PapaParse: se evaluó para CSV, pero la serialización se resolvió con una utilidad propia.
- FileSaver: se evaluó para descargas, pero se utilizó `Blob`, `URL.createObjectURL` y un enlace temporal.

No se instalaron PapaParse ni FileSaver.

## Instalación

### Requisitos previos

- Node.js
- npm
- Git

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

```bash
npm run dev
```

En Windows puede utilizarse:

```powershell
npm.cmd run dev
```

## Scripts disponibles

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Inicia el servidor de desarrollo de Vite |
| `npm run build` | Genera la compilación de producción |
| `npm run lint` | Ejecuta ESLint sobre el proyecto |
| `npm run preview` | Previsualiza la compilación de producción |

## Documentación

- [Sesión 1: análisis y diseño](docs/sesion-1-analisis-diseno.md)
- [Investigación de herramientas similares](docs/investigacion-herramientas.md)
- [Wireframe aprobado](docs/wireframe.md)
- [Arquitectura orientativa de componentes](docs/componentes.md)
- [Registro de prompts](docs/registro-prompts.md)
- [Cierre de la Sesión 2](docs/sesion-2-cierre.md)
- [Cierre de la Sesión 3](docs/sesion-3-cierre.md)

## Roadmap

### Sesión 1 — Análisis y diseño

**Estado: completada**

Incluyó la investigación, definición del problema y usuarios, plantillas, wireframe, arquitectura orientativa y preparación técnica del proyecto.

### Sesión 2 — Desarrollo del núcleo

**Estado: completada**

Incluyó configuración, validaciones, generación con Faker, Tabla, vista JSON y navegación básica mediante teclado.

### Sesión 3 — Exportación y revisión de interfaz

**Estado: completada**

Incluyó las descargas JSON, CSV y SQL `INSERT`, copia JSON, corrección de la vista inicial, estado vacío, responsive, accesibilidad básica y modo oscuro persistente.

Commit funcional final:

```text
b32b058 feat: add dark mode
b32b058daccbe8f97314029fa65814ddd0e7c07a
```

### Sesión 4 — Revisión y entrega final

**Estado: pendiente**

Prevé revisión de errores, optimización, limpieza, pruebas finales, capturas, documentación de entrega y presentación.

## Uso de IA

La IA se utilizó como apoyo para organizar requisitos, preparar tareas técnicas, revisar cambios y estructurar documentación. Las decisiones, los cambios del repositorio y las pruebas fueron revisados por el autor.

Las consultas relevantes están resumidas en el [registro de prompts](docs/registro-prompts.md).

## Contexto académico

- Proyecto: NTEC ToolBox · DevData Generator
- Asignatura: Desarrollo Web FullStack
- Profesor: Óscar Burgos
- Autor: Jaime Martret
- Fecha prevista de entrega final: 31 de julio de 2026

## Extras opcionales

Fuera del alcance obligatorio quedan ideas como:

- seed y relaciones entre entidades;
- Excel e importación de esquemas;
- API REST y estructuras anidadas;
- creación libre de plantillas;
- historial, edición avanzada y filtros.

Estos extras no están implementados y no se presentan como requisitos de la Sesión 3.
