import { useState } from 'react'
import Modal from '../components/Modal'
import Button from '../components/Button'

function ModalPage() {
	const [showModal, setShowModal] = useState(false)

	const handleClick = () => setShowModal(true)

	const handleClose = () => setShowModal(false)

	const actionBar = (
		<div>
			<Button primary onClick={handleClose}>
				I Accept
			</Button>
		</div>
	)

	const modal = (
		<Modal onClose={handleClose} actionBar={actionBar}>
			<p>Here is some information</p>
		</Modal>
	)

	return (
		<div>
			<Button onClick={handleClick} primary>
				Open Modal
			</Button>
			{showModal && modal}
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
				voluptate soluta adipisci obcaecati odit veniam temporibus
				laborum impedit est saepe tempore necessitatibus eius blanditiis
				totam quod a iusto, maxime ipsum nam in culpa, et molestiae
				aspernatur! Ad nesciunt fugit pariatur, quis a in fuga dolorum
				tempora quisquam facere assumenda at ducimus veniam sit? Sit
				possimus ex, consequuntur quod, quia a alias fugiat delectus
				dolorem iste culpa natus quam quibusdam nihil hic velit, id
				accusantium? Ducimus eos eaque vel impedit dolorem quis in illo
				eveniet expedita consequuntur, explicabo facilis sequi nihil.
				Ratione aliquid doloribus atque eum est sunt molestias facere
				inventore.
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
				voluptate soluta adipisci obcaecati odit veniam temporibus
				laborum impedit est saepe tempore necessitatibus eius blanditiis
				totam quod a iusto, maxime ipsum nam in culpa, et molestiae
				aspernatur! Ad nesciunt fugit pariatur, quis a in fuga dolorum
				tempora quisquam facere assumenda at ducimus veniam sit? Sit
				possimus ex, consequuntur quod, quia a alias fugiat delectus
				dolorem iste culpa natus quam quibusdam nihil hic velit, id
				accusantium? Ducimus eos eaque vel impedit dolorem quis in illo
				eveniet expedita consequuntur, explicabo facilis sequi nihil.
				Ratione aliquid doloribus atque eum est sunt molestias facere
				inventore.
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
				voluptate soluta adipisci obcaecati odit veniam temporibus
				laborum impedit est saepe tempore necessitatibus eius blanditiis
				totam quod a iusto, maxime ipsum nam in culpa, et molestiae
				aspernatur! Ad nesciunt fugit pariatur, quis a in fuga dolorum
				tempora quisquam facere assumenda at ducimus veniam sit? Sit
				possimus ex, consequuntur quod, quia a alias fugiat delectus
				dolorem iste culpa natus quam quibusdam nihil hic velit, id
				accusantium? Ducimus eos eaque vel impedit dolorem quis in illo
				eveniet expedita consequuntur, explicabo facilis sequi nihil.
				Ratione aliquid doloribus atque eum est sunt molestias facere
				inventore.
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
				voluptate soluta adipisci obcaecati odit veniam temporibus
				laborum impedit est saepe tempore necessitatibus eius blanditiis
				totam quod a iusto, maxime ipsum nam in culpa, et molestiae
				aspernatur! Ad nesciunt fugit pariatur, quis a in fuga dolorum
				tempora quisquam facere assumenda at ducimus veniam sit? Sit
				possimus ex, consequuntur quod, quia a alias fugiat delectus
				dolorem iste culpa natus quam quibusdam nihil hic velit, id
				accusantium? Ducimus eos eaque vel impedit dolorem quis in illo
				eveniet expedita consequuntur, explicabo facilis sequi nihil.
				Ratione aliquid doloribus atque eum est sunt molestias facere
				inventore.
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
				voluptate soluta adipisci obcaecati odit veniam temporibus
				laborum impedit est saepe tempore necessitatibus eius blanditiis
				totam quod a iusto, maxime ipsum nam in culpa, et molestiae
				aspernatur! Ad nesciunt fugit pariatur, quis a in fuga dolorum
				tempora quisquam facere assumenda at ducimus veniam sit? Sit
				possimus ex, consequuntur quod, quia a alias fugiat delectus
				dolorem iste culpa natus quam quibusdam nihil hic velit, id
				accusantium? Ducimus eos eaque vel impedit dolorem quis in illo
				eveniet expedita consequuntur, explicabo facilis sequi nihil.
				Ratione aliquid doloribus atque eum est sunt molestias facere
				inventore.
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
				voluptate soluta adipisci obcaecati odit veniam temporibus
				laborum impedit est saepe tempore necessitatibus eius blanditiis
				totam quod a iusto, maxime ipsum nam in culpa, et molestiae
				aspernatur! Ad nesciunt fugit pariatur, quis a in fuga dolorum
				tempora quisquam facere assumenda at ducimus veniam sit? Sit
				possimus ex, consequuntur quod, quia a alias fugiat delectus
				dolorem iste culpa natus quam quibusdam nihil hic velit, id
				accusantium? Ducimus eos eaque vel impedit dolorem quis in illo
				eveniet expedita consequuntur, explicabo facilis sequi nihil.
				Ratione aliquid doloribus atque eum est sunt molestias facere
				inventore.
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
				voluptate soluta adipisci obcaecati odit veniam temporibus
				laborum impedit est saepe tempore necessitatibus eius blanditiis
				totam quod a iusto, maxime ipsum nam in culpa, et molestiae
				aspernatur! Ad nesciunt fugit pariatur, quis a in fuga dolorum
				tempora quisquam facere assumenda at ducimus veniam sit? Sit
				possimus ex, consequuntur quod, quia a alias fugiat delectus
				dolorem iste culpa natus quam quibusdam nihil hic velit, id
				accusantium? Ducimus eos eaque vel impedit dolorem quis in illo
				eveniet expedita consequuntur, explicabo facilis sequi nihil.
				Ratione aliquid doloribus atque eum est sunt molestias facere
				inventore.
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
				voluptate soluta adipisci obcaecati odit veniam temporibus
				laborum impedit est saepe tempore necessitatibus eius blanditiis
				totam quod a iusto, maxime ipsum nam in culpa, et molestiae
				aspernatur! Ad nesciunt fugit pariatur, quis a in fuga dolorum
				tempora quisquam facere assumenda at ducimus veniam sit? Sit
				possimus ex, consequuntur quod, quia a alias fugiat delectus
				dolorem iste culpa natus quam quibusdam nihil hic velit, id
				accusantium? Ducimus eos eaque vel impedit dolorem quis in illo
				eveniet expedita consequuntur, explicabo facilis sequi nihil.
				Ratione aliquid doloribus atque eum est sunt molestias facere
				inventore.
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
				voluptate soluta adipisci obcaecati odit veniam temporibus
				laborum impedit est saepe tempore necessitatibus eius blanditiis
				totam quod a iusto, maxime ipsum nam in culpa, et molestiae
				aspernatur! Ad nesciunt fugit pariatur, quis a in fuga dolorum
				tempora quisquam facere assumenda at ducimus veniam sit? Sit
				possimus ex, consequuntur quod, quia a alias fugiat delectus
				dolorem iste culpa natus quam quibusdam nihil hic velit, id
				accusantium? Ducimus eos eaque vel impedit dolorem quis in illo
				eveniet expedita consequuntur, explicabo facilis sequi nihil.
				Ratione aliquid doloribus atque eum est sunt molestias facere
				inventore.
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
				voluptate soluta adipisci obcaecati odit veniam temporibus
				laborum impedit est saepe tempore necessitatibus eius blanditiis
				totam quod a iusto, maxime ipsum nam in culpa, et molestiae
				aspernatur! Ad nesciunt fugit pariatur, quis a in fuga dolorum
				tempora quisquam facere assumenda at ducimus veniam sit? Sit
				possimus ex, consequuntur quod, quia a alias fugiat delectus
				dolorem iste culpa natus quam quibusdam nihil hic velit, id
				accusantium? Ducimus eos eaque vel impedit dolorem quis in illo
				eveniet expedita consequuntur, explicabo facilis sequi nihil.
				Ratione aliquid doloribus atque eum est sunt molestias facere
				inventore.
			</p>
		</div>
	)
}

export default ModalPage
