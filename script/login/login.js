const formaulario_login = document.getElementById('formulario_login');


formaulario_login.addEventListener('submit', function verificacion_sencilla (evento_submit){

    evento_submit.preventDefault();
    
    const credencial_correo = "correo@generico.com";
    const credencial_contraseña = "12345";
    const correo_obtenido_login = document.getElementById("correo_login").value;
    const contraseña_obtenida_login =  document.getElementById("contraseña_login").value;
    const mensaje_comprobar_credenciales = document.getElementById("mensaje_resultado_credenciales");
    console.log(correo_obtenido_login)
    console.log(contraseña_obtenida_login)
    if (credencial_correo == correo_obtenido_login && credencial_contraseña == contraseña_obtenida_login){
   
        mensaje_comprobar_credenciales.innerHTML = "Redirigiendo";
        setTimeout (function(){
            window.location.replace('menu.html')
        },3000)
         }
    else {
        mensaje_comprobar_credenciales.innerHTML = "Contraseña o correo erroneo, pruebe de nuevo";
    }


})

