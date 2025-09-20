const componentes = document.querySelectorAll('.componente');

componentes.forEach((div) => {
    div.addEventListener('mouseover', () => {
        div.style.transform = 'scale(1.1)'; 
        div.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.5)'; 
        div.style.transition = 'transform 0.3s, box-shadow 0.3s';
    });


    div.addEventListener('mouseout', () => {
        div.style.transform = 'scale(1)'; 
        div.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.2)'; 
    });
});

// Quiz funcionality

const questions = [
    // Questões sobre PROCESSADOR (CPU)
    {
        question: "Qual é o apelido dado ao processador (CPU) e por quê?",
        answers: [
            { id: 1, text: "Coração do computador, pois bombeia dados", correct: false },
            { id: 2, text: "Cérebro do computador, pois executa instruções e processa dados", correct: true },
            { id: 3, text: "Pulmão do computador, pois respira dados", correct: false },
            { id: 4, text: "Estômago do computador, pois digere informações", correct: false },
        ],
    },
    {
        question: "Quais são as três etapas básicas do funcionamento da CPU?",
        answers: [
            { id: 1, text: "Busca, Armazenamento e Saída", correct: false },
            { id: 2, text: "Entrada, Processamento e Saída", correct: false },
            { id: 3, text: "Busca (Fetch), Decodificação (Decode) e Execução (Execute)", correct: true },
            { id: 4, text: "Leitura, Escrita e Apagamento", correct: false },
        ],
    },
    {
        question: "Qual componente da CPU é responsável por operações matemáticas e lógicas?",
        answers: [
            { id: 1, text: "Unidade de Controle (CU)", correct: false },
            { id: 2, text: "Unidade Lógica e Aritmética (ALU)", correct: true },
            { id: 3, text: "Registradores", correct: false },
            { id: 4, text: "Cache", correct: false },
        ],
    },
    {
        question: "O que são os núcleos (cores) de um processador?",
        answers: [
            { id: 1, text: "São ventiladores internos da CPU", correct: false },
            { id: 2, text: "São 'mini CPUs' dentro do processador que permitem processamento simultâneo", correct: true },
            { id: 3, text: "São conectores externos da CPU", correct: false },
            { id: 4, text: "São memórias de armazenamento da CPU", correct: false },
        ],
    },

    // Questões sobre MEMÓRIA RAM
    {
        question: "O que significa a sigla RAM?",
        answers: [
            { id: 1, text: "Rapid Access Memory", correct: false },
            { id: 2, text: "Random Access Memory", correct: true },
            { id: 3, text: "Read And Memory", correct: false },
            { id: 4, text: "Real Active Memory", correct: false },
        ],
    },
    {
        question: "Qual é a principal característica da memória RAM?",
        answers: [
            { id: 1, text: "É permanente e mantém dados mesmo com o computador desligado", correct: false },
            { id: 2, text: "É volátil e perde dados quando o computador é desligado", correct: true },
            { id: 3, text: "Só pode ser lida, não pode ser alterada", correct: false },
            { id: 4, text: "Armazena apenas o sistema operacional", correct: false },
        ],
    },
    {
        question: "O que acontece quando há pouca RAM disponível?",
        answers: [
            { id: 1, text: "O computador para de funcionar completamente", correct: false },
            { id: 2, text: "O computador usa o disco rígido como 'memória virtual' (swap), ficando mais lento", correct: true },
            { id: 3, text: "A CPU para de processar dados", correct: false },
            { id: 4, text: "Nada acontece, não há diferença", correct: false },
        ],
    },

    // Questões sobre PLACA-MÃE
    {
        question: "Por que a placa-mãe é chamada de 'coração do computador'?",
        answers: [
            { id: 1, text: "Porque ela processa todos os dados", correct: false },
            { id: 2, text: "Porque conecta e integra todos os componentes, permitindo comunicação entre eles", correct: true },
            { id: 3, text: "Porque armazena todos os arquivos", correct: false },
            { id: 4, text: "Porque resfria os componentes", correct: false },
        ],
    },
    {
        question: "Qual NÃO é uma função da placa-mãe mencionada no projeto?",
        answers: [
            { id: 1, text: "Conexão entre componentes", correct: false },
            { id: 2, text: "Distribuição de energia", correct: false },
            { id: 3, text: "Processamento de dados complexos", correct: true },
            { id: 4, text: "Gestão do sistema através do BIOS/UEFI", correct: false },
        ],
    },

    // Questões sobre DISCO RÍGIDO
    {
        question: "Qual é a diferença principal entre HDD e SSD?",
        answers: [
            { id: 1, text: "HDD é mais rápido que SSD", correct: false },
            { id: 2, text: "HDD usa partes mecânicas, SSD usa memória flash", correct: true },
            { id: 3, text: "SSD é mais barato que HDD", correct: false },
            { id: 4, text: "Não há diferença entre eles", correct: false },
        ],
    },
    {
        question: "O que significa dizer que o disco rígido é 'não volátil'?",
        answers: [
            { id: 1, text: "Ele perde dados quando o computador é desligado", correct: false },
            { id: 2, text: "Ele guarda dados permanentemente até serem alterados ou excluídos", correct: true },
            { id: 3, text: "Ele não pode ser alterado", correct: false },
            { id: 4, text: "Ele só funciona quando conectado à internet", correct: false },
        ],
    },
    {
        question: "Quais são os principais componentes internos de um HDD?",
        answers: [
            { id: 1, text: "Pratos magnéticos, cabeça de leitura/gravação, motor e controlador", correct: true },
            { id: 2, text: "Apenas pratos magnéticos", correct: false },
            { id: 3, text: "CPU, RAM e ROM", correct: false },
            { id: 4, text: "Transistores e capacitores", correct: false },
        ],
    },

    // Questões sobre GABINETE
    {
        question: "Quais são as principais funções do gabinete?",
        answers: [
            { id: 1, text: "Apenas proteção física dos componentes", correct: false },
            { id: 2, text: "Proteção física, organização, ventilação e estética", correct: true },
            { id: 3, text: "Somente ventilação e resfriamento", correct: false },
            { id: 4, text: "Apenas decoração e aparência", correct: false },
        ],
    },
    {
        question: "Por que a ventilação é uma função importante do gabinete?",
        answers: [
            { id: 1, text: "Para fazer barulho e indicar que está funcionando", correct: false },
            { id: 2, text: "Para dissipar o calor e evitar superaquecimento dos componentes", correct: true },
            { id: 3, text: "Para manter o computador frio ao toque", correct: false },
            { id: 4, text: "Para economizar energia elétrica", correct: false },
        ],
    },
    {
        question: "O que inclui tipicamente o painel frontal do gabinete?",
        answers: [
            { id: 1, text: "Apenas o botão de energia", correct: false },
            { id: 2, text: "Botões de energia e reset, portas USB, entradas de áudio", correct: true },
            { id: 3, text: "Somente portas USB", correct: false },
            { id: 4, text: "Apenas ventiladores e sistema de resfriamento", correct: false },
        ],
    },
];


