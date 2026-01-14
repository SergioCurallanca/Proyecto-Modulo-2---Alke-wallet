const section_f_nuevo_contacto = document.getElementById("section_f_nuevo_contacto");

document.getElementById("btn_agregar_nuevo_contacto").addEventListener("click",() => {
    section_f_nuevo_contacto.classList.remove("d-none");
})
document.getElementById("ocultar_formulario_nuevo_contacto").addEventListener("click",() =>{
    section_f_nuevo_contacto.classList.add("d-none");
})

