/*
  potencia - valor em kW reference a potencia da maquina
  tempoConsumo - total de horas que a máquina ficou ligada
  valorKWH - valor em R$ pago por cada kW consumido por hora
*/

function calculakWh(potencia, tempoConsumo) {
    return potencia * tempoConsumo;
}

function calulcaValor(consumokWh, valorKWH) {
    return consumokWh * valorKWH;
}

const consumokWh = calculakWh(3, 2);
console.log('consumo (em kWh): ', consumokWh);
const valorConsumo = calulcaValor(consumokWh, 0.5);
console.log('valor do consumo (em R$): ', valorConsumo);