# EJERCICIOS EVENTOS

1.- A partir de la página web proporcionada, completar el código JavaScript para que:


a. Cuando se pinche sobre el primer enlace, se oculte su sección relacionada.

b. Cuando se vuelva a pinchar sobre el mismo enlace, se muestre otra vez esa sección de contenidos.            

c. Completar el resto de enlaces de la página para que su comportamiento sea idéntico al del primer enlace.

d. Cuando una sección se oculte, debe cambiar el mensaje del enlace asociado para indicar que al pulsarlo se volverán a mostrar los contenidos.

 

<html>

<head>

    <meta charset="UTF-8">

    <title>Ejercicio 1</title>

    <script type="text/javascript">



    </script>

</head>

<body>

    <p id="contenidos_1">a</p>

    <a id="enlace_1" href="#">Ocultar contenidos</a>

    <br />

    <p id="contenidos_2">b</p>

    <a id="enlace_2" href="#">Ocultar contenidos</a>

    <br />

    <p id="contenidos_3">c</p>

    <a id="enlace_3" href="#">Ocultar contenidos</a>

</body>

</html>



2.- Crea una página html que contenga una imagen. Mediante el uso de eventos debes conseguir que mientras se pulse sobre la imagen, esta cambiará por otra imagen. Al dejar de hacer click volverá a verse la imagen original.

Usa los siguientes eventos:

·         mousedown se produce cuando el usuario presiona el botón del mouse.

·         mouseup se produce cuando el usuario suelta el botón del mouse.



3.- Dada la siguiente página html debes conseguir mediante JavaScript:

·       Al hacer click sobre el div título, el fondo del div debe cambiar de color.

·       Cuando se mueve el ratón sobre cualquier parte de la página, el color de fondo de la página cambia de color.

·       Cuando se pasa el ratón sobre una imagen se muestra su URL en el DIV.

·       Cuando se pulsa sobre una imagen se muestran las coordenadas del puntero del ratón respecto de la ventana del navegador con un alert.

 

<html>

    <head> </head>

    <body>

        <div id="titulo">Prueba de eventos</div>

        <div>

            <img src="imagen1.jpg" />

        </div>

        <div>

            <img src="imagen2.jpg"/>

        </div>

    </body>

</html>



4.- Crea una caja de texto donde quepan 100 caracteres, y un script que a medida que escribamos nos informe del número de caracteres que quedan libres.

