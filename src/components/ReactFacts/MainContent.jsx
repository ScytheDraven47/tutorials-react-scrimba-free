import styled from '@emotion/styled'
import Logo from './Logo'

const MainContent = () => (
	<StyledMain>
		<h1 className='title'>Fun facts about React</h1>
		<ul className='list'>
			<li>Was first released in 2013</li>
			<li>Was originally created by Jordan Walke</li>
			<li>Has well over 100K stars on GitHub</li>
			<li>Is maintained by Facebook</li>
			<li>Powers thousands of enterprise apps, including mobile apps</li>
		</ul>
		<div className='bg-logo'>
			<Logo />
		</div>
	</StyledMain>
)

export default MainContent

const StyledMain = styled.main`
	position: relative;
	isolation: isolate;
	background: var(--clr-bg);
	padding: 2em 1.5em;
	overflow: hidden;

	.list {
		max-width: 40ch;

		li {
			line-height: 1.2em;
			padding-block: 0.6em;

			&::marker {
				font-size: 1.4em;
				color: var(--clr-accent);
			}
		}
	}

	.bg-logo {
		z-index: -1;
		position: absolute;
		aspect-ratio: 1;
		width: 80%;
		left: 60%;
		top: 10%;
		margin-block: auto;
		color: var(--clr-bg-light);
		svg {
			height: 100%;
			width: 100%;
		}
	}
`
