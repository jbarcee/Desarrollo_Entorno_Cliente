document.getElementById("btnCalcular").addEventListener('click',calcularDiferencia);

function calcularDiferencia() {
    let fechaUno = new Date(document.getElementById("fechaUno").value);
    let fechaDos = new Date(document.getElementById("fechaDos").value);
    let resultado = document.getElementById("resultado");

    let resta = Math.abs(fechaUno.getTime() - fechaDos.getTime())/(1000*60*60*24);
    
    resultado.innerHTML = `La diferencia es de ${(resta)} días.`;
}