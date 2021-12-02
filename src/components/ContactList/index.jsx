import styled from '@emotion/styled'
import ContactCard from './ContactCard'

const ContactList = () => {
	const contacts = [
		{
			name: 'Mr. Whiskerson',
			imageUrl: 'https://source.unsplash.com/300x200/?cat',
			phone: '(212) 555-1234',
			email: 'mr.whiskaz@catnap.meow',
		},
		{
			name: 'Fluffykins',
			imageUrl: 'https://source.unsplash.com/300x200/?cat',
			phone: '(212) 555-2345',
			email: 'fluff@me.com',
		},
		{
			name: 'Felix',
			imageUrl: 'https://source.unsplash.com/300x200/?cat',
			phone: '(212) 555-4567',
			email: 'thecat@hotmail.com',
		},
		{
			name: 'Pumpkin',
			imageUrl: 'https://source.unsplash.com/300x200/?cat',
			phone: '(0800) CAT KING',
			email: 'pumpkin@scrimba.com',
		},
	]

	return (
		<StyledDiv>
			{contacts.map((c, index) => (
				<ContactCard key={index} id={index} {...c} />
			))}
		</StyledDiv>
	)
}

export default ContactList

const StyledDiv = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	gap: 2em;
	padding: 2rem;

	& > * {
		width: calc(50% - 1rem);
	}
`
