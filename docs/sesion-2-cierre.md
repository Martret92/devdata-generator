# Cierre de la Sesión 2

## NTEC ToolBox · DevData Generator

## 1. Resumen de la Sesión 2

Durante la Sesión 2 se desarrolló el núcleo funcional de DevData Generator.

La aplicación permite:

* elegir entre Usuarios, Alumnos y Productos;
* indicar una cantidad entre 1 y 100 registros;
* seleccionar los campos;
* generar datos ficticios con Faker;
* revisar todos los resultados en una tabla;
* consultar los mismos registros en formato JSON;
* alternar entre ambas vistas;
* corregir configuraciones no válidas antes de generar.

También se trabajó la adaptación responsive, la navegación mediante teclado y el foco visible.

La sesión terminó validada técnicamente, sin errores bloqueantes ni necesidad de refactorizar antes de comenzar la Sesión 3.

---

## 2. Funcionalidades implementadas

### Plantillas y campos

Se creó la configuración estática de las tres plantillas en:

```text
src/data/templates.js
```

Este archivo contiene:

* ID y etiqueta de cada plantilla;
* ID y etiqueta de cada campo;
* orden de los campos.

No contiene tipos de datos, propiedades de selección ni funciones generadoras.

Al iniciar la aplicación y al cambiar de plantilla, `App.jsx` selecciona todos los campos de la plantilla mediante sus IDs.

### Configuración del generador

El usuario puede:

* seleccionar una plantilla;
* introducir una cantidad;
* activar o desactivar campos;
* generar mediante el botón;
* enviar el formulario con `Enter`.

La cantidad válida está limitada a valores enteros entre 1 y 100.

### Validaciones

Se controlan:

* cantidad vacía;
* valores decimales;
* cero;
* números negativos;
* cantidades superiores a 100;
* ausencia de campos seleccionados.

Los errores aparecen después del primer intento de generación y se actualizan al corregir la configuración.

### Generación con Faker

La integración de `@faker-js/faker` y las funciones generadoras se encuentran en:

```text
src/utils/generateData.js
```

Esta utilidad recibe la plantilla, los campos seleccionados y la cantidad. Como resultado crea objetos que incluyen únicamente los campos activos.

### Vista previa

Los datos generados pueden consultarse mediante:

* una tabla completa;
* una vista JSON completa.

La Tabla es la vista inicial. La selección entre Tabla y JSON se gestiona dentro de `GenerationResult`.

### Diseño y navegación

La interfaz:

* se adapta a distintos tamaños de pantalla;
* permite recorrer los controles con teclado;
* muestra foco visible;
* utiliza etiquetas y atributos ARIA en los elementos correspondientes.

No se realizaron pruebas formales con lectores de pantalla.

---

## 3. Arquitectura y decisiones técnicas

### Componentes principales

Durante la sesión se crearon:

```text
Header
GeneratorPanel
TemplateSelector
QuantitySelector
FieldSelector
ValidationMessage
GenerateButton
GenerationResult
PreviewTable
JsonPreview
```

### Archivos principales

```text
src/data/templates.js
src/utils/generateData.js
src/App.jsx
src/App.css
```

### Responsabilidades

#### `src/data/templates.js`

Define la estructura visible de las plantillas y sus campos.

Ejemplo conceptual:

```js
{
  id: 'usuarios',
  label: 'Usuarios',
  fields: [
    { id: 'nombre', label: 'Nombre' }
  ]
}
```

#### `src/utils/generateData.js`

Contiene:

* integración con Faker;
* funciones generadoras;
* correspondencia entre plantillas, campos y valores;
* construcción selectiva de los registros.

#### `src/App.jsx`

Gestiona:

* plantilla activa;
* IDs de campos seleccionados;
* cantidad;
* datos generados;
* intento de generación;
* validaciones;
* limpieza de resultados al modificar la configuración.

#### `GenerationResult`

Mantiene localmente la vista activa:

```text
table
json
```

Este estado no se trasladó a `App` porque solo afecta a cómo se muestran los resultados.

### Decisiones adoptadas

