import styled from '@emotion/styled'
import Info from './Info'
import About from './About'
import Interests from './Interests'
import Footer from './Footer'
import { profile } from './profile'

const DigitalProfile = () => {
	const info = {
		imageUrl: profile.imageUrl,
		name: profile.name,
		title: profile.title,
		website: profile.website,
		email: profile.email,
	}

	return (
		<StyledDiv>
			<Info {...info} />
			<About about={profile.about} />
			<Interests interests={profile.interests} />
			<Footer {...profile.socials} />
		</StyledDiv>
	)
}

export default DigitalProfile

const StyledDiv = styled.div`
	margin: auto;
	width: 300px;
	background-color: #1a1b21;
	border-radius: 10px;
	overflow: hidden;

	display: flex;
	flex-direction: column;
	gap: 1rem;
`
