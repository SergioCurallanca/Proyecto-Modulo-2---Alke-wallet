const saldo_inicial_ejemplo = '100000';
const parrafo_con_saldo = document.getElementById('saldo');
document.addEventListener('DOMContentLoaded',function(){

    if (sessionStorage.getItem('saldo') === null) {
        sessionStorage.setItem('saldo',saldo_inicial_ejemplo);
        imprimir_saldo_pagina(saldo_inicial_ejemplo);
    }
    else {
        saldo_a_imprimir = sessionStorage.getItem('saldo');
        imprimir_saldo_pagina(saldo_a_imprimir);
    }

}
)

function imprimir_saldo_pagina (saldo) {
    parrafo_con_saldo.textContent = saldo;
}


