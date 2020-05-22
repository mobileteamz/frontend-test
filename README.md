Exámen finalizado. Validación por campo, suma total de montos en tiempo real, orden en archivos y carpetas, arreglo de imperfecciones en UI.

demo: https://sleepy-nightingale-b3e31b.netlify.app/


# Project requirement

### Introduccion
Este es el test de frontend. La idea es que demuestres todos tus conocimientos en desarollo y que idealmente le permita tanto a otros colegas como a clientes conocer tus habilidades no solo como programador que escribe código, sino como desarrollador que resuelve problemas.

### Diseño de UI
La UI a implementar deberia reproducir el siguiente diseño: http://www.landhsoft.com/UI-test.png

### Stack
La idea es que este challenge se resuelva usando React / JavaScript / HTML / CSS.

### Implementación

Implementar la siguiente ventana (debería ser un popup que se levanta cuando se abre el sitio).
* 'Select the school' debería permitir al usuario seleccionar una escuela dentro de una lista del 10 escuelas hardcodeadads.
* Admision type debería ser un combo con 4 opciones hardcodeadas.
* La implementación debería chequear que el usuario ingrese un monto en todos los campos (Institution, Government, etc). En caso de no ingresar mostrar mensaje de error debajo del campo de input de monto.
* Si el usuario chequea el campo 'Yes, it's renewable' se debería computar por 4 (la duración de la carrera) ese monto.
* Total Grants & Scholarshipts debería presenter la suma de los campos anteriores atendiendo el caso en que sea renovable

### Deseables
* Uso de gitflow
* Uso de UnitTest, Integration Test o algún tipo de test que ayude a garantizar buena calidad del código
* Documentación del código (buenos comentarios en casos que sirvan)


# Implementation

### Available Scripts

In the project directory, you can run:

#### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

#### `yarn test`

Launches the test runner in the interactive watch mode.<br />
