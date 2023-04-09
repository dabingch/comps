import Accordion from '../components/Accordion'

function AccordionPage() {
	const items = [
		{
			id: '1',
			label: 'Can I use React on a project?',
			content: 'You can use React on a project',
		},
		{
			id: '2',
			label: 'Can I use Javascript on a project?',
			content: 'You can use Javascript on a project',
		},
		{
			id: '3',
			label: 'Can I use CSS on a project?',
			content: 'You can use CSS on a project',
		},
	]

	return <Accordion items={items} />
}

export default AccordionPage
