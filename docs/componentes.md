# Arquitectura orientativa de componentes

## 1. Propósito

Este documento propone cómo dividir la interfaz de DevData Generator en componentes React. El árbol servirá como guía durante el desarrollo, no como una lista de archivos que haya que crear de inmediato.

No obliga a:

- crear todos los componentes desde el primer momento;
- mantener componentes vacíos;
- separar elementos que solo contengan unas pocas líneas;
- utilizar esta estructura sin cambios durante todo el proyecto.

Los componentes se crearán progresivamente cuando exista una responsabilidad real y reutilizable. No deben prepararse componentes vacíos.

## 2. Árbol aprobado

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
## 3. Criterios utilizados

La estructura busca:

* evitar un componente `App` excesivamente grande;
* mantener agrupadas las partes relacionadas;
* separar configuración, resultados y exportación;
* evitar componentes duplicados;
* facilitar pruebas;
* permitir crecimiento progresivo;
* evitar sobrearquitectura.

Se descartó `Sidebar` porque, para este MVP, solo duplicaría el panel de configuración sin aportar otra navegación.

No se crean componentes diferentes como `PreviewJSON`, `PreviewCSV` y `PreviewSQL` mientras una única vista `CodePreview` pueda representar el formato seleccionado.

No se crean tres botones de exportación si un solo `ExportButton` puede adaptarse a `exportFormat`.

## 4. Responsabilidades

### 4.1. `App`

Será el componente coordinador principal.

Responsabilidades previstas:

* mantener el estado compartido;
* proporcionar datos a los componentes;
* recibir eventos de configuración;
* iniciar la generación;
* almacenar los registros generados;
* controlar validaciones generales;
* coordinar vista previa y exportación.

No debería contener todos los detalles visuales de los controles.

### 4.2. `Header`

Responsabilidades previstas:

* mostrar el nombre del proyecto;
* explicar brevemente la finalidad;
* ofrecer una cabecera consistente.

No necesita estado compartido.

Puede comenzar como marcado incluido en `App` y extraerse cuando mejore la legibilidad.

### 4.3. `GeneratorPanel`

Contenedor de la configuración.

Responsabilidades previstas:

* agrupar los selectores;
* agrupar validaciones;
* agrupar el botón Generar;
* mantener una distribución visual coherente;
* recibir estado y callbacks desde `App`.

No debe crear una segunda copia de los datos de configuración.

### 4.4. `TemplateSelector`

Responsabilidades previstas:

* mostrar Usuarios, Alumnos y Productos;
* indicar la plantilla activa;
* comunicar cambios;
* facilitar la carga de los campos correspondientes.

Props orientativas:

```text
value
templates
onChange
error
```

### 4.5. `QuantitySelector`

Responsabilidades previstas:

* mostrar el valor actual;
* permitir introducir una cantidad;
* comunicar los cambios;
* mostrar ayuda o error;
* respetar límites cuando se definan.

Props orientativas:

```text
value
min
max
onChange
error
```

### 4.6. `FieldSelector`

Responsabilidades previstas:

* mostrar los campos de la plantilla;
* indicar cuáles están seleccionados;
* permitir activar o desactivar campos;
* comunicar cambios;
* permitir acciones sencillas si se aprueban.

Props orientativas:

```text
fields
onToggle
onSelectAll
onClear
error
```

No debe contener directamente funciones de Faker.

### 4.7. `ValidationMessage`

Responsabilidades previstas:

* mostrar errores;
* mostrar avisos;
* mantener un estilo coherente;
* mejorar accesibilidad mediante mensajes identificables.

Puede utilizarse para:

* cantidad;
* campos;
* generación;
* exportación.

Este componente solo debe extraerse si evita repetición. Si inicialmente existe un solo mensaje, puede permanecer integrado en el panel.

### 4.8. `GenerateButton`

Responsabilidades previstas:

* iniciar la generación;
* reflejar `loading`;
* impedir acciones inválidas;
* cambiar su etiqueta cuando sea necesario.

Props orientativas:

```text
onClick
disabled
loading
```

No debe contener toda la lógica generadora. Debe invocar la función recibida.

### 4.9. `PreviewPanel`

Contenedor de los resultados.

Responsabilidades previstas:

