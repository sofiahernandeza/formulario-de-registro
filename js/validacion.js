function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

let formulario = document.querySelectorAll('.form-control');

let contraseña1 = document.getElementById('password1');
let contraseña2 = document.getElementById('password2');
let terminos = document.getElementById('terminos')

document.getElementById('regBtn').addEventListener('click', () => {
    let errores = false;

    for (let i = 0; i < formulario.length; i++) {
        if (formulario[i].value === '') {
            showAlertError()
            errores = true;
            break; 
        }
    }
    if (contraseña1.value.length < 6 || contraseña1.value !== contraseña2.value) {
        showAlertError()
        errores = true;
    }
    if (!terminos.checked) {
        showAlertError()
        errores = true; 
    }
    if (!errores) {
        showAlertSuccess()
    }
});