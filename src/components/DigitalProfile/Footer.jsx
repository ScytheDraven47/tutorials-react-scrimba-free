import styled from '@emotion/styled'
import { IconContext } from 'react-icons'
import {
	FaTwitterSquare,
	FaFacebookSquare,
	FaInstagramSquare,
	FaLinkedin,
	FaGithubSquare,
} from 'react-icons/fa'

const Footer = () => {
	return (
		<IconContext.Provider value={{ color: '#918E9B' }}>
			<StyledDiv>
				<FaTwitterSquare />
				<FaFacebookSquare />
				<FaInstagramSquare />
				<FaLinkedin />
				<FaGithubSquare />
			</StyledDiv>
		</IconContext.Provider>
	)
}

export default Footer

const StyledDiv = styled.div`
	background-color: #161619;
	font-size: 1.5rem;
	height: 4rem;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1em;
`
