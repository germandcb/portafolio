export function valida (input) {
    const tipoDeInput = input.dataset.tipo;
    if (validadores[tipoDeInput]) {
        validadores[tipoDeInput](input);
    }

    console.log(input.parentElement);
    if (input.validity.valid) {
        input.parentElement.classList.remove("campo-input--error");
        input.parentElement.querySelector(".campo-input-mensaje-error").innerHTML = "";
    } else {
        input.parentElement.classList.add("campo-input--error");
        input.parentElement.querySelector(".campo-input-mensaje-error").innerHTML = mostrarMensajeDeErro(tipoDeInput, input);
    }
}

export function validaTextare (textarea) {
    const tipoDeInput = textarea.dataset.tipo;
    if (validadores[tipoDeInput]) {
        validadores[tipoDeInput](textarea);
    }

    console.log(textarea.parentElement);
    if (textarea.validity.valid) {
        textarea.parentElement.classList.remove("campo-input--error");
        textarea.parentElement.querySelector(".campo-input-mensaje-error").innerHTML = "";
    } else {
        textarea.parentElement.classList.add("campo-input--error");
        textarea.parentElement.querySelector(".campo-input-mensaje-error").innerHTML = mostrarMensajeDeErroTextarea(tipoDeInput, textarea);
    }
}

const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "tooShort"
];

const mensajesDeError = {
    nombre: {
        valueMissing: "El campo nombre no puede estar vacio"
    },
    email: {
        valueMissing: "El campo email no puede estar vacio",
        typeMismatch: "El correo no es valido"
    },
    asunto: {
        valueMissing: "El campo asunto no puede estar vacio"
    },
    mensaje: {
        valueMissing: "El campo mensaje no puede estar vacio",
        tooShort: "El mensaje debe tener mínimo 10 caracteres"
    }
};

const validadores = {};

function mostrarMensajeDeErro (tipoDeInput, input) {
    let mensaje = "";
    tipoDeErrores.forEach(error => {
        if(input.validity[error]){
            console.log(tipoDeInput, error);
            console.log(input.validity.error);
            console.log(mensajesDeError[tipoDeInput][error])
            mensaje = mensajesDeError[tipoDeInput][error];
        }
    })
    return mensaje;
}

function mostrarMensajeDeErroTextarea (tipoDeInput, textarea) {
    let mensaje = "";
    tipoDeErrores.forEach(error => {
        if(textarea.validity[error]){
            console.log(tipoDeInput, error);
            console.log(textarea.validity.error);
            console.log(mensajesDeError[tipoDeInput][error])
            mensaje = mensajesDeError[tipoDeInput][error];
        }
    })
    return mensaje;
}


