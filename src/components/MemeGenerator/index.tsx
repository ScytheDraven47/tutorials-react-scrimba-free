import { useState, useEffect, SyntheticEvent } from 'react'
import { useQuery } from 'react-query'
import styled from '@emotion/styled'
import Form from './Form'
import Header from './Header'
import Meme from './Meme'
import axios from 'axios'

interface MemeType {
	id: string
	name: string
	url: string
	width: number
	height: number
	box_count: number
}

const MemeGenerator: React.FC = () => {
	const [meme, setMeme] = useState<MemeType | null>(null)
	const [memes, setMemes] = useState<MemeType[]>([])
	const [userText, setUserText] = useState({ top: '', bottom: '' })

	const { isLoading, isSuccess, isError, data } = useQuery(
		'getMemeList',
		async () => {
			const resp = await axios.get('https://api.imgflip.com/get_memes')
			if (resp.status !== 200)
				throw new Error(`${resp.status} ${resp.statusText}`)
			return resp.data
		}
	)

	useEffect(() => {
		if (isSuccess) setMemes(data.data.memes)
	}, [isSuccess, data])

	const changeText = ({ target }: SyntheticEvent) => {
		const { name, value } = target as HTMLInputElement
		setUserText((prev) => ({
			...prev,
			[name]: value,
		}))
	}

	const getNewMeme = () => {
		const index = Math.random() * memes.length
		const meme = memes.at(index)
		if (meme) setMeme(meme)
	}

	return (
		<StyledDiv>
			<Header />
			<main>
				<Form
					userText={userText}
					changeText={changeText}
					getNewMeme={getNewMeme}
					isReady={isLoading || isError}
				/>
				{meme && <Meme {...meme} userText={userText} />}
			</main>
		</StyledDiv>
	)
}

export default MemeGenerator

const StyledDiv = styled.div`
	--clr-feat-gradient: linear-gradient(
		90deg,
		hsl(214 100% 30%) 0%,
		hsl(214 100% 60%) 100%
	);

	font-size: 0.75rem;
	font-family: Karla, sans-serif;

	main {
		padding: 3em;
		display: flex;
		flex-direction: column;
		gap: 3em;
	}
`
