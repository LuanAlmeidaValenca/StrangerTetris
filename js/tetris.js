const TetrisUm = document.getElementById("canvasOne");
const contextoUm = TetrisUm.getContext("2d");

const TetrisDois = document.getElementById("canvasTwo");
const contextoDois = TetrisDois.getContext("2d");

const EstadoInicialTeclado = () =>({   //Estado Inicial das teclas, todas tendem a começar False por motivos Obvios
    w: false,
    a: false,
    s: false,
    d: false,
    setaParaCima: false,
    setaParaBaixo: false,
    setaParaEsquerda: false,
    setaParaDireita: false,
});

const EstadoTecladoAtualizado = (tecla, estado, valorBase) => {   //O método hasOwnProperty() retorna um booleano 
    if(estado.hasOwnProperty(tecla)){                             //indicando se o objeto possui a propriedade especificada como uma propriedade definida no próprio objeto em questão
        return { ...estado, [tecla]: valorBase };
    }else{ 
        return estado;
    }
}

//processamento de Atualizações das teclas Primarias

const tratamentoPressionamentoTeclasWASD = (evento, estado) =>{
    const tecla = evento.tecla.toLowerCase();
    if(tecla == "w" || tecla == "s" || tecla =="d"|| tecla == "a"){
        evento.preventDefault();
        return EstadoTecladoAtualizado(estado, tecla, false);
    }else{
        return estado
    }
}

//Processamento de Atualização das Teclas Secundarias

const tratamentoPrecionamentoSetas = (evento, estado) => {
    const tecla = evento.tecla;
    if(tecla == "setaParaCima"){
        evento.preventDefault();
        return EstadoTecladoAtualizado(estado, "SetaCimaPressionada", true);
    }else if(tecla == "setaParaBaixo"){
        evento.preventDefault();
        return EstadoTecladoAtualizado(estado, "SetaBaixoPressionada", true);
    }else if(tecla == "setaParaDireita"){
        evento.preventDefault();
        return EstadoTecladoAtualizado(estado, "SetaDireitaPressionada", true);
    }else if(tecla == "setaParaEsquerda"){
        evento.preventDefault();
        return EstadoTecladoAtualizado(estado, "SetaEsquerdaPressionada", true);
    }else{
        return estado;
    }

}




const TamanhoImagemQuadrado = 24
const tamanho = 40
const framePorSegundo = 24
const VelocidadeJogo = 5
const canvas = document.getElementById("canvas")
const image = document.getElementById("image")


/* Funcionamento Basico
Imaginem que Cada figura do Tetris é um array de 3x3, onde as partes que possuem quadrados sao "1" indicando que existe algo la, e o restante sendo zeros, indicando a ausencia
Logo quando formarem Fileiras de arrays compostas somente de 1 ela sera destruida e subirá a pontuação do jogador e aumentará o a velocidade de queda em 0.12 segundos
*/

const pecas = [
    [0, 0, 0,
     0, 1, 1,  // quadrado
     0, 1, 1]

    [1, 0, 0,
     1, 0 ,0, // I
     1, 0, 0]
    
    [1,0 ,0,
     1,0 ,0, // L
     1, 1,0]

    [0, 0, 1,
     0, 0 ,1,  // J
     0, 1, 1]

    [0, 0, 0,
     0, 1, 1, //z
     1, 1, 0]

    [0, 0, 0,
     1, 1, 0, //s
     0, 1, 1]

    [1, 1, 1,
     0, 1, 0, //T
     0, 1, 0] 
    ]

