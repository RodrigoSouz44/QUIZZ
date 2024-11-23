const perguntas = [
    {
        texto: "Qual o lugar mais profundo dos oceanos?",
        opcoes: ["A) Fossa de Java", "B) Fossa das Ilhas Sandwich", "C) Fossa das Marianas"],
        respostaCorreta: "C"
    },
    {
        texto: "Quanto tempo durou o regime do apartheid na África do Sul?",
        opcoes: ["A) 46 anos", "B) 37 anos", "C) 22 anos"],
        respostaCorreta: "B"
    },
    {
        texto: "Qual o nome do amigo que Bentinho imagina ser o pai de seu filho em Dom Casmurro?",
        opcoes: ["A) Escobar", "B) Espinosa", "C) Esteves"],
        respostaCorreta: "A"
    },
    {
        texto: "Quantos pares de costelas um ser humano normalmente possui?",
        opcoes: ["A) 12", "B) 16", "C) 10"],
        respostaCorreta: "A"
    },
    {
        texto: "Quais planetas do sistema solar realizam seu movimento de rotação em sentido horário?",
        opcoes: ["A) Saturno e Júpiter", "B) Vênus e Urano", "C) Terra e Marte"],
        respostaCorreta: "B"
    },
    {
        texto: "Qual o nome do evento astronômico responsável pelo dia mais longo do ano?",
        opcoes: ["A) Equinócio de outono", "B) Solstício de inverno", "C) Solstício de verão"],
        respostaCorreta: "C"
    },
    {
        texto: "Qual das alternativas contém o significado correto de CPI?",
        opcoes: ["A) Comissão Parlamentar de Inquérito", "B) Centro Parlamentar de Investigação", "C) Câmara Parlamentar de Intervenção"],
        respostaCorreta: "A"
    },
    {
        texto: "Que atleta é o detentor do recorde de medalhas olímpicas?",
        opcoes: ["A) Usain Bolt", "B) Carl Lewis", "C) Michael Phelps"],
        respostaCorreta: "C"
    },
    {
        texto: "Quem foi o inventor da vacina?",
        opcoes: ["A) Edward Jenner", "B) Louis Pasteur", "C) Albert Sabin"],
        respostaCorreta: "A"
    },
    {
        texto: "Qual dos países abaixo localizam-se em dois continentes?",
        opcoes: ["A) Egito", "B) Paquistão", "C) Escócia"],
        respostaCorreta: "A"
    }
];

let perguntaAtual = 0;
let acertos = 0;

function exibirPergunta() {
    const pergunta = perguntas[perguntaAtual];
    document.getElementById('perguntaTitulo').innerText = `Pergunta ${perguntaAtual + 1}`;
    document.getElementById('perguntaTexto').innerText = pergunta.texto;
    document.querySelector('.opcoes').innerHTML = pergunta.opcoes.map((opcao, i) => 
        `<button onclick="verificarResposta('${String.fromCharCode(65 + i)}')">${opcao}</button>`
    ).join('');
    document.getElementById('resposta').innerText = ''; 
    document.getElementById('resposta').classList.remove('visible');
    atualizarProgresso();
}

function verificarResposta(respostaEscolhida) {
    const respostaElemento = document.getElementById('resposta');
    const respostaCorreta = perguntas[perguntaAtual].respostaCorreta;

    if (respostaEscolhida === respostaCorreta) {
        respostaElemento.innerText = "Correto!";
        acertos++;
    } else {
        respostaElemento.innerText = "Errado!";
    }

    respostaElemento.classList.add('visible');
    setTimeout(proximaPergunta, 2000); 
}

function atualizarProgresso() {
    const progresso = (perguntaAtual / perguntas.length) * 100;
    document.getElementById('progress').style.width = progresso + '%';
}

function proximaPergunta() {
    perguntaAtual++;
    if (perguntaAtual < perguntas.length) {
        exibirPergunta();
    } else {
        finalizarQuiz();
    }
}

function finalizarQuiz() {
    document.querySelector('.container').innerHTML = `
        <h1>Fim do Quiz!</h1>
        <p>Você acertou ${acertos} de ${perguntas.length} perguntas.</p>
        <button onclick="reiniciarQuiz()">Reiniciar</button>
    `;
}

function reiniciarQuiz() {
    perguntaAtual = 0;
    acertos = 0;
    exibirPergunta();
}

// Inicializa o quiz
document.addEventListener('DOMContentLoaded', () => {
    exibirPergunta();
});

