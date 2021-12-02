import styled from '@emotion/styled'
import { FaMapMarker } from 'react-icons/fa'
import { maps_base_url } from './data'

const LocationCard = ({
	country,
	location,
	imageUrl,
	startDate,
	endDate,
	description,
}) => {
	const formatDate = (date) => {
		return date.toLocaleDateString('en-US', {
			day: 'numeric',
			month: 'short',
			year: 'numeric',
		})
	}

	return (
		<StyledSection>
			<div className='picture'>
				<img src={imageUrl} alt={location} />
			</div>
			<div className='content'>
				<p className='map-info'>
					<span className='country'>
						<FaMapMarker className='icon' /> {country}
					</span>
					<a href={maps_base_url.concat(country)}>
						View on Google Maps
					</a>
				</p>
				<h2 className='title'>{location}</h2>
				<p>
					<b>
						{formatDate(startDate)} - {formatDate(endDate)}
					</b>
				</p>
				<p>{description}</p>
			</div>
		</StyledSection>
	)
}

export default LocationCard

const StyledSection = styled.section`
	font-size: 0.625rem;
	display: flex;
	gap: 1.6em;
	margin-block: 1.6em;

	.picture {
		/* flex: 1; */
		height: 10.5rem;
		border-radius: 5px;
		aspect-ratio: 0.75;

		overflow: hidden;

		img {
			height: 100%;
			width: 100%;
			object-fit: cover;
		}
	}

	.content {
		flex: 3;
		max-width: 51ch;

		.map-info {
			display: flex;
			gap: 1.6em;
			.country {
				font-weight: 400;
				letter-spacing: 0.17em;
				text-transform: uppercase;
			}
			.icon {
				color: var(--clr-accent);
			}
		}

		.title {
			font-size: 1.56rem;
		}
	}
`
