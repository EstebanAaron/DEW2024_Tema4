// Selección de elementos
const inputContainer = document.getElementById("input-container");
const formContainer = document.getElementById("form-container");
const form = document.getElementById("dynamic-form");
const submitBtn = document.getElementById("submit-btn");
const resetBtn = document.getElementById("reset-btn");
const clearBtn = document.getElementById("clear-btn");

// Función para manejar el dragstart
inputContainer.addEventListener("dragstart", (e) => {
    if (e.target.classList.contains("input-item")) {
        // console.log(e.target.getAttribute('data-type'));
        
        e.dataTransfer.setData("text/html", e.target.outerHTML); // Guarda el HTML del elemento arrastrado
        // e.dataTransfer.setData("text/plain", e.target.id); // Guarda el HTML del elemento arrastrado
    }
});

// Función para permitir el drop
formContainer.addEventListener("dragover", (e) => {
    e.preventDefault(); // Permite que el contenedor acepte el drop
});

// Función para manejar el drop
formContainer.addEventListener("drop", (e) => {
    e.preventDefault();
    const inputHTML = e.dataTransfer.getData("text/html");
    const parser = new DOMParser();
    const inputElement = parser.parseFromString(inputHTML, "text/html").body.firstChild;
    // const inputElement = document.getElementById(e.dataTransfer.getData('text/plain'));

    // Agregar validación al input
    const input = inputElement.querySelector("input");
    input.addEventListener("input", () => validateInput(input));

    form.appendChild(inputElement);
});

// Función para validar inputs
function validateInput(input) {
    const messageSpan = input.nextElementSibling;
    if (!input.checkValidity()) {
        if (input.validity.valueMissing) {
            messageSpan.textContent = "Este campo es obligatorio.";
        } else if (input.validity.tooShort) {
            messageSpan.textContent = `Faltan ${input.minLength - input.value.length} caracteres como mínimo.`;
        } else if (input.validity.typeMismatch) {
            messageSpan.textContent = "El formato no es válido.";
        } else {
            messageSpan.textContent = "Entrada no válida.";
        }
    } else {
        messageSpan.textContent = ""; // Limpia el mensaje si es válido
    }
}

// Botón "Enviar"
submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const inputs = form.querySelectorAll("input");
    let isValid = true;

    inputs.forEach((input) => {
        validateInput(input);
        if (!input.checkValidity()) {
            isValid = false;
        }
    });

    if (isValid) {
        alert("Formulario enviado correctamente.");

    } else {
        alert("Corrige los errores antes de enviar.");
    }
});

// Botón "Resetear"
resetBtn.addEventListener("click", () => {
    form.reset();
    const messages = form.querySelectorAll(".validation-message");
    messages.forEach((msg) => (msg.textContent = ""));
});

// Botón "Vaciar formulario"
clearBtn.addEventListener("click", () => {
    form.innerHTML = ""; // Vacía el formulario
});
