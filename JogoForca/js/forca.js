let palavraSecretaCategoria;
let palavraSecretaSortiada;
let listaDinamica = [];
let tentativas = 6;
let jogarNovamente = true;

const palavras = [
    palavra001={
        nome: "IRLANDA",
        categoria: "PAÍSES"
    },
    palavras002={
        nome: "BRASIL",
        categoria: "PAÍSES"
    },
    palavras003={
        nome: "ARGENTINA",
        categoria: "PAÍSES"
    },
    palavras004={
        nome: "HOLANDA",
        categoria: "PAÍSES"
    },
    palavras005={
        nome: "DINAMARCA",
        categoria: "PAÍSES"
    },
    palavras006={
        nome: "ESPANHA",
        categoria: "PAÍSES"
    },
    palavras007={
        nome: "NORUEGA",
        categoria: "PAÍSES"
    },
    palavras008={
        nome: "BELIZE",
        categoria :"PAÍSES"
    },
    palavras009={
        nome: "VENEZUELA",
        categoria: "PAÍSES"
    },
    palavras010={
        nome: "HONDURAS",
        categoria: "PAÍSES"
    },
    palavra011={
        nome: "BISCOITO",
        categoria: "COMIDAS"
    },
    palavras012={
        nome: "BOLACHA",
        categoria: "COMIDAS"
    },
    palavras013={
        nome: "GALINHADA",
        categoria: "COMIDAS"
    },
    palavras014={
        nome: "FEIJOADA",
        categoria: "COMIDAS"
    },
    palavras015={
        nome: "LASANHA",
        categoria: "COMIDAS"
    },
    palavras016={
        nome: "CHURRASCO",
        categoria: "COMIDAS"
    },
    palavras017={
        nome: "SUSHI",
        categoria: "COMIDAS"
    },
    palavras018={
        nome: "MACARRONADA",
        categoria :"COMIDAS"
    },
    palavras019={
        nome: "SALADA",
        categoria: "COMIDAS"
    },
    palavras020={
        nome: "PIZZA",
        categoria: "COMIDAS"
    },
    palavra021={
        nome: "COSTUREIRA",
        categoria: "PROFISSÕES"
    },
    palavras022={
        nome: "DENTISTA",
        categoria: "PROFISSÕES"
    },
    palavras023={
        nome: "PEDREIRO",
        categoria: "PROFISSÕES"
    },
    palavras024={
        nome: "ENFERMEIRA",
        categoria: "PROFISSÕES"
    },
    palavras025={
        nome: "PROFESSOR",
        categoria: "PROFISSÕES"
    },
    palavras026={
        nome: "DIARISTA",
        categoria: "PROFISSÕES"
    },
    palavras027={
        nome: "ADVOGADO",
        categoria: "PROFISSÕES"
    },
    palavras028={
        nome: "COZINHEIRA",
        categoria :"PROFISSÕES"
    },
    palavras029={
        nome: "NUTRICIONISTA",
        categoria: "PROFISSÕES"
    },
    palavras030={
        nome: "CONTADOR",
        categoria: "PROFISSÕES"
    },
    palavra031={
        nome: "CARRO",
        categoria: "TRANSPORTE"
    },
    palavras032={
        nome: "MOTO",
        categoria: "TRANSPORTE"
    },
    palavras033={
        nome: "ONIBUS",
        categoria: "TRANSPORTE"
    },
    palavras034={
        nome: "CARRETA",
        categoria: "TRANSPORTE"
    },
    palavras035={
        nome: "BICICLETA",
        categoria: "TRANSPORTE"
    },
    palavras036={
        nome: "TREM",
        categoria: "TRANSPORTE"
    },
    palavras037={
        nome: "BARCO",
        categoria: "TRANSPORTE"
    },
    palavras038={
        nome: "NAVIO",
        categoria :"TRANSPORTE"
    },
    palavras039={
        nome: "AVIAO",
        categoria: "TRANSPORTE"
    },
    palavras040={
        nome: "HELICOPTERO",
        categoria: "TRANSPORTE"
    },
    palavra041={
        nome: "AMARELO",
        categoria: "CORES"
    },
    palavras042={
        nome: "VERMELHO",
        categoria: "CORES"
    },
    palavras043={
        nome: "LARANJA",
        categoria: "CORES"
    },
    palavras044={
        nome: "DOURADO",
        categoria: "CORES"
    },
    palavras045={
        nome: "VERDE",
        categoria: "CORES"
    },
    palavras046={
        nome: "MARROM",
        categoria: "CORES"
    },
    palavras047={
        nome: "PRETO",
        categoria: "CORES"
    },
    palavras048={
        nome: "BRANCO",
        categoria :"CORES"
    },
    palavras049={
        nome: "ROXO",
        categoria: "CORES"
    },
    palavras050={
        nome: "ROSA",
        categoria: "CORES"
    },
    palavra051={
        nome: "UM SONHO DE LIBERDADE",
        categoria: "FILMES"
    },
    palavras052={
        nome: "GUERRA NAS ESTRELAS",
        categoria: "FILMES"
    },
    palavras053={
        nome: "DE VOLTA PARA O FUTURO",
        categoria: "FILMES"
    },
    palavras054={
        nome: "CLUBE DA LUTA",
        categoria: "FILMES"
    },
    palavras055={
        nome: "DURO DE MATAR",
        categoria: "FILMES"
    },
    palavras056={
        nome: "O FRANCO ATIRADOR",
        categoria: "FILMES"
    },
    palavras057={
        nome: "A BELA E A FERA",
        categoria: "FILMES"
    },
    palavras058={
        nome: "TRUQUE DE MESTRE",
        categoria :"FILMES"
    },
    palavras059={
        nome: "UMA MENTE BRILHANTE",
        categoria: "FILMES"
    },
    palavras060={
        nome: "PROCURANDO NEMO",
        categoria: "FILMES"
    }

]

