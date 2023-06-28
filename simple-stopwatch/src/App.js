import './App.css';
import { useState, useEffect } from 'react';

function App() {
	let initialSeconds = 0;
	const START_LABEL = 'Start';
	const PAUSE_LABEL = 'Pause';
	const RESET_LABEL = 'Reset';

	const [seconds, setSeconds] = useState(initialSeconds);
	const [isRunning, setRun] = useState(false);

	useEffect(() => {
		let interval;
		if (isRunning) {
			interval = setInterval(() => {
				setSeconds((sec) => sec + 1);
			}, 1000);
		} else {
			clearInterval(interval);
		}
		return () => clearInterval(interval);
	}, [isRunning]);

	const startStopWatch = () => {
		let isStopWatchStarted = document.getElementById('start').innerHTML === START_LABEL;
		document.getElementById('start').innerHTML = isStopWatchStarted ? PAUSE_LABEL : START_LABEL;
		setRun(isStopWatchStarted);
	}

	const resetStopWatch = () => {
		if ((document.getElementById('start').innerHTML !== START_LABEL)) document.getElementById('start').innerHTML = START_LABEL;
		setRun(false);
		setSeconds(initialSeconds);
	}

	return (
		<div className="App">
			<h1>Simple Stopwatch</h1>
			<div className="center">
				<div id="seconds-frame">
					<h1>{seconds}</h1>
				</div>
				<button id='start' onClick={startStopWatch}>{START_LABEL}</button>
				<button id='reset' onClick={resetStopWatch}>{RESET_LABEL}</button>
			</div>
		</div>
	);
}

export default App;