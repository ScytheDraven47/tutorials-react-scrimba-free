import styled from '@emotion/styled'

const About = ({ about }) => {
	return (
		<StyledDiv>
			<h2>About</h2>
			<p>{about}</p>
		</StyledDiv>
	)
}

export default About

const StyledDiv = styled.div`
	width: 80%;
	margin: 0 auto;
	h2 {
		font-size: 1rem;
		margin: 0;
	}
	p {
		font-size: 0.7rem;
	}
`
