# Informe Práctica 9

## Badges

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=ULL-ESIT-INF-DSI-2122_ull-esit-inf-dsi-21-22-prct09-filesystem-notes-app-JoseOrlandoNinaOrellana&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=ULL-ESIT-INF-DSI-2122_ull-esit-inf-dsi-21-22-prct09-filesystem-notes-app-JoseOrlandoNinaOrellana)

[![Coverage Status](https://coveralls.io/repos/github/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct09-filesystem-notes-app-JoseOrlandoNinaOrellana/badge.svg?branch=master)](https://coveralls.io/github/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct09-filesystem-notes-app-JoseOrlandoNinaOrellana?branch=master)

## Clase Note

La clase `Note` tiene como atributos un `title`, un `body` y un `color`. Este último se usará para mostrar la nota en dicho color. Todos los atributos son públicos.

## Clase NoteManager

La clase `NoteManager` se encargará de gestionar las notas de los usuarios añadiendo, borrando, editando notas, etc.

La función `createFile` crea un json en la carpet /notes con el nombre del usuario. Crea con `writeFilfe` el fichero y luego con `writeFileSync` inicializamos el vector de notas poniendo un corchete.

La función `exists` tiene como parámetros el nombre del ususario y el título de la nota. Esta función comprueba si existe una nota. Primero comprueba si la carpeta existe, si no existe crea un json y devuelve un `false`. En caso de que exista el json lee con la función `read` el fichero y lo almacena en un array de notas. Con un `for` recorremos todo el vector comprobando si existe una nota con el título indicado, en el caso de que exista devolvemos un true, en caso contrario un false.

La función `read` recibe como parámetro el nombre del usurio. La función se encarga de leer las notas de un json. Usa `readFileSync` para leer el contenido del fichero y con un `parse` lo convertimos a un array de objetos de tipo `Note`.

La función `write` recibe como parámetro el nombre del usuario y un objeto de tipo `Note`. La función escribe una nota en el fichero json del usuario. Primero comprueba si existe otra nota con el mismo título con la función `exists`, en caso de exista devulve un mensaje de error. En caso de no exista, primero lee el contenido del fichero y hace un `push` metiendo la nueva nota y por último se escribe el array en el fichero.

La función `listNotes` recibe como parámetro  el nombre del usuario. La función se encarga de listar los títulos de las notas del usuario. Se lee el contenido del json con la función `read` y se almacena en un array. Luego se recorre todo el array con un `forEach` guardando en la varible `output` los títulos con el color de la nota usando la función `putColor`.

La función `readNote` recibe como parámetro el nombre del usuario y el título de la nota. La función devuelve un string el contenido de la nota. Primero comprobamos si la nota existe, en el caso de que no exista devolvemos un mensaje de error. En el caso de que exista leemos el contenido del json con `read` y con el `forEach` recorremos el array buscando del título de la nota, cuando la encontremos guardaremos el contenido en la variable `output`y lo devolveremos.

La función `removeNote` recibe como parámetro el nombre del usuario y el título de la nota. La función se encarga de borrar un nota. Primero comprueba si la nota existe, si no existe devuelve un mensaje de error. Si existe leemos el json con `read` y con `findIndex` buscamos el índice de la nota en el array. Cuando hayamos encontrado el índice usaremos `splice` para eliminar la nota. Por último actulizaremos el contenido del fichero.