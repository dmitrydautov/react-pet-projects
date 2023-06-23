export const ModalWindow = ({ open, children }) => (
	<div className={`overlay animated ${open ? 'show' : ''}`}>
		<div id="modal">
			{children}
		</div>
	</div>);