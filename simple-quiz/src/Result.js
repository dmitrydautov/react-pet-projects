export default function Result({ quizResult }) {
	return (
		<div id="result">
			<img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" alt='' />
			<h2>You answered {quizResult} questions correctly</h2>
			<a href="/">
				<button>Play again</button>
			</a>
		</div>
	);
};