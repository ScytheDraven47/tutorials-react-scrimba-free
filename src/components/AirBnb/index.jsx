import styled from '@emotion/styled'
import Experiences from './Experiences'
import Header from './Header'
import Hero from './Hero'

const AirBnb = () => {
	return (
		<StyledDiv>
			<Header />
			<Hero />
			<Experiences />
		</StyledDiv>
	)
}

export default AirBnb

const StyledDiv = styled.div`
	font-family: Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
		Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	gap: 2rem;
	background-color: white;
	color: black;
`
