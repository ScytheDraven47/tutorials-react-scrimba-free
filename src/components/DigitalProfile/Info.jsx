import styled from '@emotion/styled'
import { FaEnvelope } from 'react-icons/fa'

const Info = ({ imageUrl, name, title, website, email }) => {
	const websiteUrl =
		website.indexOf('http') === 0 ? website : `https://${website}`

	return (
		<StyledDiv>
			<img className='profile' src={imageUrl} alt={name} />
			<h1 className='name'>{name}</h1>
			<p className='title'>{title}</p>
			<p className='website-link'>
				<a href={websiteUrl}>{website}</a>
			</p>
			<a className='btn btn-email' href={`mailto:${email}`}>
				<FaEnvelope className='icon' />
				<span>Email</span>
			</a>
		</StyledDiv>
	)
}

export default Info

const StyledDiv = styled.div`
	text-align: center;
	width: 100%;

	.profile {
		width: 100%;
	}

	.name {
		font-size: 1.5rem;
		margin-bottom: 0;
	}

	.title,
	.website-link {
		margin: 0.3em;
	}

	.title {
		font-size: 0.8rem;
		color: #f3bf99;
	}

	.website-link a {
		text-decoration: none;
		color: currentColor;
		font-size: 0.66rem;
	}

	.btn {
		display: block;
		text-decoration: none;
		color: black;
		background-color: white;
		border-radius: 6px;
		padding: 0.5em;
	}

	.btn-email {
		margin: 1em auto;
		width: 80%;
		display: flex;
		gap: 0.3em;
		align-items: center;
		justify-content: center;
		span {
			font-size: 0.9rem;
		}
	}
`
