# Investigación de herramientas similares

## 1. Objetivo

Antes de diseñar DevData Generator se analizaron tres referencias:

- Mockaroo;
- JSON Generator;
- Faker.js Playground.

La investigación no busca copiar literalmente sus interfaces. Su objetivo es identificar:

- patrones útiles;
- formas de organizar la configuración;
- flujos de generación;
- sistemas de vista previa;
- opciones de exportación;
- problemas que conviene evitar.

## 2. Mockaroo

### 2.1. Finalidad

Mockaroo es una herramienta web para generar datos ficticios realistas destinados a pruebas y prototipos.

Permite definir un esquema mediante campos, elegir una cantidad y generar datos en distintos formatos. Su página principal anuncia generación en CSV, JSON, SQL y Excel, con hasta 1.000 filas en su modalidad gratuita.

### 2.2. Interfaz

La interfaz se organiza alrededor de una lista de campos.

Cada fila contiene principalmente:

- nombre del campo;
- tipo de dato;
- opciones;
- porcentaje de valores vacíos;
- controles de edición.

También aparecen controles para:

- añadir campos;
- indicar el número de filas;
- elegir el formato;
- previsualizar;
- generar;
- guardar el esquema.

El esquema es el elemento central de la pantalla.

### 2.3. Flujo de uso

El flujo básico es:

1. Crear o abrir un esquema.
2. Definir los campos.
3. Elegir un tipo de dato para cada campo.
4. Configurar opciones.
5. Indicar la cantidad de filas.
6. Elegir el formato.
7. Previsualizar.
8. Generar o descargar.

### 2.4. Configuración de campos

Cada campo puede configurarse de forma independiente.

Mockaroo dispone de numerosos tipos de datos y también de opciones avanzadas:

- fórmulas;
- plantillas;
- escenarios condicionales;
- datasets personalizados;
- campos relacionados;
- porcentajes de valores vacíos.

Estas posibilidades ofrecen mucha flexibilidad, pero superan el alcance de la primera versión de DevData Generator.

### 2.5. Generación

El usuario genera los datos a partir del esquema configurado y de la cantidad de filas solicitada.

La herramienta puede utilizarse sin programar, lo que facilita su uso para personas que necesitan datos, pero no quieren integrar una librería.

### 2.6. Vista previa

Mockaroo incluye una acción de vista previa antes de realizar la descarga completa.

Esto permite comprobar:

- nombres de los campos;
- variedad de los valores;
- tipos;
- formato;
- posibles errores de configuración.

### 2.7. Exportación

Entre sus formatos principales se encuentran:

- CSV;
- JSON;
- SQL;
- Excel.

También dispone de capacidades avanzadas relacionadas con APIs y automatización, que no son necesarias para el MVP del proyecto.

### 2.8. Ventajas

- Flujo visual claro.
- No requiere programación.
- Gran variedad de tipos.
- Configuración independiente por campo.
- Vista previa antes de descargar.
- Varios formatos desde un mismo esquema.
- Posibilidad de guardar y reutilizar esquemas.
- Relación directa entre configuración y resultado.

### 2.9. Limitaciones

- Puede resultar abrumador para principiantes.
- Muestra una gran cantidad de opciones.
- Algunas funciones exceden las necesidades de una práctica inicial.
- El usuario debe comprender cómo diseñar su esquema.
- Su interfaz concentra muchos controles.
- Algunas capacidades dependen del plan.
- Puede favorecer un alcance demasiado grande si se toma como referencia completa.

### 2.10. Aprendizajes aplicables

DevData Generator puede adoptar:

- un flujo de configuración, generación, vista previa y exportación;
- una lista visible de campos;
- una cantidad configurable;
- una vista previa previa a la descarga;
- varios formatos a partir de los mismos datos.

No debe adoptar inicialmente:

- fórmulas;
- escenarios;
- relaciones;
- datasets personalizados;
- APIs simuladas;
- decenas de tipos configurables.

## 3. JSON Generator

### 3.1. Finalidad

JSON Generator permite escribir una plantilla basada en un objeto JavaScript y convertirla en uno o varios registros JSON con valores aleatorios.

La herramienta busca facilitar la creación de datos JSON sin repetir manualmente el mismo objeto.

### 3.2. Interfaz

La interfaz se organiza principalmente en dos áreas:

- editor de la plantilla;
- resultado generado.

El usuario escribe la estructura en un editor y obtiene el JSON en el área de salida.

También dispone de acciones para:

- generar;
- restablecer;
- copiar el JSON;
- descargarlo;
- cambiar la indentación.

