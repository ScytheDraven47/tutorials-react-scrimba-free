import styled from 'styled-components'
import ExperienceCard from './ExperienceCard'
import { experiences } from './data'

const Experiences = () => (
	<StyledSection>
		{experiences.map((e) => (
			<ExperienceCard key={e.id} {...e} />
		))}
	</StyledSection>
)

export default Experiences

const StyledSection = styled.section`
	padding: 0 2em;
	display: flex;
	gap: 1em;
	overflow-x: scroll;

	&::-webkit-scrollbar {
		width: 1em;
	}

	&::-webkit-scrollbar-track {
		box-shadow: inset 0 0 0.7em rgba(0, 0, 0, 0.3);
	}

	&::-webkit-scrollbar-thumb {
		/* width: 0.3em; */
		width: 5px;
		background-color: darkgrey;
		border-radius: 100vw;
	}
`
