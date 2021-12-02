import { useState } from 'react'
import styled from '@emotion/styled'

const Joke = ({ setup, punchline }) => {
	const [isShown, setIsShown] = useState(false)

	const toggleShown = () => {
		setIsShown((prev) => !prev)
	}

	return (
		<StyledDiv onClick={toggleShown}>
			{setup ? (
				<p>
					{setup}
					<br />
					{isShown && <i>{punchline}</i>}
				</p>
			) : (
				<p>{punchline}</p>
			)}
		</StyledDiv>
	)
}

export default Joke

const StyledDiv = styled.div`
	background-color: rgba(200, 200, 200, 0.3);
	border-radius: 10px;
	box-shadow: 0px 0px 1em rgba(255, 255, 255, 0.1);
	padding: 0 1em;
`
