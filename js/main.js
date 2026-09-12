

const registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", function (event) {


        event.preventDefault();


        const nombre = document.getElementById("nombre");
        const email = document.getElementById("email");
        const telefono = document.getElementById("telefono");
        const password = document.getElementById("password");
        const confirmPassword = document.getElementById("confirmPassword");
        const terminos = document.getElementById("terminos");
        const newsletter = document.getElementById("newsletter");

        const mensajeRegistro =
            document.getElementById("mensajeRegistro");



        document.getElementById("nombreError").textContent = "";
        document.getElementById("emailError").textContent = "";
        document.getElementById("telefonoError").textContent = "";
        document.getElementById("passwordError").textContent = "";
        document.getElementById("confirmPasswordError").textContent = "";
        document.getElementById("terminosError").textContent = "";

        mensajeRegistro.textContent = "";




        let formularioValido = true;




        if (nombre.value.trim() === "") {

            document.getElementById("nombreError").textContent =
                "Por favor, ingresa tu nombre.";

            formularioValido = false;

        } else if (nombre.value.trim().length < 3) {

            document.getElementById("nombreError").textContent =
                "El nombre debe tener al menos 3 caracteres.";

            formularioValido = false;
        }



        const emailValido =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (email.value.trim() === "") {

            document.getElementById("emailError").textContent =
                "Por favor, ingresa tu correo electrónico.";

            formularioValido = false;

        } else if (!emailValido.test(email.value.trim())) {

            document.getElementById("emailError").textContent =
                "Ingresa un correo electrónico válido.";

            formularioValido = false;
        }




        const telefonoLimpio =
            telefono.value.replace(/\s/g, "");


        const telefonoValido =
            /^\+?56?9?\d{8,9}$|^\+569\d{8}$|^9\d{8}$/
            .test(telefonoLimpio);


        if (telefono.value.trim() === "") {

            document.getElementById("telefonoError").textContent =
                "Por favor, ingresa tu teléfono.";

            formularioValido = false;

        } else if (!telefonoValido) {

            document.getElementById("telefonoError").textContent =
                "Ingresa un número de teléfono válido.";

            formularioValido = false;
        }



        const tieneOchoCaracteres =
            password.value.length >= 8;

        const tieneMayuscula =
            /[A-Z]/.test(password.value);

        const tieneNumero =
            /[0-9]/.test(password.value);


        if (password.value === "") {

            document.getElementById("passwordError").textContent =
                "Por favor, crea una contraseña.";

            formularioValido = false;

        } else if (!tieneOchoCaracteres) {

            document.getElementById("passwordError").textContent =
                "La contraseña debe tener al menos 8 caracteres.";

            formularioValido = false;

        } else if (!tieneMayuscula) {

            document.getElementById("passwordError").textContent =
                "La contraseña debe contener al menos una mayúscula.";

            formularioValido = false;

        } else if (!tieneNumero) {

            document.getElementById("passwordError").textContent =
                "La contraseña debe contener al menos un número.";

            formularioValido = false;
        }




        if (confirmPassword.value === "") {

            document.getElementById("confirmPasswordError").textContent =
                "Por favor, confirma tu contraseña.";

            formularioValido = false;

        } else if (password.value !== confirmPassword.value) {

            document.getElementById("confirmPasswordError").textContent =
                "Las contraseñas no coinciden.";

            formularioValido = false;
        }



        if (!terminos.checked) {

            document.getElementById("terminosError").textContent =
                "Debes aceptar los términos y condiciones.";

            formularioValido = false;
        }




        if (formularioValido) {


            

            if (newsletter.checked) {

                console.log(
                    "El usuario quiere suscribirse al newsletter."
                );

            } else {

                console.log(
                    "El usuario no quiere suscribirse al newsletter."
                );
            }


            mensajeRegistro.textContent =
                "¡Registro realizado correctamente! 💗";

            mensajeRegistro.style.color = "#7b3f98";




            registerForm.reset();

        } else {

            mensajeRegistro.textContent =
                "Por favor, corrige los errores antes de continuar.";

            mensajeRegistro.style.color = "#c0395b";
        }

    });

}




const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function (event) {

        event.preventDefault();




        const email =
            document.getElementById("loginEmail");

        const password =
            document.getElementById("loginPassword");

        const emailError =
            document.getElementById("loginEmailError");

        const passwordError =
            document.getElementById("loginPasswordError");

        const mensajeLogin =
            document.getElementById("mensajeLogin");



        emailError.textContent = "";
        passwordError.textContent = "";
        mensajeLogin.textContent = "";


        let formularioValido = true;




        const emailValido =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (email.value.trim() === "") {

            emailError.textContent =
                "Por favor, ingresa tu correo.";

            formularioValido = false;

        } else if (!emailValido.test(email.value.trim())) {

            emailError.textContent =
                "Ingresa un correo electrónico válido.";

            formularioValido = false;
        }



        if (password.value.trim() === "") {

            passwordError.textContent =
                "Por favor, ingresa tu contraseña.";

            formularioValido = false;

        } else if (password.value.length < 8) {

            passwordError.textContent =
                "La contraseña debe tener al menos 8 caracteres.";

            formularioValido = false;
        }




        if (formularioValido) {

            mensajeLogin.textContent =
                "¡Inicio de sesión correcto! 💗";

            mensajeLogin.style.color = "#7b3f98";


            console.log("Correo:", email.value);
            console.log("Inicio de sesión correcto.");

        } else {

            mensajeLogin.textContent =
                "Por favor, corrige los errores antes de continuar.";

            mensajeLogin.style.color = "#c0395b";
        }

    });

}




const botonCarrito =
    document.querySelector(".boton-carrito");

if (botonCarrito) {

    botonCarrito.addEventListener("click", function () {

        alert("Tu carrito está vacío 🛒💗");

    });

}