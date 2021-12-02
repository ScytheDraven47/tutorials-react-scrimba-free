import styled from '@emotion/styled'

const Interests = ({ interests }) => {
	return (
		<StyledDiv>
			<h2>Interests</h2>
			<p>{interests}</p>
		</StyledDiv>
	)
}

export default Interests

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
