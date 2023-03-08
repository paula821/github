const sectionSeleccionarAtaque=document.getElementById('seleccionar-ataque')
const sectionReiniciar=document.getElementById('reiniciar')
const botonMascotaJugador=document.getElementById('boton-mascota')
const botonReiniciar=document.getElementById('boton-reiniciar')


sectionReiniciar.style.display='none'
const sectionSeleccionarMascota=document.getElementById('seleccionar-mascota')
const spanMascotaJugador=document.getElementById('mascota-jugador')
const spanMascotaEnemigo=document.getElementById('mascota-enemigo')

const spanVidasJugador=document.getElementById('vidas-jugador')
const spanVidasEnemigo=document.getElementById('vidas-enemigo')

const sectionMensajes=document.getElementById('resultado')

const ataquesDelJugador=document.getElementById('ataques-del-jugador')
const ataquesDelEnemigo=document.getElementById('ataques-del-enemigo')
const contenedorTarjetas=document.getElementById('contenedorTarjetas')
const contenedorAtaques=document.getElementById('contenedorAtaques')

let mokepones=[]
let ataqueJugador=[]
let ataqueEnemigo=[]
let opcionDeMokepones
let inputHipodoge
let inputCapipepo
let inputRatigueya
let mascotaJugador
let ataquesMokepon
let ataquesMokeponEnemigo
let botonFuego
let botonAgua
let botonTierra
let indexAtaqueJugador
let indexAtaqueEnemigo
let botones=[]
let vidasJugador=3
let vidasEnemigo=3

//clase
class Mokepon {
    constructor(nombre, foto, vida){
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}

let hipodoge = new Mokepon('Hipodoge', 'imagenes/hipodoge.JPG', 5)
let capipepo = new Mokepon('Capipepo', 'imagenes/capipepo.JPG', 5)
let ratigueya = new Mokepon('Ratigueya', 'imagenes/ratigueya.JPG', 5)

 //construccion de arreglos
 mokepones.push(hipodoge,capipepo,ratigueya)

//generar ataques llamando desde el mokepon
hipodoge.ataques.push(
    {nombre: '💦', id:'boton-agua'},
    {nombre: '💦', id:'boton-agua'},
    {nombre: '💦', id:'boton-agua'},
    {nombre: '🔥', id:'boton-fuego'},
    {nombre: '🌱', id:'boton-tierra'},
)

capipepo.ataques.push(
    {nombre: '🌱', id:'boton-tierra'},
    {nombre: '🌱', id:'boton-tierra'},
    {nombre: '🌱', id:'boton-tierra'},
    {nombre: '💦', id:'boton-agua'},
    {nombre: '🔥', id:'boton-fuego'},
)

ratigueya.ataques.push(
    {nombre: '🔥', id:'boton-fuego'},
    {nombre: '🔥', id:'boton-fuego'},
    {nombre: '🔥', id:'boton-fuego'},
    {nombre: '💦', id:'boton-agua'},
    {nombre: '🌱', id:'boton-tierra'},
)


function iniciarJuego() {

    sectionSeleccionarAtaque.style.display = 'none'

    mokepones.forEach((mokepon) => {
        opcionDeMokepones = `
        <input type="radio" name="mascota" id=${mokepon.nombre}>
        <label class="tarjeta-de-mokepon" for=${mokepon.nombre}>                    
            <p>${mokepon.nombre}</p>
            <img src=${mokepon.foto} alt=${mokepon.nombre}>
        </label>`

    contenedorTarjetas.innerHTML += opcionDeMokepones

    inputHipodoge = document.getElementById('Hipodoge')
    inputCapipepo = document.getElementById('Capipepo')
    inputRatigueya = document.getElementById('Ratigueya')

    })
   
    sectionReiniciar.style.display = 'none'
   
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
}

function seleccionarMascotaJugador() {

    //sectionSeleccionarMascota.style.display = 'none'
    
    sectionSeleccionarAtaque.style.display = 'flex'
    
    
    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = inputHipodoge.id
        mascotaJugador = inputHipodoge.id
    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = inputCapipepo.id
        mascotaJugador = inputCapipepo.id
    } else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = inputRatigueya.id
        mascotaJugador = inputRatigueya.id
    } else {
        alert('Selecciona una mascota')
    }

    extraerAtaques(mascotaJugador)
    seleccionarMascotaEnemigo()
}

