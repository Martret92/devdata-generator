# Wireframe aprobado

## 1. Estado del documento

Este documento recoge el diseño aprobado para la pantalla principal de DevData Generator. Servirá como guía cuando se construya la interfaz; los controles y las funcionalidades representados todavía no están implementados.

## 2. Objetivo del diseño

La aplicación debe permitir completar el flujo principal desde una única pantalla:

1. Elegir una plantilla.
2. Indicar una cantidad.
3. Seleccionar campos.
4. Generar datos.
5. Revisar los resultados.
6. Elegir un formato.
7. Exportar.

Se busca evitar:

- navegación innecesaria;
- múltiples páginas;
- controles avanzados;
- configuraciones difíciles de comprender;
- sobrecarga visual.

## 3. Wireframe textual

```text
┌──────────────────────────────────────────────────────────────────────────────┐
│ CABECERA                                                                    │
│ DevData Generator                                                          │
│ Genera datos ficticios para pruebas en JSON, CSV y SQL                      │
└──────────────────────────────────────────────────────────────────────────────┘

┌──────────────────────────────┬───────────────────────────────────────────────┐
│ CONFIGURACIÓN                │ RESULTADOS                                    │
│                              │                                               │
│ Plantilla                    │ ┌───────────────────────────────────────────┐ │
│ [ Usuarios              ▼ ]  │ │ VISTA                                   │ │
│                              │ │ [ Tabla ] [ Código ]                    │ │
│ Cantidad de registros        │ └───────────────────────────────────────────┘ │
│ [ 10                    ]    │                                               │
│                              │ ESTADO INICIAL                                │
│ Campos                       │ ┌───────────────────────────────────────────┐ │
│ ☑ Nombre                     │ │ Aún no se han generado datos.             │ │
│ ☑ Apellidos                  │ │ Selecciona una plantilla, la cantidad y   │ │
│ ☑ Email                      │ │ los campos. Después pulsa “Generar”.      │ │
│ ☑ Teléfono                   │ └───────────────────────────────────────────┘ │
│ ☑ Edad                       │                                               │
│ ☑ Ciudad                     │ VISTA DE TABLA — después de generar           │
│ ☑ UUID                       │ ┌───────────────────────────────────────────┐ │
│ ☑ Fecha de alta              │ │ nombre │ apellidos │ email │ ...         │ │
│                              │ ├───────────────────────────────────────────┤ │
│ [Seleccionar todos]          │ │ Laura  │ García    │ ...                 │ │
│ [Limpiar selección]          │ │ Carlos │ Pérez     │ ...                 │ │
│                              │ └───────────────────────────────────────────┘ │
│ VALIDACIONES                 │                                               │
│ ┌──────────────────────────┐ │ VISTA DE CÓDIGO — después de generar          │
│ │ Mensajes de error o      │ │ ┌───────────────────────────────────────────┐ │
│ │ ayuda de configuración   │ │ │ [                                        │ │
│ └──────────────────────────┘ │ │   { "nombre": "Laura", ... }              │ │
│                              │ │ ]                                         │ │
│ [      GENERAR DATOS      ]  │ └───────────────────────────────────────────┘ │
└──────────────────────────────┴───────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────────────────┐
│ EXPORTACIÓN                                                                 │
│ Formato:  (●) JSON   ( ) CSV   ( ) SQL INSERT                               │
│                                                                              │
│ [ Exportar ]                                                                 │
│                                                                              │
│ Sin datos: “Genera al menos un registro antes de exportar.”                  │
└──────────────────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────────────────┐
│ PIE DE PÁGINA                                                               │
│ NTEC ToolBox · DevData Generator                                            │
└──────────────────────────────────────────────────────────────────────────────┘
```
## 4. Explicación de las zonas

### 4.1. Cabecera

Contendrá:

* nombre de la aplicación;
* descripción breve;
* identificación visual básica.

Su objetivo es explicar inmediatamente qué hace la herramienta.

No se prevé inicialmente:

* navegación compleja;
* autenticación;
* menú de usuario;
* múltiples páginas.

### 4.2. Zona de configuración

Contendrá los controles necesarios antes de generar:

* selector de plantilla;
* selector de cantidad;
* selector de campos;
* validaciones;
* botón Generar.

La configuración debe ser comprensible y mantenerse separada de los resultados.

### 4.3. Selector de plantilla

Mostrará:

* Usuarios;
* Alumnos;
* Productos.

Al cambiar la plantilla deberán actualizarse los campos disponibles.

La lista definitiva de campos dependerá de la plantilla seleccionada.

### 4.4. Selector de cantidad

Permitirá indicar cuántos registros deben generarse.

Deberá validar:

* valor obligatorio;
* número entero;
* cantidad mayor que cero;
* límite máximo cuando este se defina.

El cambio de cantidad no debería generar automáticamente datos nuevos.

### 4.5. Selector de campos

Mostrará los campos de la plantilla mediante controles seleccionables.

Permitirá:

* incluir campos;
* excluir campos;
* conocer cuáles están activos.

Se prevén como acciones pequeñas:

* seleccionar todos;
* limpiar selección.

Estas acciones son recomendadas, pero deberán confirmarse durante el desarrollo si afectan al alcance de la sesión.

