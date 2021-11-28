import styled from 'styled-components'
import { FaGlobeAmericas } from 'react-icons/fa'

const Header = () => {
	return (
		<StyledHeader>
			<FaGlobeAmericas className='icon' />
			<span>my travel journal.</span>
		</StyledHeader>
	)
}

export default Header

const StyledHeader = styled.header`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 1.5em;
	gap: 0.5em;

	background-color: var(--clr-accent);
	color: var(--clr-bg);
	font-size: 0.9rem;
	font-weight: 500;

	.icon {
		font-size: 1.5rem;
	}
`
