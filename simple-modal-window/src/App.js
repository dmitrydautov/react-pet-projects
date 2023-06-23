import './App.css';
import React from 'react';
import { ModalWindow } from './ModalWindow';

function App() {
	const [open, setOpen] = React.useState(false);
	const modalWindow = document.getElementById('modal');
	const closeButton = document.getElementById('close-button');

	document.addEventListener(
		"click",
		function (event) {
			setOpen(!((event.target.contains(modalWindow) && event.target !== modalWindow) || (event.target.contains(closeButton) && event.target === closeButton)));
		},
		false
	)

	return (
		<div className="App">
			<button id='open-button' onClick={() => setOpen(true)}>Open modal window</button>
			<ModalWindow open={open} setOpen={setOpen}>
				<h3>This is simple modal window</h3>
				<img src="https://unsplash.com/photos/G_AlAJuHEd8/download?ixid=M3wxMjA3fDB8MXxhbGx8Njd8fHx8fHwyfHwxNjg3MjM5MDQyfA&force=true&w=640" alt="" />
				<button id='close-button' onClick={() => setOpen(false)}>Close modal window</button>
			</ModalWindow>
		</div >
	);
}

export default App;