criarPalavraSecreta()
function criarPalavraSecreta(){
    const indexPalavra = parseInt(Math.random() * palavras.length)

    palavraSecretaSortiada = palavras[indexPalavra].nome;
    palavraSecretaCategoria = palavras[indexPalavra].categoria;

    console.log(palavraSecretaCategoria)
    console.log(palavraSecretaSortiada)
}

montarPalavraNaTela();
function montarPalavraNaTela(){
    const categoria = document.getElementById("categoria");
    categoria.innerHTML = palavraSecretaCategoria;

    const palavra = document.getElementById("palavra-secreta");
    palavra.innerHTML = "";

    for(i = 0; i < palavraSecretaSortiada.length; i++){
        if(listaDinamica[i] == undefined){
            if(palavraSecretaSortiada[i] == " "){
                listaDinamica[i] = " ";
                palavra.innerHTML = palavra.innerHTML + "<div class='letrasEspaco'>" + listaDinamica[i] + "</div>"
            }else{
            listaDinamica[i] = "&nbsp"
            palavra.innerHTML = palavra.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
            }
        }else{
            if(palavraSecretaSortiada[i] == " "){
                listaDinamica[i] = " ";
                palavra.innerHTML = palavra.innerHTML + "<div class='letrasEspaco'>" + listaDinamica[i] + "</div>"
            }else{
                palavra.innerHTML = palavra.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
            }
        }        
    }
}

function verificaLetraEscolhida(letra){
    document.getElementById("tecla-" + letra).disabled = true;
    
    if(tentativas > 0){
        mudarStyleLetra("tecla-" + letra, false);
        comparaLista(letra);
        montarPalavraNaTela();
    } 
}

function mudarStyleLetra(tecla, condicao){
    if(condicao == false){
        document.getElementById(tecla).style.background = "#C71585";
        document.getElementById(tecla).style.color = "#ffffff";
    }else{
        document.getElementById(tecla).style.background = "#30CB01";
        document.getElementById(tecla).style.color = "#ffffff";
    }
    
}

function comparaLista(letra){
    const pos = palavraSecretaSortiada.indexOf(letra)

    if(pos < 0){
        tentativas--;
        carregaImagemForca();
        if(tentativas == 0){
            abreModal("OPS!!!", "Não foi dessa vez... <br> A palavra secreta era " + palavraSecretaSortiada);
            piscarBotaoJogarNovamente();
        }
    }else{
        mudarStyleLetra("tecla-" + letra, true);
        for(i = 0; i < palavraSecretaSortiada.length; i++){
            if(palavraSecretaSortiada[i] == letra){
                listaDinamica[i] = letra;
            }
        }
    }

    let vitoria = true;
    for(i = 0; i < palavraSecretaSortiada.length; i++){
        if(palavraSecretaSortiada[i] != listaDinamica[i]){
           vitoria = false;
        }
    }

    if(vitoria == true){
        abreModal("OBA!!!", "Você venceu");
        tentativas = 0;

        piscarBotaoJogarNovamente();

    }
}

async function piscarBotaoJogarNovamente(){
    while(jogarNovamente == true){
        document.getElementById("btnreiniciar").style.backgroundColor = 'red';
        document.getElementById("btnreiniciar").style.scale = 1.3;            
        await atraso(500);
        document.getElementById("btnreiniciar").style.backgroundColor = 'yellow';
        document.getElementById("btnreiniciar").style.scale = 1.3; 
        await atraso(500);
    }
}

async function atraso(tempo){
    return new Promise(x => setTimeout(x, tempo));
}

function carregaImagemForca(){
    switch(tentativas){
        case 5:
            document.getElementById("imagem").style.background = "url('./imagem/forca01.png')";
            break;
        case 4:
            document.getElementById("imagem").style.background = "url('./imagem/forca02.png')";
            break;
        case 3:
            document.getElementById("imagem").style.background = "url('./imagem/forca03.png')";
            break;
        case 2:
            document.getElementById("imagem").style.background = "url('./imagem/forca04.png')";
            break;
        case 1:
            document.getElementById("imagem").style.background = "url('./imagem/forca05.png')";
            break;
        case 0:
            document.getElementById("imagem").style.background = "url('./imagem/forca06.png')";
            break;
        default:
            document.getElementById("imagem").style.background = "url('./imagem/forca.png')"; 
    }
}

function abreModal(titulo, mensagem){

    let modalTitulo = document.getElementById("exampleModalLabel");
    modalTitulo.innerText = titulo;

    let modalBody = document.getElementById("modalBody");
    modalBody.innerHTML = mensagem;

    $("#myModal").modal({
        show: true
    });
}

let btnReinicializar = document.querySelector("#btnreiniciar")

btnReinicializar.addEventListener("click", function(){
    jogarNovamente = false;
    location.reload();
});