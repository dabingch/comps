import ReactDOM from 'react-dom'

function Modal({ onClose }) {
	// * This is a portal. It is a way to render a component outside of the
	// * parent component. In this case, we are rendering the modal outside
	return ReactDOM.createPortal(
		<div>
			<div
				onClick={onClose}
				className='absolute inset-0 bg-gray-300 opacity-80'
			></div>
			<div className='absolute inset-40 p-10 bg-white'>
				I am a modal!!
			</div>
		</div>,
		// * Target element
		document.querySelector('.modal-container')
	)
}

export default Modal
