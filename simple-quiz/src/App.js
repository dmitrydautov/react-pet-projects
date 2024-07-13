import './App.css';
import { useState } from 'react';

const questionsData = require('./allQuestions.json');
const allQuestionsNumber = Object.entries(questionsData).length;
let correctAnswersNumberInitial = 0;
let correctAnswersNumber = 0;
let progress = 0;
let questionId = 0;

function QuizWindowComponent({ question }) {
	const [progressValue, setProgressValue] = useState(progress);
	const [correctAnswersNumber, setCorrectAnswersNumber] = useState(correctAnswersNumberInitial);
	const [questionNumber, setQuestionNumber] = useState(questionId);
	let currentQuestion = questionsData[questionId];

	const checkAnswer = (option) => {
		const optionId = Number(option.target.id);
		const optionElement = document.getElementById(optionId);
		const allOptions = Array.prototype.slice.call(document.getElementsByTagName('li'));
		const allNotSelectedOptions = allOptions.toSpliced(optionId, 1);
		allNotSelectedOptions.map(option => option.className = 'disabled-option');

		if (question.correctAnswerIndex === optionId) {
			if (optionElement !== null) optionElement.className = 'correctAnswer';
			setCorrectAnswersNumber(correctAnswersNumber + 1);
		} else {
			if (optionElement !== null) optionElement.className = 'wrongAnswer';
		}

		setTimeout(() => {
			optionElement.removeAttribute('class');
			allNotSelectedOptions.map(option => option.classList.remove("disabled-option"));
			setQuestionNumber(currentQuestion + 1);
			setProgressValue(progressValue + 100 / (allQuestionsNumber - 1));
		}, 1000);

	}
	return (
		<div id="question-window">
			<progress id="quiz-progress-bar" value={progressValue} max="100"></progress>
			<h1>{question.title}</h1>
			<ul id="question-options">
				{Object.entries(question.options).map(([index, value]) => (
					<li key={index} id={index} onClick={checkAnswer}>{value}</li>
				))}
			</ul>
		</div>
	);
}

function QuizResultWindowComponent({ correctAnswersNumber }) {
	return (
		<div id="result">
			<img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" alt='' />
			<h2>You answered {correctAnswersNumber} questions correctly!</h2>
			<a href="/">
				<button>Play again</button>
			</a>
		</div>
	);
}

export default function App({ currentQuestion }) {
	const [isQuizFinished, setQuizFinish] = useState(false);

	// if (questionId < allQuestionsNumber - 1) {
	// 	setQuestionNumber(questionNumber + 1);
	// } else {
	// 	setQuizFinish(true);
	// }

	return (
		<div className="App">
			{/* <QuizWindowComponent question={currentQuestion} /> */}
			{/* {isQuizFinished ? <QuizResultWindowComponent quizResult={correctAnswers} /> : <QuizWindowComponent question={currentQuestion} />} */}
			{<QuizResultWindowComponent quizResult={correctAnswersNumber} />}
		</div>
	);
}