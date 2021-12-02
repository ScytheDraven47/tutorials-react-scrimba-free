import styled from '@emotion/styled'

const Card = ({ children, height, width }) => (
	<StyledDiv style={{ height, width }}>{children}</StyledDiv>
)

export default Card

const StyledDiv = styled.div`
	border-radius: 1rem;
	box-shadow: 0.5rem 0.5rem 2rem hsla(var(--clr-font-hsl), 25%);
	overflow: hidden;
`
