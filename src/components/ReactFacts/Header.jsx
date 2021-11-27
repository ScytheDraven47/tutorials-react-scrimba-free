import styled from 'styled-components'
import Logo from './Logo'

const Header = () => (
	<StyledHeader>
		<div className='logo'>
			<Logo className='logo__img' />
			<span className='logo__title'>ReactFacts</span>
		</div>
		<nav className='nav'>
			<ul className='nav__list'>
				<li>Pricing</li>
				<li>About</li>
				<li>Contact</li>
			</ul>
		</nav>
	</StyledHeader>
)

export default Header

const StyledHeader = styled.header`
	display: flex;
	align-items: center;
	background-color: var(--clr-bg-dark);
	padding: 1.75em;
	justify-content: space-between;

	.logo {
		display: flex;
		gap: 0.375em;
		align-items: flex-end;
		color: var(--clr-accent);
		font-size: 1.375rem;
		font-weight: 700;

		.logo__img {
			height: 1.75rem;
		}
	}

	.nav__list {
		display: flex;
		list-style: none;
		gap: 1em;
	}
`
