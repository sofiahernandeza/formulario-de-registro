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

document.getElementById('regBtn').addEventListener('click',()=>{

    for(let i = 0; i < formulario.length ; i++) {
        if(formulario[i].value === '') {
            alert("complete todos los campos")// bucle de alertas
        }
    } 
    if (contraseña1.length < 6 || contraseña1.value != contraseña2.value) {
        alert('contraseñas no coinciden o no tienen suficientes caracteres')
    }
    if(!terminos) {
        alert('Acepte los terminos y condiciones')
    }
})