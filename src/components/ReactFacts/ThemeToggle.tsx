import styled from '@emotion/styled'
import { EventHandler, SyntheticEvent } from 'react'

interface ThemeToggleProps {
	isDark: boolean
	toggleDark: EventHandler<SyntheticEvent>
}

const ThemeToggle = ({ isDark, toggleDark }: ThemeToggleProps) => {
	return (
		<StyledDiv>
			<label className='switch'>
				<span className={`${!isDark ? 'active' : ''}`}>Light</span>
				<input
					type='checkbox'
					name='toggleTheme'
					id='toggleTheme'
					onChange={toggleDark}
					checked={isDark}
				/>
				<div
					className={`slider round ${!isDark ? 'active' : ''}`}
				></div>
				<span className={`${isDark ? 'active' : ''}`}>Dark</span>
			</label>
		</StyledDiv>
	)
}

export default ThemeToggle

const StyledDiv = styled.div`
	font-size: 1rem;
	--anim-dur: 0.4s;

	/* The switch - the box around the slider */
	.switch {
		position: relative;
		display: flex;
		align-items: center;
		gap: 0.25em;

		/* Hide default HTML checkbox */
		input {
			opacity: 0;
			width: 0;
			height: 0;
			position: absolute;
		}

		span {
			font-size: 0.9rem;
			cursor: pointer;

			&.active {
				/* color: var(--clr-accent); */
			}
		}
	}

	/* The slider */
	.slider {
		position: relative;
		cursor: pointer;
		width: 2em;
		height: 1em;
		background-color: var(--clr-accent);
		transition: var(--anim-dur);

		&:before {
			position: absolute;
			content: '';
			height: 0.75em;
			width: 0.75em;
			margin: 0.125em;
			background-color: white;
			transition: var(--anim-dur);
		}

		/* Rounded sliders */
		&.round {
			border-radius: 1em;

			&:before {
				border-radius: 50%;
			}
		}
	}

	input:checked + .slider {
		background-color: var(--clr-bg-light);
	}

	input:focus + .slider {
		box-shadow: 0 0 0.1em var(--clr-font);
	}

	input:checked + .slider:before {
		-webkit-transform: translateX(1em);
		-ms-transform: translateX(1em);
		transform: translateX(1em);
	}
`
