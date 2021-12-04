import { useState } from 'react'
import styled from '@emotion/styled'

const Joke = ({ setup, punchline }) => {
	const [isShown, setIsShown] = useState(false)

	// const toggleShown = () => {
	// 	setIsShown((prev) => !prev)
	// }

	const showPunchline = () => setIsShown(true)
	const hidePunchline = () => setIsShown(false)

	return (
		<StyledDiv onMouseEnter={showPunchline} onMouseLeave={hidePunchline}>
			{setup ? (
				<p>
					{setup}
					<br />
					<span className={`punchline ${isShown ? 'show' : ''}`}>
						{punchline}
					</span>
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
	overflow: hidden;

	.punchline {
		--animation: 0.25s ease-in-out;
		font-style: italic;
		display: block;
		opacity: 0;
		transform: translateY(-100%);
		transition: transform var(--animation), opacity var(--animation);

		&.show {
			transform: translateY(0);
			opacity: 1;
		}
	}
`