const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
	currentQuestionIndex = 0;
	score = 0;
	nextButton.innerHTML = "Próxima";
	showQuestion();
}

function resetState() {
	nextButton.style.display = "none";
	while (answerButtons.firstChild) {
		answerButtons.removeChild(answerButtons.firstChild);
	}
}

function showQuestion() {
	resetState();
	let currentQuestion = questions[currentQuestionIndex];
	let questionNo = currentQuestionIndex + 1;
	questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

	currentQuestion.answers.forEach((answer) => {
		const button = document.createElement("button");
		button.innerHTML = answer.text;
		button.dataset.id = answer.id;
		button.classList.add("btn");
		button.addEventListener("click", selectAnswer);
		answerButtons.appendChild(button);
	});

}
function selectAnswer(e) {
	answers = questions[currentQuestionIndex].answers;
	const correctAnswer = answers.filter((answer) => answer.correct == true)[0];

	const selectedBtn = e.target;
	const isCorrect = selectedBtn.dataset.id == correctAnswer.id;
	if (isCorrect) {
		selectedBtn.classList.add("correct");
		score++;
	} else {
		selectedBtn.classList.add("incorrect");
	}
	Array.from(answerButtons.children).forEach((button) => {
		button.disabled = true;
	});
	nextButton.style.display = "block";
}

function showScore() {
	resetState();
	questionElement.innerHTML = `Você acertou! ${score} de ${questions.length}!`;
	nextButton.innerHTML = "Jogar novamente";
	nextButton.style.display = "block";
}

function handleNextButton() {
	currentQuestionIndex++;
	if (currentQuestionIndex < questions.length) {
		showQuestion();
	} else {
		showScore();
	}
}

nextButton.addEventListener("click", () => {
	if (currentQuestionIndex < questions.length) {
		handleNextButton();
	} else {
		startQuiz();
	}
});


startQuiz();