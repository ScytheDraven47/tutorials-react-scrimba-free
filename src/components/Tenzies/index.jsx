import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import Die from './Die'
import Confetti from 'react-confetti'

const roll = () => Math.ceil(Math.random() * 6)

const generateDice = () =>
	Array.from({ length: 10 }, (_, i) => ({
		id: Date.now() + i,
		value: roll(),
		isFrozen: false,
	}))

const Tenzies = () => {
	const [dice, setDice] = useState(generateDice())
	const [hasWon, setHasWon] = useState(false)

	useEffect(() => {
		setHasWon(
			dice.every((die) => die.isFrozen && die.value === dice[0].value)
		)
	}, [dice])

	function rollDice() {
		if (hasWon) setDice(generateDice())
		else
			setDice((prevDice) =>
				prevDice.map((die) =>
					die.isFrozen
						? die
						: {
								...die,
								value: roll(),
						  }
				)
			)
	}

	function toggleFreeze(id) {
		setDice((prevDice) =>
			prevDice.map((die) =>
				die.id === id ? { ...die, isFrozen: !die.isFrozen } : die
			)
		)
	}

	return (
		<StyledMain>
			{hasWon ? (
				<div className='instructions'>
					<Confetti />
					<h2>Congratulations!</h2>
					<p>
						You won!
						<br />
						Click New Game to play another game.
					</p>
				</div>
			) : (
				<div className='instructions'>
					<h2>Tenzies</h2>
					<p>
						Try get all dice to equal the same number.
						<br />
						Click a die to freeze it, then click Roll to re-roll the
						rest.
					</p>
				</div>
			)}
			<div className='dice-container'>
				{dice.map((die) => (
					<Die key={die.id} {...die} freeze={toggleFreeze} />
				))}
			</div>
			<button type='button' onClick={rollDice}>
				{hasWon ? 'New Game' : 'Roll'}
			</button>
		</StyledMain>
	)
}

export default Tenzies

const StyledMain = styled.main`
	padding: 1em;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 5rem;

	.instructions {
		text-align: center;
	}

	.dice-container {
		display: grid;
		grid-template: auto auto / repeat(5, 1fr);
		gap: 2rem;
	}

	button {
		font-size: 2rem;
		padding: 0.5em 2em;
		color: var(--clr-accent);
		background: var(--clr-bg-light);
		border-radius: 0.3em;
		border: none;
	}

	button:active {
		box-shadow: inset 0em 0em 0.3em 0.1em var(--clr-bg-dark);
	}
`
