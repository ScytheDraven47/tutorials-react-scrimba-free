import styled from 'styled-components'
import Joke from './Joke'
import { jokes } from './jokes'

const Jokes = () => {
	return (
		<StyledDiv>
			{jokes.map((j, i) => (
				<Joke key={i} {...j} />
			))}
		</StyledDiv>
	)
}

export default Jokes

const StyledDiv = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1em;
	padding: 2em;
`