function extraerAtaques(mascotaJugador){
    let ataques
    for (let i = 0; i < mokepones.length; i++) {
        if(mascotaJugador == mokepones[i].nombre){
            ataques = mokepones[i].ataques
        }     
    }
    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques){

    ataques.forEach((ataque) => {
        ataquesMokepon = `<button id=${ataque.id} class="boton-de-ataque BAtaque">${ataque.nombre}</button>`

        contenedorAtaques.innerHTML += ataquesMokepon
    })

    botonFuego = document.getElementById('boton-fuego')
    botonAgua = document.getElementById('boton-agua')
    botonTierra = document.getElementById('boton-tierra')
    botones = document.querySelectorAll('.BAtaque')

    
    
}

function secuenciaAtaque(){
botones.forEach((boton) => {
    boton.addEventListener('clic', (e) =>{
        if(e.target.textContent === '🔥'){
            ataqueJugador.push('FUEGO')
            console.log(ataqueJugador)
            boton.style.background = '#112f58'
        }else if(e.target.textContent === '🌊'){
            ataqueJugador.push('AGUA')
            console.log(ataqueJugador)
            boton.style.background = '#112f58'
        }else{
            ataqueJugador.push('TIERRA')
            console.log(ataqueJugador)
            boton.style.background = '#112f58'
        }
        ataqueAleatorioEnemigo()
    })
})
    
}

function seleccionarMascotaEnemigo() {
    let mascotaAleatoria = aleatorio(1,mokepones.length -1) 
   
    spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatoria].nombre
    ataquesMokeponEnemigo = mokepones[mascotaAleatoria].ataques
    secuenciaAtaque()
}


function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(0,ataquesMokeponEnemigo.length - 1)

    if(ataqueAleatorio == 0 || ataqueAleatorio == 1){
        ataqueEnemigo.push('FUEGO')
    }else if (ataqueAleatorio == 3 || ataqueAleatorio == 4){
        ataqueEnemigo.push('AGUA')
    }else {
        ataqueEnemigo.push('TIERRA')
    }
    console.log(ataqueEnemigo)
    iniciarPelea()
}

function iniciarPelea(){
    if (ataqueJugador.length === 5) {
        combate()
    }
}

function indexAmbosoponente(jugador, enemigo){
    indexAtaqueJugador = ataqueEnemigo[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}

function combate(){

    for (let index = 0; index < ataqueJugador.length; index++){
        if(ataqueJugador[index] === ataqueEnemigo[index]) {
            indexAmbosoponente(index, index)
            crearMensaje("EMPATE")
        }
    }

      // COMBATE
    if (ataqueEnemigo == ataqueJugador) {
        crearMensaje("EMPATE")
    } else if (ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        crearMensaje("PERDISTE")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }

    revisarVidas()
}

function revisarVidas(){
    if(vidasEnemigo == 0){
        crearMensajeFinal("felicitaciones, Ganaste")
    }else if(vidasJugador == 0){
        crearMensajeFinal("lo siento, has perdido")
    }
}

function crearMensaje(resultado) {
        
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemigo
     

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal) {
     
    sectionMensajes.innerHTML = resultadoFinal
   
    botonFuego.disabled = true
   
    botonAgua.disabled = true
   
    botonTierra.disabled = true
    
    sectionReiniciar.style.display = 'block'
}

function reiniciarJuego(){
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

window.addEventListener('load', iniciarJuego)