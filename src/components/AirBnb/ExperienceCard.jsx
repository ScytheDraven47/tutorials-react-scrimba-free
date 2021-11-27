import styled from 'styled-components'
import { FaStar } from 'react-icons/fa'

const ExperienceCard = ({
	openSpots,
	location,
	imageUrl,
	reviews,
	country,
	title,
	startingPrice,
}) => {
	const { reviewCount, totalRating } = reviews.reduce(
		(acc, r) => ({
			reviewCount: acc.reviewCount + 1,
			totalRating: acc.totalRating + r.rating,
		}),
		{ reviewCount: 0, totalRating: 0 }
	)
	const avgRating = totalRating / reviewCount

	const formattedPrice = '$'.concat(startingPrice / 100)

	const badgeText =
		openSpots < 1
			? 'sold out'
			: location.toLowerCase() === 'online'
			? location
			: null

	return (
		<StyledDiv imageUrl={imageUrl}>
			<div className='exp__img'>
				{badgeText && <span className='exp__status'>{badgeText}</span>}
			</div>
			<p className='exp__rating'>
				<FaStar className='exp__rating__icon' />
				{avgRating.toFixed(1)}
				<span className='exp__rating__info'>
					({reviewCount}) · {location}
				</span>
			</p>
			<p>{title}</p>
			<p>
				<b>From {formattedPrice}</b> / person
			</p>
		</StyledDiv>
	)
}

export default ExperienceCard

const StyledDiv = styled.div`
	font-size: 0.75rem;
	width: 11rem;
	flex: 0 0 auto;

	& > p {
		margin: 0.2em 0;
	}

	.exp__img {
		position: relative;
		border-radius: 9px;
		height: 14.5rem;
		background-image: url(${({ imageUrl = '' }) => imageUrl || 'test'});
		background-size: cover;
		background-position: center top;
		padding: 0.6em;

		.exp__status {
			position: absolute;
			font-size: 0.8rem;
			font-weight: 400;
			line-height: 1em;
			background: white;
			color: black;
			border-radius: 2px;
			text-transform: uppercase;
			padding: 0.4em;
		}
	}

	.exp__rating {
		display: flex;
		gap: 0.3em;
		align-items: center;
		.exp__rating__icon {
			color: red;
		}

		.exp__rating__info {
			color: #918e9b;
		}
	}
`
