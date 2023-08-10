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
            alert("Complete todos los campos");
            errores = true;
            break; 
        }
    }
    if (contraseña1.value.length < 6 || contraseña1.value !== contraseña2.value) {
        alert('Contraseñas no coinciden o no tienen suficientes caracteres');
        errores = true;
    }
    if (!terminos.checked) {
        alert('Acepte los términos y condiciones');
        errores = true; 
    }
    if (!errores) {
        alert('Formulario enviado exitosamente');
    }
});