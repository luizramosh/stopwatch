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

    atualizarDisplay(horas, minutos, segundos) /* A função contarTempo modifica horas, minutos e segundos, e passa esses valores atualizados para a função atualizarDisplay, que então atualiza o visor. */
}

function iniciarCronometro() {
    if(intervalo !== null) return 
    intervalo = setInterval(contarTempo, 1000)
}

document.getElementById("start").addEventListener('click', iniciarCronometro)

/*
 Falta inserir as funções de stop e reset do cronômetro, além de clearInterval()
*/