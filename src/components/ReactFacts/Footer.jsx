import styled from '@emotion/styled'

const Footer = () => (
	<StyledFooter>
		<small>© 2021 ScytheDraven47 Development. All rights reserved.</small>
	</StyledFooter>
)

export default Footer

const StyledFooter = styled.footer`
	width: 100%;
	padding: 0.75em;
	background: var(--clr-bg-dark);
	color: var(--clr-font);
	display: flex;
	justify-content: space-around;
`
