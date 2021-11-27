import styled from 'styled-components'
import Header from './Header'
import MainContent from './MainContent'
import Footer from './Footer'

const ReactFacts = () => (
	<StyledDiv>
		<Header />
		<MainContent />
		<Footer />
	</StyledDiv>
)

export default ReactFacts

const StyledDiv = styled.div`
	height: 100%;
	display: grid;
	grid-template-rows: 5rem 1fr;

	* {
		--clr-bg-hsl: 217, 14%, 18%;
		--clr-bg-dark-hsl: 233, 12%, 15%;
		--clr-bg-light-hsl: 233, 12%, 25%;
		--clr-font-hsl: 0, 0%, 95%;
		--clr-accent-hsl: 193, 95%, 68%;
		--clr-bg: hsl(var(--clr-bg-hsl));
		--clr-bg-dark: hsl(var(--clr-bg-dark-hsl));
		--clr-bg-light: hsl(var(--clr-bg-light-hsl));
		--clr-font: hsl(var(--clr-font-hsl));
		--clr-accent: hsl(var(--clr-accent-hsl));
	}
`
