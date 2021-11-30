import styled from 'styled-components'

const Box = ({ on, toggleOn }) => {
	return (
		<StyledDiv
			className={on ? 'on' : ''}
			onMouseOver={toggleOn}
		></StyledDiv>
	)
}

export default Box

const StyledDiv = styled.div`
	width: 10em;
	aspect-ratio: 1;
	border: 1px solid black;
	border-radius: 1em;
	position: relative;
	overflow: hidden;

	&::after {
		content: '';
		background-color: white;
		position: absolute;
		inset: 0;
		opacity: 0;
		transition: opacity 0.5s ease-in-out;
	}

	&.on::after {
		opacity: 1;
	}
`
