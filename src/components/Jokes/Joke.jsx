import styled from 'styled-components'

const Joke = ({ setup, punchline }) => {
	let joke = setup ? (
		<p>
			{setup}
			<br />
			<i>{punchline}</i>
		</p>
	) : (
		<p>{punchline}</p>
	)

	return <StyledDiv>{joke}</StyledDiv>
}

export default Joke

const StyledDiv = styled.div`
	background-color: rgba(200, 200, 200, 0.3);
	border-radius: 10px;
	box-shadow: 0px 0px 1em rgba(255, 255, 255, 0.1);
	padding: 0 1em;
`
