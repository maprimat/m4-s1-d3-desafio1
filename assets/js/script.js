// VARIABLES

let contadorHumano = 0;
let contadorMaquina = 0;
let contadorEmpates = 0;
let piedra = 1;
let papel = 2;
let tijera = 3;

// FUNCION MAQUINA RANDOM

function cachipunMaquina(){
    return Math.floor(Math.random() * (4 - 1) + 1);
}

// FUNCION USUARIO

function cachipunUsuario(){
    let jugada = (prompt("Elige piedra | papel | tijera]")).toLowerCase();

    if (jugada == "piedra") {
        return piedra;
    }else if (jugada == "papel"){
        return papel;
    }else if (jugada == "tijera"){
        return tijera;
    }else{
        return false;    
    }

    return jugada;
}

// FUNCION DE RONDAS

function rondas(){
    let jugadas = Number(prompt("¿Cuantas partidas desea jugar?"));
    return jugadas;
}

// FUNCION DE JUGADA

function jugar(){
    let jugadas = rondas();

    console.log("Iniciando el juego:")
    for (let i = 0; i < jugadas; i++) {
        let jugadaUsuario = cachipunUsuario();
        let jugadaMaquina = cachipunMaquina();

        if (!jugadaUsuario){
            alert ("¡Jugada inválida!");
            break;
        }

        console.log("¡Jugada finalizada!");

        if (jugadaUsuario == jugadaMaquina){
            contadorEmpates++;
            console.log("Empate, tu jugada fue " +jugadaUsuario+ " y la maquina jugó " +jugadaMaquina+ ".")
        }else if ((jugadaUsuario == piedra & jugadaMaquina == tijera) || (jugadaUsuario == papel & jugadaMaquina == piedra) || (jugadaUsuario == tijera & jugadaMaquina == papel)){
            contadorHumano++;
            console.log("¡Has ganado! Tu jugada fue " +jugadaUsuario+ " y la maquina jugó " +jugadaMaquina+ ".")
        }else{
            contadorMaquina++;
            console.log("¡Has perdido! Tu jugada fue " +jugadaUsuario+ " y la maquina jugó " +jugadaMaquina+ ".")
        }
    }

    console.log("RESULTADO FINAL | Tu puntaje: " +contadorHumano+ " | Puntaje maquina: " +contadorMaquina+ " | Empates: " +contadorEmpates)
}

// INICIALIZACIÓN JUEGO

jugar();