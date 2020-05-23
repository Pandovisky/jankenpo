class jogadas {
    constructor(number, cssClass) {
        this.number = number;
        this.class = cssClass;
    }
}

var pedra = new jogadas(1, 'pedra');
var tesoura = new jogadas(2, 'tesoura');
var papel = new jogadas(3, 'papel');
var player
var bot

function escolher(id){
    var escolha = document.getElementById(id)

    if (escolha.id === 'pedra') {
        document.getElementById('player').classList.add(pedra.class)
        player = 1
    } else if (escolha.id === 'tesoura') {
        document.getElementById('player').classList.add(tesoura.class)
        player = 2
    } else if (escolha.id === 'papel') {
        document.getElementById('player').classList.add(papel.class)
        player = 3
    }
    jogadabot();
    vitoria();
}

function jogadabot(){
    var jogada = Math.floor((Math.random() * 3) + 1);

    if (jogada === pedra.number) {
        document.getElementById('bot').classList.add(pedra.class)
        bot = 1
    }
    if (jogada === tesoura.number) {
        document.getElementById('bot').classList.add(tesoura.class)
        bot = 2
    }
    if (jogada === papel.number) {
        document.getElementById('bot').classList.add(papel.class)
        bot = 3
    } 
}

function vitoria() {
var resultado = bot - player

 if (resultado === 0) {
    document.getElementById('resultado').innerText = "Foi um empate!"
 } else if (resultado === 1 || resultado === -2) {
    document.getElementById('resultado').innerText = "Você ganhou!"
 } else {
    document.getElementById('resultado').innerText = "Você perdeu!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"
 }

 document.getElementById('gameend').classList.add('active')
}

function reset () {
    document.getElementById('player').classList.remove(pedra.class)
    document.getElementById('player').classList.remove(papel.class)
    document.getElementById('player').classList.remove(tesoura.class)
    document.getElementById('bot').classList.remove(pedra.class)
    document.getElementById('bot').classList.remove(papel.class)
    document.getElementById('bot').classList.remove(tesoura.class)
    document.getElementById('gameend').classList.remove('active')
}