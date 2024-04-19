function verificarTime() {
  
  var continuarPerguntando = true;

  while (continuarPerguntando) {
    
    var respostaTime = prompt("Qual o seu filme de terror favorito, Cassie?");

    
    if (respostaTime.toLowerCase() === "Halloween") {
      alert("Que maravilha! É sempre bom receber um fã de filmes de terror");
      continuarPerguntando = false; // Sai do loop após a resposta correta
    } else {
      alert("Resposta errada, Cassie. Mais cuidado nas próximas tentativas.");
    }
  }
}