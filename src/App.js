import styled from 'styled-components'

/* eslint-disable no-unused-vars */
import Card from './components/Card'
import LightBoxes from './components/LightBoxes'
import MemeGenerator from './components/MemeGenerator'
import TravelJournal from './components/TravelJournal'
import ReactFacts from './components/ReactFacts'
import DigitalProfile from './components/DigitalProfile'
import AirBnb from './components/AirBnb'
import ContactList from './components/ContactList'
import Jokes from './components/Jokes'

const App = () => (
	<AppWrapper>
		{/* <Card>
			<ReactFacts />
		</Card> */}
		{/* <Card>
			<DigitalProfile />
		</Card> */}
		{/* <Card width='30rem'>
			<AirBnb />
		</Card> */}
		{/* <Card width='35rem'>
			<ContactList />
		</Card> */}
		<Card>
			<Jokes />
		</Card>
		{/* <Card>
			<TravelJournal />
		</Card> */}
		{/* <Card width='550px'>
			<MemeGenerator />
		</Card> */}
		{/* <Card width='35rem'>
			<LightBoxes />
		</Card> */}
	</AppWrapper>
)

export default App

const AppWrapper = styled.div`
	/* height: 100vh; */
	width: 100vw;
	padding: 25vh 3em;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 50vh;
`
