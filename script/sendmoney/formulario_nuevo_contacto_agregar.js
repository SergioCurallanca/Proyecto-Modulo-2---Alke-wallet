const form_nv_contacto_nombre = document.getElementById("nuevo_contacto_nombre");
const form_nv_contacto_apodo = document.getElementById("nuevo_contacto_apodo");
const form_nv_contacto_rut = document.getElementById("nuevo_contacto_rut");
const form_nv_contacto_banco = document.getElementById("nuevo_contacto_banco");
const form_nv_contacto_tp_cuenta = document.getElementById("nuevo_contacto_tipo_cuenta");
const form_nv_contacto_n_cuenta = document.getElementById("nuevo_contacto_n_cuenta");
const formulario_nv_contacto = document.getElementById("f_nuevo_contacto");
const mensaje_submit_form_nv_contacto = document.getElementById("mensaje_resultado_submit_form_nv_contacto");
const dato_inicial_ejemplo_tabla_contactos = [,,'Juan Valenzuela','Juanito','11111111-1','Banco Estado','Vista','11111111'];
const palabra_nivel_control_dibujo = "dibujado";
const KEY_tabla_almacena_contactos = "tabla_almacena_contactos_para_dibujar";

function dibujar_el_primer_elemento (){
    let primera_tabla_con_contenido_inicial = dato_inicial_ejemplo_tabla_contactos;
    agregar_dato_form_nv_contacto_a_tabla(primera_tabla_con_contenido_inicial);

}

document.addEventListener('DOMContentLoaded',function(){

    let array_contendra_los_contactos_cliente = JSON.parse(sessionStorage.getItem(KEY_tabla_almacena_contactos)|| "null");
    

    if (Array.isArray(array_contendra_los_contactos_cliente)){
        array_contendra_los_contactos_cliente.forEach(array_dato => agregar_dato_form_nv_contacto_a_tabla(array_dato))

    }
    else{
        sessionStorage.removeItem(KEY_tabla_almacena_contactos);
        let tabla_recuperada_al_script = JSON.parse(sessionStorage.getItem(KEY_tabla_almacena_contactos)) || [];
        tabla_recuperada_al_script.push(dato_inicial_ejemplo_tabla_contactos);
        sessionStorage.setItem(KEY_tabla_almacena_contactos, JSON.stringify(tabla_recuperada_al_script));
        agregar_dato_form_nv_contacto_a_tabla(dato_inicial_ejemplo_tabla_contactos)
    }
}
)



function agregar_clase_y_datos_btn_meta (array_con_los_datos_form){ 
    let nv_btn = document.createElement('button');
    nv_btn.textContent = '+';
    nv_btn.classList.add('btn_enviar_datos_form');
    nv_btn.classList.add('btn');
    nv_btn.classList.add('btn-success');
    nv_btn.dataset.nombre = array_con_los_datos_form[2];
    nv_btn.dataset.apodo = array_con_los_datos_form[3];
    nv_btn.dataset.rut = array_con_los_datos_form[4];
    nv_btn.dataset.banco = array_con_los_datos_form[5];
    nv_btn.dataset.tipo_cuenta = array_con_los_datos_form[6];
    nv_btn.dataset.n_cuenta = array_con_los_datos_form[7];
    return nv_btn;  
}
function agregar_clase_btn_eliminar (array_con_los_datos_form){ 
    let nv_btn = document.createElement('button');
    nv_btn.textContent = '-';
    nv_btn.classList.add('btn_eliminar_contacto');
    nv_btn.classList.add('btn');
    nv_btn.classList.add('btn-danger');
    nv_btn.dataset.nombre = array_con_los_datos_form[2];
    nv_btn.dataset.apodo = array_con_los_datos_form[3];
    nv_btn.dataset.rut = array_con_los_datos_form[4];
    nv_btn.dataset.banco = array_con_los_datos_form[5];
    nv_btn.dataset.tipo_cuenta = array_con_los_datos_form[6];
    nv_btn.dataset.n_cuenta = array_con_los_datos_form[7];
    return nv_btn; 
}


function agregar_dato_form_nv_contacto_a_tabla (datos_formulario_nv_contacto){
    const registro_de_contactos = document.getElementById("contactos_registrados_tabla");
    const formato_encabezado_registro_contactos = registro_de_contactos.querySelector("thead tr");
    const cuerpo_ref_tabla_reg_cont = registro_de_contactos.querySelector("tbody");

    const fila_para_nuevo_contacto = document.createElement("tr");

    formato_encabezado_registro_contactos.querySelectorAll("th").forEach((th,indice) => {
        const nueva_celda = document.createElement("td");
        nueva_celda.textContent = datos_formulario_nv_contacto[indice];
        if (indice == 0){
            let boton_eliminar_contacto = agregar_clase_btn_eliminar(datos_formulario_nv_contacto);
            let contenedor_del_boton_metadatos = nueva_celda;
            contenedor_del_boton_metadatos.appendChild(boton_eliminar_contacto);
        }

        if (indice == 1){
            let boton_contiene_metadatos = agregar_clase_y_datos_btn_meta(datos_formulario_nv_contacto);
            let contenedor_del_boton_metadatos = nueva_celda;
            contenedor_del_boton_metadatos.appendChild(boton_contiene_metadatos);
        }
        fila_para_nuevo_contacto.appendChild(nueva_celda);    
    })
    cuerpo_ref_tabla_reg_cont.appendChild(fila_para_nuevo_contacto);
   
}



formulario_nv_contacto.addEventListener("submit", function verificacion_campos_vacios_form_nv_contacto (evento_submit){
    evento_submit.preventDefault();
    let contenido_contacto_nombre = form_nv_contacto_nombre.value;
    let contenido_contacto_apodo = form_nv_contacto_apodo.value;
    let contenido_contacto_rut = form_nv_contacto_rut.value;
    let contenido_contacto_banco = form_nv_contacto_banco.value;
    let contenido_contacto_tp_cuenta = form_nv_contacto_tp_cuenta.value;
    let contenido_contacto_n_cuenta = form_nv_contacto_n_cuenta.value;

    if (contenido_contacto_nombre != "" && contenido_contacto_apodo !="" && contenido_contacto_rut !="" && contenido_contacto_banco !="" && contenido_contacto_tp_cuenta != "" && contenido_contacto_n_cuenta !=""){
        let datos_enviados_a_la_tabla = [,,contenido_contacto_nombre,contenido_contacto_apodo,contenido_contacto_rut,contenido_contacto_banco,contenido_contacto_tp_cuenta,contenido_contacto_n_cuenta];
        let tabla_recuperada_al_script = JSON.parse(sessionStorage.getItem(KEY_tabla_almacena_contactos)) || [];
        tabla_recuperada_al_script.push(datos_enviados_a_la_tabla);
        sessionStorage.setItem(KEY_tabla_almacena_contactos, JSON.stringify(tabla_recuperada_al_script));
        agregar_dato_form_nv_contacto_a_tabla(datos_enviados_a_la_tabla);
        formulario_nv_contacto.reset();    
    }
    else {
        mensaje_submit_form_nv_contacto.innerHTML = "Uno o más campos vacios, por favor rellene los campos faltantes"
    }

})











