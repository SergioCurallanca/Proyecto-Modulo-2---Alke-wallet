const KEY_tabla_almacena_datos_trans = "datos_transferencia";


document.addEventListener('DOMContentLoaded',function(){

    let array_contendra_las_transferencias = JSON.parse(sessionStorage.getItem(KEY_tabla_almacena_datos_trans)|| []);
    

    if (Array.isArray(array_contendra_las_transferencias)){
        array_contendra_las_transferencias.forEach(array_dato => agregar_dato_tabla_transf(array_dato));
    }

    function agregar_dato_tabla_transf (datos_formulario_nv_contacto){
    const registro_de_contactos = document.getElementById("tabla_registro_transacciones");
    const formato_encabezado_registro_contactos = registro_de_contactos.querySelector("thead tr");
    const cuerpo_ref_tabla_reg_cont = registro_de_contactos.querySelector("tbody");

    const fila_para_nuevo_contacto = document.createElement("tr");

    formato_encabezado_registro_contactos.querySelectorAll("th").forEach((th,indice) => {
        const nueva_celda = document.createElement("td");
        nueva_celda.textContent = datos_formulario_nv_contacto[indice];
        fila_para_nuevo_contacto.appendChild(nueva_celda);    
    })
    cuerpo_ref_tabla_reg_cont.appendChild(fila_para_nuevo_contacto);
   
}

}
)