* mostrar `EmptyState` si no hay datos;
* mostrar las vistas si existen datos;
* contener el selector de vista;
* mantener tabla y código organizados.

### 4.10. `PreviewTabs`

Responsabilidades previstas:

* alternar entre tabla y código;
* indicar la vista activa;
* no modificar `generatedData`.

Su estado puede ser local porque solo afecta a la representación visual.

### 4.11. `EmptyState`

Responsabilidades previstas:

* explicar cómo iniciar el flujo;
* evitar una zona vacía;
* informar cuando todavía no existen datos.

No necesita estado propio.

### 4.12. `PreviewTable`

Responsabilidades previstas:

* obtener columnas a partir de los campos;
* recorrer `generatedData`;
* mostrar filas;
* representar valores booleanos, numéricos y fechas;
* gestionar una tabla ancha de forma legible.

Props orientativas:

```text
data
fields
```

No debe generar ni modificar datos.

### 4.13. `CodePreview`

Responsabilidades previstas:

* recibir datos ya generados;
* convertirlos a una representación visible;
* mostrar indentación;
* adaptarse al formato si finalmente se decide;
* conservar legibilidad.

Props orientativas:

```text
data
format
```

No debería mantener una copia independiente de `generatedData`.

### 4.14. `ExportPanel`

Contenedor de exportación.

Responsabilidades previstas:

* agrupar formato y botón;
* mostrar errores de exportación;
* impedir exportar sin registros;
* mantener la acción separada de la generación.

### 4.15. `ExportFormatSelector`

Responsabilidades previstas:

* mostrar JSON, CSV y SQL INSERT;
* indicar el formato activo;
* comunicar cambios.

Props orientativas:

```text
value
formats
onChange
```

### 4.16. `ExportButton`

Responsabilidades previstas:

* iniciar la exportación;
* adaptar el texto al formato;
* permanecer deshabilitado sin datos;
* comunicar errores si la operación falla.

Props orientativas:

```text
format
disabled
onClick
```

La conversión puede mantenerse inicialmente en una función o utilidad externa cuando sea necesario.

### 4.17. `Footer`

Responsabilidades previstas:

* mostrar identificación mínima;
* incluir autor o contexto académico si se considera apropiado.

No debe aumentar el alcance funcional.

## 5. Componentes que podrán añadirse progresivamente

No deben crearse todavía sin necesidad, pero podrían aparecer durante el desarrollo:

```text
components/
├── FormField
├── CheckboxField
├── ErrorMessage
├── LoadingIndicator
└── CopyButton
```

También podrían añadirse utilidades no visuales:

```text
data/
├── templates.js
└── fieldDefinitions.js

utils/
├── generateData.js
├── exportJson.js
├── exportCsv.js
└── exportSql.js
```

Esta estructura es una posibilidad, no una obligación.

Solo deberá adoptarse cuando:

* exista código real;
* reduzca duplicación;
* mejore la legibilidad;
* pueda probarse con claridad.

## 6. Estados compartidos

### 6.1. `selectedTemplate`

Tipo orientativo:

```js
string
```

Ejemplo:

```js
"usuarios"
```

Afectará a:

* `TemplateSelector`;
* `FieldSelector`;
* generación;
* exportación SQL.

Se recomienda mantenerlo inicialmente en `App`.

### 6.2. `fields`

Tipo orientativo:

```js
array
```

Ejemplo conceptual:

```js
[
  {
    key: "nombre",
    label: "Nombre",
    type: "string",
    selected: true
  }
]
```

Afectará a:

* selector de campos;
* generación;
* columnas de la tabla;
* salida de código;
* exportación.

Se recomienda mantenerlo inicialmente en `App` o derivarlo de la plantilla cuando sea posible.

Debe evitarse almacenar información que pueda calcularse directamente.

### 6.3. `numberRecords`

Tipo orientativo:

```js
number
```

Ejemplo:

```js
10
```

Afectará a:

* selector de cantidad;
* validaciones;
* generación.

### 6.4. `generatedData`

Tipo orientativo:

```js
array
```

Estado inicial:

```js
[]
```

Afectará a:

* estado vacío;
* tabla;
* código;
* exportación.

Será la única fuente de verdad para los registros generados.

