import { useState } from 'react'
import styled from 'styled-components'
import Box from './Box'
const initialBoxes = Array.from({ length: 100 }, (_, i) => ({
	id: i,
	on: false,
}))

const LightBoxes = () => {
	const [boxes, setBoxes] = useState(initialBoxes)

	const toggleOn = (id) => {
		setBoxes((prev) =>
			prev.map((box) => (box.id === id ? { ...box, on: !box.on } : box))
		)
	}

	return (
		<StyledDiv>
			{boxes.map((b) => (
				<Box key={b.id} {...b} toggleOn={() => toggleOn(b.id)} />
			))}
		</StyledDiv>
	)
}

export default LightBoxes

const StyledDiv = styled.div`
	font-size: 5px;
	padding: 2em;
	display: flex;
	flex-wrap: wrap;
	gap: 1em;
	align-items: center;
	justify-content: center;
`
