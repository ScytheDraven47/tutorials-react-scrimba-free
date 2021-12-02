import styled from '@emotion/styled'
import { FaPhone, FaEnvelope } from 'react-icons/fa'

const ContactCard = ({ id, imageUrl, name, phone, email }) => {
	return (
		<StyledDiv>
			<img
				className='contact__image'
				src={`${imageUrl}&sig=${id}`}
				alt={name}
			/>
			<h3 className='contact__name'>{name}</h3>
			<a className='contact__info' href={`tel:${phone}`}>
				<FaPhone />
				<span>{phone}</span>
			</a>
			<a className='contact__info' href={`mailto:${email}`}>
				<FaEnvelope />
				<span>{email}</span>
			</a>
		</StyledDiv>
	)
}

export default ContactCard

const StyledDiv = styled.div`
	border-radius: 10px;
	padding: 1em;
	background: white;
	color: black;

	.contact__image {
		width: 100%;
	}

	.contact__info {
		display: flex;
		align-items: center;
		gap: 0.5em;
		color: black;
		font-size: 0.8rem;
		line-height: 1.5em;
		text-decoration: none;
		span {
			color: gray;
		}
	}
`
