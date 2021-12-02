import styled from '@emotion/styled'
import Header from './Header'
import { locations } from './data'
import LocationCard from './LocationCard'

const TravelJournal = () => {
	return (
		<StyledDiv>
			<Header />
			<div className='container'>
				{locations
					.map((l) => <LocationCard key={l.id} {...l} />)
					.reduce((acc, l) => [acc, <hr />, l])}
			</div>
		</StyledDiv>
	)
}

export default TravelJournal

const StyledDiv = styled.div`
	--clr-accent: #f55a5a;
	--clr-font: #2b283a;
	--clr-link: #918e9b;
	--clr-hr: #f5f5f5;
	--clr-bg: #ffffff;

	height: 100%;
	background-color: var(--clr-bg);
	color: var(--clr-font);

	hr {
		color: var(--clr-hr);
	}

	a {
		color: var(--clr-link);
	}

	.container {
		padding: 2em;
	}
`
