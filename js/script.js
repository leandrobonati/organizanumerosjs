var number = [78,54,23,15,89,12,234,126,38,96]
function ver(){
document.getElementById('numeros').innerText = `a ordem de numeros é ${number } `
}


function verma(){
    var maior = Math.max(...number)
    document.getElementById('numaior').innerText = `o maior número é ${maior}`
}

function verme(){
    var menor = Math.min(...number)
    document.getElementById('numenor').innerText = `o maior número é ${menor}`
}

function soma(){
   var soma = number.reduce((acumulador,valoratual) => acumulador + valoratual , 0)
   document.getElementById('soma').innerText = `a soma dos números é ${soma}`
}

function ordem(){
    number.sort((a,b) => a - b)
    document.getElementById('ordem').innerText = `a ordem certa é ${number}`
}