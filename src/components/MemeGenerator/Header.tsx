import styled from '@emotion/styled'
import troll from './troll.svg'

const Header = () => {
	return (
		<StyledHeader>
			<div className='logo'>
				<img src={troll} alt='Troll' />
				<h1>Meme Generator</h1>
			</div>
			<div className='title'>React Course - Project 3</div>
		</StyledHeader>
	)
}

export default Header

const StyledHeader = styled.header`
	background: var(--clr-feat-gradient);
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 2em;

	.logo {
		display: flex;
		gap: 1em;

		h1 {
			font-size: 1.3rem;
			margin: 0;
		}

		img {
			width: 2rem;
		}
	}
`
