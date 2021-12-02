import styled from '@emotion/styled'

const Form = ({
	topText,
	bottomText,
	changeTopText,
	changeBottomText,
	getNewMeme,
}) => {
	return (
		<StyledDiv>
			<input
				placeholder='Top text'
				type='text'
				value={topText}
				onChange={changeTopText}
			/>
			<input
				placeholder='Bottom text'
				type='text'
				value={bottomText}
				onChange={changeBottomText}
			/>
			<button type='button' onClick={getNewMeme}>
				Get a new meme image 🖼
			</button>
		</StyledDiv>
	)
}

export default Form

const StyledDiv = styled.div`
	display: grid;
	grid-template: 3em 3em / 1fr 1fr;
	gap: 1.5em;

	input,
	button {
		border-radius: 5px;
		border: none;
		padding: 0.625rem;
		color: white;
	}

	input {
		background: none;
		border: 1px solid #d5d4d8;
		font-size: 0.75rem;
	}

	button {
		font-size: 1rem;
		grid-column: 1 / -1;
		background: linear-gradient(90deg, #672280 1.18%, #a626d3 100%);
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
	}
`
