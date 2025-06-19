const display = document.getElementById("visorTempo")
display.textContent = '00:00:00'

function atualizarDisplay(horas, minutos, segundos) {
    const formatar = (valor) => valor.toString().padStart(2, '0')
    display.textContent = `${formatar(horas)}:${formatar(minutos)}:${formatar(segundos)}`
}

let horas = 0
let minutos = 0
let segundos = 0
let intervalo = null
const botaoIniciar = document.getElementById("start")

function contarTempo () {
    segundos++
    if(segundos ===60) {
        segundos = 0
        minutos++
    }
    if(minutos ===60) {
        minutos = 0 
        horas++
    }

    atualizarDisplay(horas, minutos, segundos) //Atribuição dos valores atualizados
}

function iniciarCronometro() {
    if(intervalo !== null) return 
    intervalo = setInterval(contarTempo, 1000)
    botaoIniciar.textContent = "Iniciar"
   
}

function pararCronometro() {
    clearInterval(intervalo)
    intervalo = null 
    botaoIniciar.textContent = "Retomar"
}

function resetarCronometro() {
    pararCronometro()
    horas = 0
    minutos = 0
    segundos = 0
    atualizarDisplay(horas, minutos, segundos) //Reatribuição dos valores para reset
    botaoIniciar.textContent = "Iniciar"
    
}

// Event listeners
document.getElementById("start").addEventListener('click', iniciarCronometro)
document.getElementById("stop").addEventListener('click', pararCronometro)
document.getElementById("reset").addEventListener('click', resetarCronometro)