### 3.3. Flujo de uso

El flujo general es:

1. Escribir una plantilla válida.
2. Añadir claves y etiquetas de generación.
3. Pulsar Generar.
4. Revisar el JSON.
5. Elegir la indentación.
6. Copiar o descargar el resultado.

### 3.4. Configuración de campos

Los campos se crean escribiendo las propiedades del objeto.

Los valores pueden contener etiquetas para generar, entre otros:

- números;
- decimales;
- booleanos;
- fechas;
- identificadores;
- nombres;
- apellidos;
- emails;
- teléfonos;
- ciudades;
- texto.

También permite funciones personalizadas y referencias a valores previamente generados.

### 3.5. Generación

La herramienta clona la estructura de la plantilla y sustituye sus etiquetas por valores aleatorios.

Este sistema ofrece control sobre la estructura, pero exige conocer:

- objetos JavaScript;
- sintaxis;
- claves y valores;
- etiquetas de la herramienta.

### 3.6. Vista previa

La salida se presenta directamente como JSON.

Resulta útil para desarrolladores que necesitan comprobar la estructura exacta, pero es menos accesible para quien prefiera una tabla.

### 3.7. Exportación

Su salida principal es JSON.

Permite:

- copiar al portapapeles;
- obtener una URL del archivo;
- descargar el archivo JSON;
- elegir la indentación.

No está centrado en ofrecer CSV y SQL desde la misma configuración.

### 3.8. Ventajas

- Control preciso de la estructura.
- Relación inmediata entre plantilla y resultado.
- Soporta objetos y estructuras personalizadas.
- Adecuado para simular respuestas de APIs.
- Vista de código clara.
- Permite copiar o descargar.
- Facilita producir varios objetos a partir de una sola plantilla.

### 3.9. Limitaciones

- Requiere escribir código o sintaxis específica.
- Un error de sintaxis puede impedir la generación.
- No ofrece como flujo principal una selección visual de campos.
- La tabla no ocupa un papel central.
- Se orienta principalmente a JSON.
- Es menos accesible para usuarios principiantes.
- Puede introducir más complejidad de la necesaria para el MVP.

### 3.10. Aprendizajes aplicables

DevData Generator puede adoptar:

- una vista de código legible;
- indentación del JSON;
- una representación clara de claves y valores;
- la posibilidad futura de copiar el resultado;
- sincronización entre los datos visibles y el contenido exportado.

No debe obligar al usuario a:

- escribir objetos;
- aprender etiquetas;
- escribir funciones;
- corregir errores de sintaxis.

## 4. Faker.js Playground

### 4.1. Aclaración

El repositorio oficial `faker-js/playground` no es una aplicación visual equivalente a Mockaroo.

Es un proyecto técnico preparado para comprobar la integración de Faker en diferentes entornos, entre ellos:

- navegador;
- CommonJS;
- ES Modules;
- JavaScript;
- TypeScript;
- Vite;
- Webpack.

Por tanto, su utilidad para esta investigación es principalmente técnica.

### 4.2. Finalidad

Faker.js es una librería para generar datos ficticios desde JavaScript o TypeScript.

Puede utilizarse para producir valores relacionados con:

- personas;
- localizaciones;
- fechas;
- comercio;
- números;
- identificadores;
- texto;
- internet.

El Playground permite probar que la librería funciona en diferentes configuraciones y herramientas de construcción.

### 4.3. Interfaz

No existe una única interfaz visual final.

El proyecto se organiza como varios ejemplos técnicos que contienen:

- archivos de código;
- dependencias;
- configuraciones;
- comandos de ejecución;
- resultados mostrados en navegador, consola o pruebas.

### 4.4. Flujo de uso

El flujo habitual con Faker es:

1. Instalar `@faker-js/faker`.
2. Importar la librería.
3. Elegir métodos de generación.
4. Definir la estructura de cada registro.
5. Repetir la generación.
6. utilizar los objetos resultantes.
7. transformar o exportar mediante código propio.

### 4.5. Configuración de campos

Los campos se definen programando las propiedades del objeto.

Cada propiedad se asocia a un método de Faker.

Conceptualmente:

```js
{
  nombre: generadorDeNombre(),
  email: generadorDeEmail(),
  ciudad: generadorDeCiudad()
}
```
La selección visual de campos no forma parte de Faker. Debe implementarse en la aplicación que utiliza la librería.

### 4.6. Generación

Faker devuelve valores al ejecutar el código.

La aplicación decide:

* cuántos registros crear;
* qué campos incluir;
* cómo relacionarlos;
* cómo mostrarlos;
* cómo exportarlos.

