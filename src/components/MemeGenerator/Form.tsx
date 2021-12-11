import styled from '@emotion/styled'
import { EventHandler, SyntheticEvent } from 'react'

interface FormProps {
	userText: {
		top: string
		bottom: string
	}
	changeText: EventHandler<SyntheticEvent>
	getNewMeme: EventHandler<SyntheticEvent>
	isReady: boolean
}

const Form: React.FC<FormProps> = ({
	userText,
	changeText,
	getNewMeme,
	isReady,
}) => {
	return (
		<StyledDiv>
			<input
				placeholder='Top text'
				type='text'
				name='top'
				value={userText.top}
				onChange={changeText}
			/>
			<input
				placeholder='Bottom text'
				type='text'
				name='bottom'
				value={userText.bottom}
				onChange={changeText}
			/>
			<button type='button' onClick={getNewMeme} disabled={isReady}>
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
		background: var(--clr-feat-gradient);
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
	}
`
