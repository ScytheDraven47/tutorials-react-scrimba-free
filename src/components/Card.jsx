import styled from 'styled-components'

const Card = ({ children }) => <StyledDiv>{children}</StyledDiv>

export default Card

const StyledDiv = styled.div`
	height: 60rem;
	width: 40rem;
	border-radius: 1rem;
	box-shadow: 0.5rem 0.5rem 2rem hsla(var(--clr-font-hsl), 25%);
	overflow: hidden;
`
