const formulario_deposito = document.getElementById('form_deposito')
const campo_form_dep_monto = document.getElementById('monto_deposito')
const KEY_tabla_almacena_datos_trans = "datos_transferencia";
const datos_por_defecto_deposito = [,,'Indefinido','Indefinido','Indefinido','Indefinido',];
const contenedor_mensaje_campo_vacio = document.getElementById("mensaje_campo_vacio")

formulario_deposito.addEventListener("submit", function enviar_monto_form (evento_submit){
    evento_submit.preventDefault();
    let hora_y_fecha_de_trans = new Date ();
    let fecha_ahora = hora_y_fecha_de_trans.toLocaleDateString();
    let hora_actual = hora_y_fecha_de_trans.toLocaleTimeString(); 
    let monto_deposito = campo_form_dep_monto.value;
    let operdado_deposito = parseInt(monto_deposito);
    let saldo_cuenta = sessionStorage.getItem('saldo');
    let operador_saldo_cuenta = parseInt(saldo_cuenta);

    if (monto_deposito != ''){
        let saldo_actualizado = operdado_deposito + operador_saldo_cuenta;
        sessionStorage.setItem('saldo',saldo_actualizado)
        datos_por_defecto_deposito[0] = fecha_ahora;
        datos_por_defecto_deposito[1] = hora_actual;
        datos_por_defecto_deposito[6] = monto_deposito;
        let tabla_recuperada_al_script = JSON.parse(sessionStorage.getItem(KEY_tabla_almacena_datos_trans)) || [];
        tabla_recuperada_al_script.push(datos_por_defecto_deposito);
        sessionStorage.setItem(KEY_tabla_almacena_datos_trans, JSON.stringify(tabla_recuperada_al_script));
        formulario_deposito.reset();
    }
    else{
        contenedor_mensaje_campo_vacio.innerHTML = "Uno o más campos vacios, por favor rellene los campos faltantes"
    }

}
)