### 6.5. `exportFormat`

Tipo orientativo:

```js
string
```

Valores previstos:

```text
json
csv
sql
```

Afectará a:

* selector de formato;
* botón;
* conversión;
* posiblemente CodePreview.

### 6.6. `loading`

Tipo orientativo:

```js
boolean
```

Estado inicial:

```js
false
```

Afectará a:

* botón Generar;
* indicadores;
* bloqueo temporal de controles.

Aunque la generación local pueda ser rápida, se mantiene como estado orientativo y solo deberá implementarse si aporta utilidad real.

### 6.7. `errors`

Tipo orientativo:

```js
object
```

Ejemplo conceptual:

```js
{
  template: "",
  fields: "",
  numberRecords: "",
  export: ""
}
```

Podrá utilizarse para:

* mensajes de validación;
* impedir generación;
* impedir exportación.

La forma final dependerá de la implementación.

## 7. Estados locales

Los estados puramente visuales deben mantenerse cerca del componente que los utiliza.

Ejemplos:

### Vista activa

```js
activePreview = "table"
```

Puede permanecer en `PreviewPanel` o `PreviewTabs`.

### Mensaje temporal de copiado

Si en el futuro se añade copiar:

```js
copied = false
```

Puede permanecer en `CodePreview`.

### Apertura de paneles

Si se añaden secciones plegables:

```js
isOpen = true
```

Debe permanecer local.

No se recomienda elevar estos estados a `App` si no afectan a otros componentes.

## 8. Flujo general de datos

### 8.1. Configuración

```text
App
  ↓ props
TemplateSelector
QuantitySelector
FieldSelector
```

Los componentes reciben valores y comunican cambios mediante callbacks.

```text
Selector
  ↓ evento
App actualiza el estado
```

### 8.2. Generación

```text
GenerateButton
  ↓ onClick
App valida la configuración
  ↓
función de generación
  ↓
generatedData
```

### 8.3. Vista previa

```text
generatedData
  ├── PreviewTable
  └── CodePreview
```

Ambas vistas utilizan la misma fuente.

### 8.4. Exportación

```text
generatedData
+ exportFormat
+ selectedTemplate
  ↓
función de conversión
  ↓
archivo descargable
```

La exportación no debe volver a ejecutar Faker.

## 9. Reglas para evitar duplicación

1. No almacenar una copia de los registros en cada vista.
2. No generar datos dentro de `PreviewTable`.
3. No generar datos dentro de `CodePreview`.
4. No mantener una plantilla diferente en cada selector.
5. No crear un botón distinto por formato si cambia solo la etiqueta.
6. No crear un componente por cada campo.
7. No repetir funciones de descarga.
8. No duplicar validaciones en varios niveles sin necesidad.
9. Derivar valores cuando sea más seguro que almacenarlos.
10. Mantener `generatedData` como fuente única.

## 10. Reglas para evitar sobrearquitectura

* No usar Context inicialmente si `App` puede gestionar el estado.
* No introducir Redux.
* No crear hooks personalizados sin lógica reutilizable.
* No crear servicios para funciones pequeñas.
* No dividir cada elemento HTML en un componente.
* No preparar componentes para extras aplazados.
* No crear carpetas vacías.
* No crear componentes que solo reenvían props sin aportar claridad.
* No diseñar un sistema genérico de formularios antes de completar las tres plantillas.

## 11. Creación progresiva recomendada

### Fase 1

Puede comenzar con:

* `App`;
* definición de plantillas;
* controles básicos.

### Fase 2

Extraer:

* `TemplateSelector`;
* `QuantitySelector`;
* `FieldSelector`;
* `GenerateButton`.

### Fase 3

Añadir:

* `PreviewPanel`;
* `PreviewTable`;
* `CodePreview`;
* `EmptyState`.

### Fase 4

Añadir:

* `ExportPanel`;
* `ExportFormatSelector`;
* `ExportButton`.

### Fase 5

Extraer componentes o utilidades adicionales únicamente si existe repetición.

## 12. Estado real

Al cerrar la Sesión 1:

* el árbol está aprobado como guía;
* no se confirma que los componentes existan todavía;
* la lógica de generación no está implementada;
* la arquitectura podrá ajustarse a partir del código real.
