import styled from '@emotion/styled'
import logo from './logo.svg'

const Header = () => {
	return (
		<StyledHeader>
			<img src={logo} alt='airbnb' />
		</StyledHeader>
	)
}

export default Header

const StyledHeader = styled.header`
	height: 4.5rem;
	display: flex;
	padding: 1.25em 2.25em;
	box-shadow: 0 0.2em 0.5em rgba(0, 0, 0, 0.1);

	img {
		max-width: 7em;
	}
`
