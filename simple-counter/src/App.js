import { useState } from 'react';
import './App.css';

function App() {
	let initialValue = 0;
	const [counterValue, setValue] = useState(initialValue);

	const increaseCounter = () => {
		setValue(counterValue + 1);
	}

	const decreaseCounter = () => {
		setValue(counterValue - 1);
	}

	return (
		<div className="App">
			<div>
				<h2>Simple Counter</h2>
				<h1>{counterValue}</h1>
				<button id='decreaseButton' onClick={decreaseCounter}>-</button>
				<button id='increaseButton' onClick={increaseCounter}>+</button>
			</div>
		</div>
	);
}

export default App;