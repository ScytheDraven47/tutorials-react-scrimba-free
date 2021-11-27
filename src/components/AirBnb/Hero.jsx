import styled from 'styled-components'
import heroImg from './hero-img.svg'

const Hero = () => {
	return (
		<StyledSection>
			<img className='hero__img' src={heroImg} alt='online experiences' />
			<h1 className='hero__title'>Online Experiences</h1>
			<p className='hero__text'>
				Join unique interactive activities led by{' '}
				<nobr>one-of-a-kind</nobr> hosts—all without leaving home.
			</p>
		</StyledSection>
	)
}

export default Hero

const StyledSection = styled.section`
	padding: 0 2em;
	display: flex;
	flex-direction: column;

	.hero__img {
		align-self: center;
		width: 90%;
		max-width: 35rem;
	}

	.hero__title {
		font-size: 2.25rem;
		margin-bottom: 1rem;
	}

	.hero__text {
		margin: 0;
		max-width: 35ch;
	}
`
