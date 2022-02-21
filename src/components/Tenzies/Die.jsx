import styled from '@emotion/styled'

const Die = ({ id, value, isFrozen, freeze }) => {
	return (
		<StyledDie
			className={isFrozen ? 'frozen' : ''}
			onClick={() => freeze(id)}
		>
			<h2>{value}</h2>
		</StyledDie>
	)
}

export default Die

const StyledDie = styled.div`
	font-size: 2rem;
	display: grid;
	place-items: center;
	height: 3em;
	width: 3em;
	aspect-ratio: 1;
	color: var(--clr-font);
	background: var(--clr-bg-dark);
	border-radius: 0.4em;
	box-shadow: 0em 0.1em 0.1em hsl(var(--clr-font-hsl), 30%);
	cursor: pointer;
	user-select: none;

	&.frozen {
		background: var(--clr-accent);
	}

	h2 {
		padding: 0;
		margin: 0;
	}
`
