function delta(a, b, c) {
   return Math.pow(b, 2) - 4*a*c
}

function baskara(a, b, c) {
    const valorDelta = delta(a, b, c)
    if (valorDelta < 0)
        return({x1: "X1 inexistente", x2:"X2 inexistente"})
    else{
        const valor_x1 = (-b + Math.sqrt(valorDelta)) / (2 * a)
        const valor_x2 = (-b - Math.sqrt(valorDelta)) / (2 * a)
        return ({x1: valor_x1, x2: valor_x2})
    }
}

function handleBtncalcular () {
    const valorA = document.getElementById('vA').value
    const valorB = document.getElementById('vB').value
    const valorC = document.getElementById('vC').value
    const raizes = baskara(valorA, valorB, valorC)
    
    document.getElementById('inputX1').value = raizes.x1
    document.getElementById('inputX2').value = raizes.x2
}

document.getElementById('btnCalcular').addEventListener('click', handleBtncalcular)