* máximo de 100 registros;
* todos los campos seleccionados inicialmente;
* todos los campos de la nueva plantilla seleccionados al cambiarla;
* estados principales dentro de `App.jsx`;
* un único estado `hasAttemptedGenerate`;
* validaciones calculadas desde la configuración actual;
* generación separada en `generateData.js`;
* claves de salida en `snake_case`;
* fechas en formato `YYYY-MM-DD`;
* Tabla como vista inicial;
* sin Context, reducers ni hooks personalizados;
* limpieza de resultados cuando cambia una configuración que afecta a los datos.

La tabla, el JSON y las futuras exportaciones partirán del mismo conjunto generado.

---

## 4. Pruebas realizadas

| Área                 | Comprobaciones                                                            |
| -------------------- | ------------------------------------------------------------------------- |
| Cantidad             | Vacía, decimal, cero, negativos, superior a 100, valores 1, 10 y 100      |
| Campos               | Ningún campo, un campo, todos los campos y ausencia de campos desmarcados |
| Corrección           | Actualización progresiva de los errores al corregir los valores           |
| Plantillas           | Usuarios, Alumnos y Productos                                             |
| Datos                | Fechas, rangos, UUID, IDs, precios, stock y booleanos                     |
| Generación           | Regeneración y sustitución de resultados anteriores                       |
| Configuración        | Limpieza de resultados al cambiar plantilla, cantidad o campos            |
| Vistas               | Tabla inicial, cambio a JSON y regreso a Tabla                            |
| Teclado              | Envío con Enter, recorrido de controles y botones de vista                |
| Responsive           | Revisión a 390 px y 1280 px                                               |
| Accesibilidad básica | Etiquetas, atributos ARIA y foco visible                                  |
| Navegador            | Consola sin errores                                                       |
| Proyecto             | `npm run lint` y `npm run build` correctos                                |

Las pruebas confirmaron que los campos desmarcados no aparecen en los objetos generados ni en sus vistas.

---

## 5. Incidencias conocidas y mejoras aplazadas

La auditoría final concluyó:

* sin bloqueantes;
* sin correcciones recomendadas;
* sin necesidad de refactor previo a la Sesión 3.

### Advertencia conocida

El build muestra una advertencia relacionada con el tamaño del bundle que incluye Faker.

No bloquea:

* la compilación;
* la ejecución;
* la generación;
* el comienzo de la siguiente sesión.

### Mejoras opcionales

Se revisaron, pero no se aplicaron:

* centralizar el límite de 100 en una constante compartida;
* reducir la repetición de campos comunes entre Usuarios y Alumnos;
* reiniciar automáticamente la vista activa a Tabla cuando se limpian los resultados;
* aplicar code splitting a Faker.

Estas mejoras pueden valorarse más adelante, pero no son necesarias para completar el MVP obligatorio.

---

## 6. Preparación para la Sesión 3

La aplicación dispone ya de la base necesaria para implementar las exportaciones:

* plantillas definidas;
* selección de campos;
* cantidad validada;
* generación de datos ficticios;
* registros centralizados;
* tabla completa;
* JSON completo;
* interfaz responsive;
* controles navegables mediante teclado.

La Sesión 3 podrá centrarse en:

* exportación JSON;
* exportación CSV;
* SQL INSERT;
* descarga de archivos;
* posible copia al portapapeles;
* revisión visual y responsive final;
* accesibilidad;
* mejoras opcionales solo después de completar el alcance obligatorio.

No es necesario introducir antes:

* Context;
* reducers;
* hooks personalizados;
* una nueva arquitectura;
* una segunda estructura de datos para las exportaciones;
* una optimización previa de Faker.

---

## 7. Estado final del repositorio

```text
Repositorio: https://github.com/Martret92/devdata-generator
Rama: main
Commit: f570da8 feat: add full JSON preview
Hash: f570da8754a2e0412d890a0d1a518c495be1ae35
```

Estado al cerrar la sesión:

* sincronizado con `origin/main`;
* working tree limpio;
* lint correcto;
* build correcto.

La Sesión 2 queda completada y el proyecto está preparado para iniciar la Sesión 3.
