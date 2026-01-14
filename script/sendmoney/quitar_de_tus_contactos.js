function encontrar_indice_array_padre(objeto_busqueda_1,objeto_busqueda_2){
    let tabla_recuperada_al_script = JSON.parse(sessionStorage.getItem(KEY_tabla_almacena_contactos)) || [];
    return tabla_recuperada_al_script.findIndex(
        array_contiene_datos_contacto => array_contiene_datos_contacto[4] === objeto_busqueda_1 && array_contiene_datos_contacto[7] === objeto_busqueda_2);


}

document
    .querySelector("#contactos_registrados_tabla tbody")
    .addEventListener("click", function (btn_rmve_dstn) {
        if (btn_rmve_dstn.target.classList.contains("btn_eliminar_contacto")) {
            let fila_elminar = btn_rmve_dstn.target.closest('tr');
            let rut_contacto = btn_rmve_dstn.target.dataset.rut;
            let n_cuenta = btn_rmve_dstn.target.dataset.n_cuenta;
            let tabla_recuperada_al_script = JSON.parse(sessionStorage.getItem(KEY_tabla_almacena_contactos)) || [];
            let indice_array_padre = encontrar_indice_array_padre(rut_contacto,n_cuenta)
            tabla_recuperada_al_script.splice(indice_array_padre,1)
            sessionStorage.setItem(KEY_tabla_almacena_contactos,JSON.stringify(tabla_recuperada_al_script))
            fila_elminar.remove();            
        }
    })