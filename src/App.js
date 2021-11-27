import styled from 'styled-components'
import Card from './components/Card'
// import ReactFacts from './components/ReactFacts'
// import DigitalProfile from './components/DigitalProfile'
// import AirBnb from './components/AirBnb'
// import ContactList from './components/ContactList'
// import Jokes from './components/Jokes'

const App = () => (
	<AppWrapper>
		<Card>
			{/* <ReactFacts /> */}
			{/* <DigitalProfile /> */}
			{/* <AirBnb /> */}
			{/* <ContactList /> */}
			{/* <Jokes /> */}
		</Card>
	</AppWrapper>
)

export default App

const AppWrapper = styled.div`
	height: 100vh;
	width: 100vw;
	display: grid;
	place-items: center;
`
