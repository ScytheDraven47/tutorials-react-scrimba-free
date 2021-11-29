import { useState } from 'react'
import styled from 'styled-components'
import Form from './Form'
import Header from './Header'
import Meme from './Meme'

const MemeGenerator = () => {
	const [meme, setMeme] = useState('')
	const [userText, setUserText] = useState({ top: '', bottom: '' })

	const changeTopText = (e) => {
		setUserText({ ...userText, top: e.target.value })
	}

	const changeBottomText = (e) => {
		setUserText({ ...userText, bottom: e.target.value })
	}

	const getNewMeme = () => {
		fetch('./assets/data.json')
			.then((resp) => {
				if (!resp.ok)
					throw new Error(`${resp.status} ${resp.statusText}`)
				return resp.json()
			})
			.then(({ success, data: { memes } }) => {
				if (!success) throw new Error('something went wrong')
				const index = Math.random() * memes.length
				setMeme(memes.at(index))
			})
			.catch((e) => console.warn(e.toString()))
	}

	return (
		<StyledDiv>
			<Header />
			<main>
				<Form
					topText={userText.top}
					bottomText={userText.bottom}
					changeTopText={changeTopText}
					changeBottomText={changeBottomText}
					getNewMeme={getNewMeme}
				/>
				<Meme
					{...meme}
					topText={userText.top}
					bottomText={userText.bottom}
				/>
			</main>
		</StyledDiv>
	)
}

export default MemeGenerator

const StyledDiv = styled.div`
	font-size: 0.75rem;
	font-family: Karla, sans-serif;

	main {
		padding: 3em;
		display: flex;
		flex-direction: column;
		gap: 3em;
	}
`
