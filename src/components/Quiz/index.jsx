import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'
import Question from './Question'

const shuffleArray = (arr) => arr.sort(() => Math.random() - 0.5)

const Quiz = () => {
	const [isStarted, setIsStarted] = useState(false)
	const [questions, setQuestions] = useState([])
	const [isFinished, setIsFinished] = useState(false)

	useEffect(() => {
		fetchNewQuestions()
	}, [])

	const restart = () => {
		setIsFinished(false)
		setQuestions([])
		fetchNewQuestions()
	}

	const showResults = () => setIsFinished(true)

	const getCorrect = () =>
		questions.reduce(
			(acc, question) =>
				question.selectedAnswer === question.correct_answer
					? acc + 1
					: acc,
			0
		)

	const fetchNewQuestions = () => {
		fetch('https://opentdb.com/api.php?amount=5')
			.then((data) => {
				if (data.ok) return data.json()
				throw new Error(`${data.status} ${data.statusText}`)
			})
			.then((json) => {
				setQuestions(
					json.results.map((question) => {
						question.answers = shuffleArray([
							...question.incorrect_answers,
							question.correct_answer,
						])
						return question
					})
				)
			})
			.catch((err) => console.error(err))
	}

	const selectAnswer = (question, answer) => {
		setQuestions((prevQuestions) =>
			prevQuestions.map((prevQuestion) => {
				if (prevQuestion.question !== question) return prevQuestion
				return {
					...prevQuestion,
					selectedAnswer: answer,
				}
			})
		)
	}

	if (!isStarted)
		return (
			<StyledMain>
				<h1>Quizzical</h1>
				<button type='button' onClick={() => setIsStarted(true)}>
					Start Quiz
				</button>
			</StyledMain>
		)

	return (
		<StyledMain>
			<div className='questions'>
				{questions.map((question) => (
					<Question
						key={question.question}
						{...question}
						selectAnswer={selectAnswer}
						showResults={isFinished}
					/>
				))}
			</div>
			<div className='controls'>
				{isFinished ? (
					<>
						<p>
							You scored {getCorrect()}/{questions.length} correct
							answers
						</p>
						<button type='button' onClick={restart}>
							Play again
						</button>
					</>
				) : (
					<button type='button' onClick={showResults}>
						Check answers
					</button>
				)}
			</div>
		</StyledMain>
	)
}

export default Quiz

const StyledMain = styled.main`
	--clr-primary: hsl(230 100% 80%);
	--clr-dark: hsl(230 100% 60%);
	--clr-light: hsl(230 100% 90%);
	--clr-grey: hsl(0 0% 80%);
	--clr-correct: hsl(100 50% 30%);
	--clr-incorrect: hsl(0 50% 30%);

	padding: 2em;
	display: flex;
	flex-direction: column;
	text-align: center;
	color: var(--clr-primary);

	button {
		padding: 0.5em 2em;
		border-radius: 0.5em;
		background-color: var(--clr-primary);
		border: none;
	}
`
