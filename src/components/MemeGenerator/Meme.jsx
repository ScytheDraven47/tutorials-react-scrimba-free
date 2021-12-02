import styled from '@emotion/styled'

const Meme = ({ url, name, topText, bottomText }) => {
	return (
		<StyledDiv>
			<img src={url} alt={name} />
			<span className='topText'>{topText}</span>
			<span className='bottomText'>{bottomText}</span>
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

	span {
		font-family: 'Oswald', sans-serif;
		position: absolute;
		font-size: 3rem;
		line-height: 1em;
		font-weight: bold;
		color: black;
		-webkit-text-fill-color: white; /* Will override color (regardless of order) */
		-webkit-text-stroke-width: 2px;
		-webkit-text-stroke-color: black;
		text-align: center;
		left: 0;
		right: 0;
	}

	.topText {
		top: 0;
	}
	.bottomText {
		bottom: 0;
	}
`
