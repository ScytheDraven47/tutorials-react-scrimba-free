import styled from '@emotion/styled'

interface MemeProps {
	url: string
	name: string
	userText: {
		top: string
		bottom: string
	}
}

const Meme: React.FC<MemeProps> = ({ url, name, userText }) => {
	return (
		<StyledDiv>
			<img src={url} alt={name} />
			<span className='memeText topText'>{userText.top}</span>
			<span className='memeText bottomText'>{userText.bottom}</span>
		</StyledDiv>
	)
}

export default Meme

const StyledDiv = styled.div`
	width: 100%;
	position: relative;

	img {
		width: 100%;
	}

	.memeText {
		position: absolute;
		left: 10%;
		right: 10%;
		margin: 0.25em;
		font-family: impact, sans-serif;
		text-transform: uppercase;
		text-align: center;
		font-size: 2rem;
		-webkit-text-fill-color: white;
		-webkit-text-stroke-width: 0.02em;
		-webkit-text-stroke-color: black;
	}

	.topText {
		top: 0;
	}
	.bottomText {
		bottom: 0;
	}
`
