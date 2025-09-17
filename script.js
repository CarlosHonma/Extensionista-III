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
	{
		question: "Qual foi o primeiro Pokémon criado no desenvolvimento da franquia?",
		answers: [
			{ id: 1, text: "Pikachu", correct: false },
			{ id: 2, text: "Bulbasaur", correct: false },
			{ id: 3, text: "Rhydon", correct: true },
			{ id: 4, text: "Charmander", correct: false },
		],
	},
	{
		question: "Quantos tipos de Pokémon existem atualmente?",
		answers: [
			{ id: 1, text: "17 tipos", correct: false },
			{ id: 2, text: "18 tipos", correct: false },
			{ id: 3, text: "19 tipos", correct: true },
			{ id: 4, text: "20 tipos", correct: false },
		],
	},
	{
		question: "Qual pokémon pode evoluir para mais formas diferentes?",
		answers: [
			{ id: 1, text: "Ditto", correct: false },
			{ id: 2, text: "Eevee", correct: true },
			{ id: 3, text: "Tyrogue", correct: true },
			{ id: 4, text: "Burmy", correct: false },
		],
	},
	{
		question: "Em qual geração foi introduzido o tipo Fairy?",
		answers: [
			{ id: 1, text: "Geração IV", correct: false },
			{ id: 2, text: "Geração V", correct: false },
			{ id: 3, text: "Geração VI", correct: true },
			{ id: 4, text: "Geração VII", correct: false },
		],
	},
	{
		question: "Qual é o tipo mais raro de Pokémon?",
		answers: [
			{ id: 1, text: "Dragon", correct: false },
			{ id: 2, text: "Ghost", correct: false },
			{ id: 3, text: "Ice", correct: true },
			{ id: 4, text: "Steel", correct: false },
		],
	},
	{
		question: "Qual Pokémon lendário foi revelado primeiro na história da franquia?",
		answers: [
			{ id: 1, text: "Mew", correct: false },
			{ id: 2, text: "Mewtwo", correct: false },
			{ id: 3, text: "Ho-Oh", correct: true },
			{ id: 4, text: "Lugia", correct: false },
		],
	},
	{
		question: "Quantos Pokémon originais foram introduzidos na Geração 1?",
		answers: [
			{ id: 1, text: "150", correct: false },
			{ id: 2, text: "151", correct: true },
			{ id: 3, text: "149", correct: false },
			{ id: 4, text: "152", correct: false },
		],
	},
	{
		question: "Qual é o Pokémon mais pesado?",
		answers: [
			{ id: 1, text: "Snorlax", correct: false },
			{ id: 2, text: "Groudon", correct: false },
			{ id: 3, text: "Celesteela", correct: true },
			{ id: 4, text: "Steelix", correct: false },
		],
	},
	{
		question: "Qual é o único Pokémon que pode aprender o movimento 'Splash'?",
		answers: [
			{ id: 1, text: "Magikarp", correct: false },
			{ id: 2, text: "Feebas", correct: false },
			{ id: 3, text: "Ditto", correct: false },
			{ id: 4, text: "Todos os Pokémon podem aprender Splash", correct: true },
		],
	},
	{
		question: "Qual é o Pokémon mais rápido?",
		answers: [
			{ id: 1, text: "Deoxys (Forma Velocidade)", correct: true },
			{ id: 2, text: "Ninjask", correct: false },
			{ id: 3, text: "Electrode", correct: false },
			{ id: 4, text: "Pheromosa", correct: false },
		],
	},

]


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