### 4.7. Vista previa

Faker no impone una vista previa concreta.

Los datos pueden mostrarse en:

* consola;
* tabla HTML;
* interfaz React;
* archivo;
* respuesta simulada;
* prueba automatizada.

DevData Generator deberá construir su propia tabla y su propia vista de código.

### 4.8. Exportación

Faker genera valores y objetos, pero no resuelve por sí sola toda la exportación.

La aplicación deberá transformar `generatedData` a:

* JSON;
* CSV;
* SQL INSERT.

### 4.9. Ventajas

* Integración directa con JavaScript.
* Adecuado para React y Vite.
* Amplia variedad de métodos.
* Puede ejecutarse en el navegador.
* No requiere backend.
* Permite controlar completamente la estructura.
* Separa el motor de datos de la interfaz.
* Facilita ampliar plantillas de forma progresiva.

### 4.10. Limitaciones

* Requiere programación.
* No proporciona la interfaz.
* No proporciona por sí sola la tabla.
* No implementa todos los formatos de descarga.
* La selección de campos debe desarrollarse.
* Su gran catálogo puede aumentar innecesariamente el alcance.
* Es necesario decidir qué método corresponde a cada campo.

### 4.11. Aprendizajes aplicables

DevData Generator puede:

* usar Faker como motor interno;
* definir las plantillas en una estructura propia;
* asociar cada campo a un generador;
* mantener la generación separada de la exportación;
* ocultar la complejidad técnica al usuario;
* empezar con un conjunto reducido de métodos.

Faker no debe utilizarse como justificación para añadir durante el MVP todos sus tipos o módulos.

## 5. Comparación general

| Aspecto                    | Mockaroo                        | JSON Generator                  | Faker.js Playground        |
| -------------------------- | ------------------------------- | ------------------------------- | -------------------------- |
| Tipo                       | Aplicación visual               | Herramienta basada en plantilla | Proyecto técnico           |
| Usuario principal          | Usuario técnico o funcional     | Desarrollador                   | Desarrollador              |
| Configuración              | Controles visuales              | Código o plantilla              | Código                     |
| Selección de campos        | Visual                          | Manual en la plantilla          | Programada                 |
| Vista tabular              | Sí o cercana al flujo principal | No es la principal              | Depende de la aplicación   |
| Vista de código            | Secundaria según formato        | Principal                       | Depende de la aplicación   |
| JSON                       | Sí                              | Principal                       | Mediante serialización     |
| CSV                        | Sí                              | No es su finalidad principal    | Debe implementarse         |
| SQL                        | Sí                              | No es su finalidad principal    | Debe implementarse         |
| Curva de aprendizaje       | Media                           | Media-alta                      | Alta para no programadores |
| Papel en DevData Generator | Referencia funcional            | Referencia de código            | Motor interno previsto     |

## 6. Conclusión para DevData Generator

La solución debe combinar aprendizajes de las tres referencias sin copiar ninguna literalmente.

### De Mockaroo

Se adopta conceptualmente:

* configuración visual;
* lista de campos;
* cantidad;
* vista previa;
* varios formatos;
* flujo lineal.

### De JSON Generator

Se adopta conceptualmente:

* vista de código;
* estructura legible;
* representación fiel de claves y valores;
* posibilidad futura de copiar.

### De Faker.js

Se adopta:

* motor interno de generación;
* integración con JavaScript;
* separación entre generación, presentación y exportación.

### Decisiones resultantes

DevData Generator tendrá:

1. Una única pantalla principal.
2. Plantillas preparadas.
3. Selección visual de campos.
4. Selector de cantidad.
5. Botón explícito para generar.
6. Estado inicial explicativo.
7. Vista en tabla.
8. Vista en código.
9. Exportación JSON, CSV y SQL.
10. Validaciones cercanas a los controles.

No incluirá inicialmente:

* fórmulas;
* relaciones;
* seed configurable;
* Excel;
* importación;
* APIs simuladas;
* editor de plantillas;
* objetos anidados configurables.

## 7. Fuentes consultadas

Consulta realizada el 12 de julio de 2026.

* [Mockaroo](https://www.mockaroo.com/)
* [Ayuda de Mockaroo](https://www.mockaroo.com/help)
* [JSON Generator](https://json-generator.com/)
* [Repositorio oficial Faker.js Playground](https://github.com/faker-js/playground)
* [Documentación oficial de Faker.js](https://fakerjs.dev/guide/usage.html)

Las características descritas se limitan a la información pública disponible en estas fuentes durante la fecha de consulta.
