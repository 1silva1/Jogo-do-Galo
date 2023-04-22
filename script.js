var player = 1;

function jogo(nomeDoBotao){
    var player1Nome = document.getElementById("Nome1");
    var player2Nome = document.getElementById("Nome2");
    if (player1Nome.style.display == "none" && player2Nome.style.display == "none"){
        if (player == 1){
            var botao = document.getElementById(nomeDoBotao);
            if(botao.value == ""){
                botao.value = "X";
                botao.innerHTML="X";
                player =2;
                document.getElementById("vez").innerHTML=document.getElementById("PontuacaoNome2").value;
            }
    
        }
        else{
            var botao = document.getElementById(nomeDoBotao);
            if(botao.value == ""){
                botao.value = "O";
                botao.innerHTML="O";
                player =1;
                document.getElementById("vez").innerHTML=document.getElementById("PontuacaoNome1").value;
            }
        }
        win();
    }
    else{
        alert("Adiciona o nome dos jogadores!");
    }
}

function win(){
    var winner = -1;
    //horizontal
    if((document.getElementById(0).value=="X" && document.getElementById(1).value=="X" && document.getElementById(2).value=="X") || (document.getElementById(3).value=="X" && document.getElementById(4).value=="X" && document.getElementById(5).value=="X")  || (document.getElementById(6).value=="O" && document.getElementById(7).value=="X" && document.getElementById(8).value=="X") ){
        winner=1;
    }
    if((document.getElementById(0).value=="O" && document.getElementById(1).value=="O" && document.getElementById(2).value=="O") || (document.getElementById(3).value=="O" && document.getElementById(4).value=="O" && document.getElementById(5).value=="O")  || (document.getElementById(6).value=="O" && document.getElementById(7).value=="O" && document.getElementById(8).value=="O") ){
        winner=2;
    }
    //vertical
    if((document.getElementById(0).value=="X" && document.getElementById(3).value=="X" && document.getElementById(6).value=="X") || (document.getElementById(1).value=="X" && document.getElementById(4).value=="X" && document.getElementById(7).value=="X")  || (document.getElementById(2).value=="X" && document.getElementById(5).value=="X" && document.getElementById(8).value=="X") ){
        winner=1;
    }
    if((document.getElementById(0).value=="O" && document.getElementById(3).value=="O" && document.getElementById(6).value=="O") || (document.getElementById(1).value=="O" && document.getElementById(4).value=="O" && document.getElementById(7).value=="O")  || (document.getElementById(2).value=="O" && document.getElementById(5).value=="O" && document.getElementById(8).value=="O") ){
        winner=2;
    }

    //diagonal
    if((document.getElementById(0).value=="X" && document.getElementById(4).value=="X" && document.getElementById(8).value=="X") || (document.getElementById(2).value=="X" && document.getElementById(4).value=="X" && document.getElementById(6).value=="X") ){
        winner=1;
    }
    if((document.getElementById(0).value=="O" && document.getElementById(4).value=="O" && document.getElementById(8).value=="O") || (document.getElementById(2).value=="O" && document.getElementById(4).value=="O" && document.getElementById(6).value=="O") ){
        winner=2;
    }

    var soma = 0;
    for(var coluna=0; coluna < 9; coluna++){
            if((document.getElementById(coluna).value =="X" || document.getElementById(coluna).value == "O") && winner == -1){
                soma += 1;
            }   
    }

    if (soma == 9) winner = 3;

    if (winner!=-1){
        if (winner == 1){
        jogador = document.getElementById("Nome1").value;
        document.getElementsByClassName("TituloHistorico").innerHTML=jogador.toString()
        console.log(jogador);
        alert("O/A jogador(a) "+jogador + " ganhou!");}
        else if (winner == 2) {jogador = document.getElementById("Nome2").value;
        alert ("O/A jogador(a) "+jogador+" ganhou!");}
        else{
            alert("Empatou!");
            resetBoard();
        }
        var scoreToAlter=document.getElementById("scorePlayer"+winner).innerHTML;
        var currentPlayerScore = parseInt(scoreToAlter);
        currentPlayerScore=currentPlayerScore+1;
        document.getElementById("scorePlayer"+winner).innerHTML=currentPlayerScore.toString()
        resetBoard();
    }
}


function resetBoard(){
    for(var botao=0;botao<9;botao++){
        var element = document.getElementById(botao);
        element.innerHTML="";
        element.value="";
    }
}

function ChangeName(NomeDoPlayer){
    console.log(NomeDoPlayer);
    NomeDoPlayer.addEventListener("keypress", function(event){
        if (event.key == "Enter"){
            var nomeAnterior = document.getElementById("Pontuacao"+ NomeDoPlayer.id);
            nomeAnterior.innerHTML = "Pontuação "+NomeDoPlayer.value;
            NomeDoPlayer.style.display = "none";
            nomeAnterior.value = NomeDoPlayer.value;

        }
    })
    document.getElementById("vez").innerHTML=NomeDoPlayer.value.toString();


}