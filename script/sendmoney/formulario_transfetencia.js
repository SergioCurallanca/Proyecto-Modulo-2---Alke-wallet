const input_apodo_contacto = document.getElementById("contacto_apodo_enviar");
const input_banco_contacto = document.getElementById("banco_contacto_enviar");
const input_n_cuenta_contacto = document.getElementById("n_cuenta_contacto_enviar");
const input_rut_cuenta_contacto = document.getElementById("rut_contacto_enviar");
const input_monto_transferencia = document.getElementById("monto_transferencia");
const label_apodo_contacto = document.getElementById("label_contacto_apodo_enviar");
const label_banco_contacto = document.getElementById("label_banco_contacto_enviar");
const label_n_cuenta_contacto = document.getElementById("label_n_cuenta_contacto_enviar");
const label_rut_cuenta_contacto = document.getElementById("label_rut_contacto_enviar");
const btn_quitar_contacto_form_dstn = document.getElementById("quitar_contacto_dstn_transf");
const formulario_transferencias = document.getElementById("form_realizar_transferencia");
const contenedor_mensaje_form_trans = document.getElementById("mensaje_resultado_submit_form_trans");
const KEY_tabla_almacena_datos_trans = "datos_transferencia";


function enviar_datos_btn_a_formulario (btn){

    input_apodo_contacto.value = btn.dataset.apodo;
    input_apodo_contacto.classList.remove("d-none");
    label_apodo_contacto.classList.remove("d-none");

    input_banco_contacto.value = btn.dataset.banco;
    input_banco_contacto.classList.remove("d-none");
    label_banco_contacto.classList.remove("d-none");

    input_n_cuenta_contacto.value = btn.dataset.n_cuenta;
    input_n_cuenta_contacto.classList.remove("d-none");
    label_n_cuenta_contacto.classList.remove("d-none");

    input_rut_cuenta_contacto.value = btn.dataset.rut;
    input_rut_cuenta_contacto.classList.remove("d-none");
    label_rut_cuenta_contacto.classList.remove("d-none");

    btn_quitar_contacto_form_dstn.classList.remove("d-none");


}

// Boton agregar contacto al formulario

document
    .querySelector("#contactos_registrados_tabla tbody")
    .addEventListener("click", function (btn_add_dstn) {
        if (btn_add_dstn.target.classList.contains("btn_enviar_datos_form")) {
            enviar_datos_btn_a_formulario (btn_add_dstn.target);
        }
    })

formulario_transferencias.addEventListener("submit", function verificacion_campos_vacios (evento_submit){
    evento_submit.preventDefault();
    let contenido_contacto_apodo_trans = input_apodo_contacto.value;
    let contenido_contacto_banco_trans = input_banco_contacto.value;
    let contenido_contacto_n_cuenta_trans = input_n_cuenta_contacto.value;
    let contenido_contacto_rut_trans = input_rut_cuenta_contacto.value;
    let contenido_monto_trans = input_monto_transferencia.value;
    let operador_monto_trans = parseInt(contenido_monto_trans)
    let saldo_cuenta_recuperado = sessionStorage.getItem('saldo')
    let operador_saldo = parseInt(saldo_cuenta_recuperado)
    let agregar_signo_negativo_al_monto_trans = operador_monto_trans * -1

    if (contenido_contacto_apodo_trans != "" && contenido_contacto_banco_trans !="" && contenido_contacto_n_cuenta_trans !="" && contenido_contacto_rut_trans !="" && contenido_monto_trans != "" && operador_monto_trans < operador_saldo){
        let hora_y_fecha_de_trans = new Date ();
        let fecha_ahora = hora_y_fecha_de_trans.toLocaleDateString();
        let hora_actual = hora_y_fecha_de_trans.toLocaleTimeString(); 
        let datos_enviados_a_la_tabla = [fecha_ahora,hora_actual,contenido_contacto_apodo_trans,contenido_contacto_banco_trans,contenido_contacto_n_cuenta_trans,contenido_contacto_rut_trans,agregar_signo_negativo_al_monto_trans];
        let tabla_recuperada_al_script = JSON.parse(sessionStorage.getItem(KEY_tabla_almacena_datos_trans)) || [];
        tabla_recuperada_al_script.push(datos_enviados_a_la_tabla);
        sessionStorage.setItem(KEY_tabla_almacena_datos_trans, JSON.stringify(tabla_recuperada_al_script));
        let saldo_actualizado = operador_saldo - operador_monto_trans;
        sessionStorage.setItem('saldo',saldo_actualizado)
        console.log(tabla_recuperada_al_script)
        formulario_trans_reset();    
    }
    else {
        if (operador_monto_trans > operador_saldo){
        contenedor_mensaje_form_trans.innerHTML = "Su monto sobrepasa su saldo actual"
        }
        else {
        contenedor_mensaje_form_trans.innerHTML = "Uno o más campos vacios, por favor rellene los campos faltantes"
        }
    }
});

function formulario_trans_reset (){
    formulario_transferencias.reset();
    input_apodo_contacto.classList.add("d-none");
    label_apodo_contacto.classList.add("d-none");
    input_banco_contacto.classList.add("d-none");
    label_banco_contacto.classList.add("d-none");
    input_n_cuenta_contacto.classList.add("d-none");
    label_n_cuenta_contacto.classList.add("d-none");
    input_rut_cuenta_contacto.classList.add("d-none");
    label_rut_cuenta_contacto.classList.add("d-none");
    btn_quitar_contacto_form_dstn.classList.add("d-none");
    contenedor_mensaje_form_trans.innerHTML = "";
    
}

btn_quitar_contacto_form_dstn.addEventListener("click", function() {
    formulario_trans_reset();    
})