### 4.6. Zona de validaciones

Se reservará un lugar próximo a los controles y al botón Generar.

Posibles mensajes:

* “Selecciona al menos un campo.”
* “La cantidad debe ser mayor que cero.”
* “Introduce una cantidad válida.”
* “La cantidad supera el máximo permitido.”
* “No hay datos disponibles para exportar.”

Los mensajes deberán aparecer también cerca del control afectado cuando mejore la comprensión.

### 4.7. Botón Generar

La generación será una acción explícita.

El botón podrá:

* deshabilitarse si la configuración no es válida;
* mostrar un estado temporal durante la generación;
* impedir pulsaciones repetidas mientras se procesa.

No se generarán datos automáticamente con cada cambio de configuración.

### 4.8. Zona de resultados

Agrupará:

* estado inicial;
* tabla;
* vista de código;
* controles para alternar la vista.

La tabla y el código representarán el mismo conjunto de datos.

### 4.9. Estado inicial

Antes de generar no debe mostrarse una tabla aparentemente rota ni una salida vacía sin explicación.

Se mostrará un mensaje como:

> Aún no se han generado datos. Selecciona una plantilla, indica una cantidad, elige los campos y pulsa “Generar”.

La exportación permanecerá:

* deshabilitada; o
* acompañada de un mensaje explicativo.

### 4.10. Vista de tabla

Después de generar mostrará:

* columnas derivadas de los campos seleccionados;
* filas derivadas de los registros;
* valores legibles;
* desplazamiento cuando el contenido sea amplio.

La tabla será una representación de `generatedData`, no una segunda generación.

### 4.11. Vista de código

Mostrará el contenido en una estructura legible.

Como mínimo deberá existir una vista JSON.

Queda pendiente confirmar si durante el MVP la vista de código:

* mostrará siempre JSON; o
* se adaptará a JSON, CSV y SQL según el formato elegido.

### 4.12. Zona de exportación

Contendrá:

* selector de formato;
* botón de exportación;
* mensajes de estado o error.

Formatos obligatorios:

* JSON;
* CSV;
* SQL INSERT.

Cambiar el formato no deberá modificar los valores generados.

### 4.13. Pie de página

Tendrá una presencia mínima.

Podrá incluir:

* nombre del proyecto;
* contexto académico;
* autor.

No se añadirán inicialmente enlaces secundarios que distraigan del flujo principal.

## 5. Comportamiento antes de generar

Antes de generar:

* puede aparecer Usuarios como plantilla inicial;
* puede aparecer 10 como cantidad inicial;
* se muestran los campos predeterminados;
* `generatedData` permanece vacío;
* aparece el estado inicial;
* no existe tabla con registros;
* no existe código generado;
* no se permite exportar;
* las validaciones solo aparecen cuando proceda.

Estos valores iniciales son orientativos y deben confirmarse durante la implementación.

## 6. Comportamiento después de generar

Después de generar correctamente:

* se guardan los registros en `generatedData`;
* aparece la tabla;
* puede abrirse la vista de código;
* la exportación queda disponible;
* JSON, CSV y SQL se producen a partir de los mismos registros;
* cambiar de pestaña no genera valores nuevos;
* cambiar el formato no genera valores nuevos.

Cuando se modifique una opción que afecta a la generación deberá evitarse presentar datos antiguos como si correspondieran a la configuración nueva.

Posibles soluciones:

* limpiar los resultados;
* marcar que deben regenerarse;
* mantenerlos con un aviso.

La decisión final corresponde a la implementación.

## 7. Diseño responsive futuro

La adaptación responsive es un objetivo de la Sesión 3 y de la versión final, no una funcionalidad ya implementada.

### Escritorio

Se prevé:

* configuración en una columna;
* resultados en una zona principal;
* exportación debajo.

### Pantallas pequeñas

Se prevé un flujo vertical:

1. cabecera;
2. configuración;
3. validaciones;
4. generar;
5. resultados;
6. exportación;
7. pie.

No se diseñará una experiencia móvil distinta. Se reorganizarán los mismos bloques.

## 8. Decisiones de diseño adoptadas

* Una sola pantalla.
* Flujo lineal.
* Configuración separada de resultados.
* Generación mediante botón.
* Tabla y código a partir de los mismos datos.
* Estado inicial explicativo.
* Validaciones visibles.
* Exportación separada, pero próxima a los resultados.
* Sin navegación compleja.
* Sin copiar literalmente otras herramientas.

## 9. Trabajo posterior

El modo oscuro y la accesibilidad son objetivos oficiales de la Sesión 3. Además, quedan fuera del wireframe inicial estas ideas opcionales:

* seed;
* relaciones;
* Excel;
* XML;
* importación de esquemas;
* editor manual de plantillas;
* creación libre de campos;
* arrastrar y ordenar;
* cuentas de usuario;
* almacenamiento en la nube;
* historial de generaciones;
* proyectos guardados;
* API simulada;
* paginación avanzada;
* edición de celdas;
* filtros de tabla.

## 10. Estado de implementación

Al cerrar la Sesión 1:

* el wireframe está aprobado;
* la interfaz funcional todavía no está implementada;
* no existen aún sus selectores, tabla, código ni exportaciones.
