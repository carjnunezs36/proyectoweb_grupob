
(function () {
    "use strict";

    //Marca el link activo en el navbar según la pagina actual
    function marcarNavActivo() {
        var links = document.querySelectorAll("header nav ul li a");
        var paginaActual = window.location.pathname.split("/").pop() || "index.html";

        links.forEach(function (link) {
            if (link.getAttribute("href") === paginaActual) {
                link.classList.add("activo");
            }
        });
    }

    // Muestra un mensaje de éxito o error en un formulario
    function mostrarMensaje(idElemento, tipo) {
        var el = document.getElementById(idElemento);
        if (!el) return;
        el.style.display = "block";
        el.className = "mensaje " + tipo;
        setTimeout(function () {
            el.style.display = "none";
        }, 4000);
    }

    // Valida que un campo no esté vacío, muestra mensaje de error si falla
    function validarCampo(input, mensajeError) {
        var errorEl = input.parentElement.querySelector(".error-msg");
        if (input.value.trim() === "") {
            if (errorEl) {
                errorEl.textContent = mensajeError;
                errorEl.style.display = "block";
            }
            return false;
        }
        if (errorEl) errorEl.style.display = "none";
        return true;
    }

    // Valida formato de correo electrónico
    function validarEmail(input) {
        var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        var errorEl = input.parentElement.querySelector(".error-msg");
        if (!regex.test(input.value.trim())) {
            if (errorEl) {
                errorEl.textContent = "Ingresa un correo electrónico válido.";
                errorEl.style.display = "block";
            }
            return false;
        }
        if (errorEl) errorEl.style.display = "none";
        return true;
    }

    // Exponer funciones útiles para otros scripts de paginas específicas
    window.valleArriba = {
        mostrarMensaje: mostrarMensaje,
        validarCampo: validarCampo,
        validarEmail: validarEmail
    };

    document.addEventListener("DOMContentLoaded", function () {
        marcarNavActivo();
    });

})();
