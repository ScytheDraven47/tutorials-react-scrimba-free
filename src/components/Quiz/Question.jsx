import styled from '@emotion/styled'
import React from 'react'

const htmlDecode = (text) =>
	new DOMParser().parseFromString(text, 'text/html').documentElement
		.textContent

const Question = ({
	category,
	correct_answer,
	difficulty,
	incorrect_answers,
	question,
	type,
	answers,
	selectedAnswer,
	selectAnswer,
	showResults,
}) => {
	const getClassName = (answer) => {
		if (!showResults) return answer === selectedAnswer ? 'selected' : ''
		if (answer === correct_answer) return 'correct'
		if (incorrect_answers.includes(answer) && answer === selectedAnswer)
			return 'incorrect'
		return 'faded'
	}

	return (
		<StyledQuestion>
			<h2>{htmlDecode(question)}</h2>
			<div className='answers'>
				{answers.map((answer) => (
					<button
						key={answer}
						type='button'
						className={getClassName(answer)}
						disabled={showResults}
						onClick={() => selectAnswer(question, answer)}
					>
						{htmlDecode(answer)}
					</button>
				))}
			</div>
			<hr />
		</StyledQuestion>
	)
}

export default Question

const StyledQuestion = styled.div`
	text-align: left;

	.answers > button {
		margin-right: 1em;
		margin-bottom: 1em;
		color: var(--clr-primary);
		outline: 0.1em solid var(--clr-primary);
		font-weight: bold;
		background: none;

		&.selected {
			outline: none;
			background: var(--clr-dark);
		}
		&.correct {
			outline: none;
			background: var(--clr-correct);
		}
		&.incorrect {
			outline: none;
			background: var(--clr-incorrect);
		}
		&.faded {
			outline: 0.1em solid var(--clr-grey);
			background: none;
		}
	}
`
