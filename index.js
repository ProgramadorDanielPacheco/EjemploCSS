/* Usamos 'DOMContentLoaded' como una buena práctica.
  Esto asegura que nuestro script JS no se ejecute hasta que
  todo el documento HTML esté completamente cargado y listo.
*/
document.addEventListener("DOMContentLoaded", function() {

    // --- 1. LÓGICA PARA VALIDAR EL FORMULARIO DE CONTACTO ---

    // Obtenemos los elementos del DOM por su ID
    const botonEnviar = document.getElementById("btn-enviar");
    const textArea = document.getElementById("text_area");
    const mensajeError = document.getElementById("mensaje-error");

    // Añadimos un "escuchador de eventos" al botón
    botonEnviar.addEventListener("click", function() {

        // Obtenemos el valor del textarea y usamos .trim()
        // para quitar espacios en blanco al inicio o al final.
        const mensaje = textArea.value.trim();

        // Comprobamos si el mensaje está vacío
        if (mensaje === "") {
            // Si está vacío, mostramos el mensaje de error
            mensajeError.style.display = "block"; // Cambia de 'none' a 'block'
        } else {
            // Si NO está vacío, ocultamos el error (por si estaba visible)
            mensajeError.style.display = "none";

            // ¡Opcional! Mostramos un mensaje de éxito
            alert("¡Mensaje enviado con éxito!");

            // Limpiamos el textarea después de enviar
            textArea.value = "";
        }
    });


    // --- 2. LÓGICA PARA LOS BOTONES "VER MÁS" DE PROYECTOS ---

    // Obtenemos TODOS los botones que tengan la clase .btn-ver-mas
    // Esto nos da una lista (un NodeList)
    const botonesVerMas = document.querySelectorAll(".btn-ver-mas");

    // Recorremos la lista de botones, uno por uno
    botonesVerMas.forEach(function(boton) {

        // A CADA botón, le añadimos su propio "escuchador de eventos"
        boton.addEventListener("click", function() {

            // Buscamos el 'div' padre del botón (el .proyecto-item)
            const proyectoItem = boton.parentElement;

            // Desde el padre, buscamos la descripción (el .proyecto-descripcion)
            const descripcion = proyectoItem.querySelector(".proyecto-descripcion");

            // Comprobamos si la descripción está oculta (display: 'none')
            if (descripcion.style.display === "none") {
                // Si está oculta, la mostramos
                descripcion.style.display = "block";
                // Y cambiamos el texto del botón
                boton.textContent = "Ver menos";
            } else {
                // Si está visible (display: 'block'), la ocultamos
                descripcion.style.display = "none";
                // Y regresamos el texto original del botón
                boton.textContent = "Ver más";
            }
        });
    });

});
