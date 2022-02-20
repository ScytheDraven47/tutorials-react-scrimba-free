import { useState } from 'react'
import styled from '@emotion/styled'
import Header from './Header'
import MainContent from './MainContent'
import Footer from './Footer'

const ReactFacts = () => {
	const [isDark, setIsDark] = useState(true)

	const toggleDark = () => {
		setIsDark((prev) => !prev)
	}

	return (
		<StyledDiv isDark={isDark}>
			<Header isDark={isDark} toggleDark={toggleDark} />
			<MainContent />
			<Footer />
		</StyledDiv>
	)
}

export default ReactFacts

const StyledDiv = styled.div`
	${({ isDark }) => {
		if (isDark)
			return `* {
				--clr-bg: hsl(217, 14%, 18%);
				--clr-bg-dark: hsl(233, 12%, 15%);
				--clr-bg-light: hsl(233, 12%, 25%);
				--clr-font: hsl(0, 0%, 95%);
				--clr-accent: hsl(193, 95%, 68%);
			}`
		return `* {
			--clr-bg: hsl(217, 14%, 82%);
			--clr-bg-dark: hsl(233, 12%, 85%);
			--clr-bg-light: hsl(233, 12%, 75%);
			--clr-font: hsl(0, 0%, 5%);
			--clr-accent: hsl(193, 95%, 32%);
		}`
	}}

	height: 100%;
	display: grid;
	grid-template-rows: 5rem 1fr;
	color: var(--clr-font);
`
