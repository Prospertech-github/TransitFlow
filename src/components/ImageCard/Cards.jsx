import React from 'react';
import HeadingLabel from '../HeadingLabel';
import styles from './Cards.module.css';
import MoneyIcon from '../../images/icons/moneyIcon.svg'
import PackageIcon from '../../images/icons/packageIcon.svg'
import Aeroplane from '../../images/aeroplane.png'
import User1 from '../../images/user1.png' 
import User2 from '../../images/user2.png'
import QuoteIcon from '../../images/icons/quoteIcon.svg'
import StarIcon from '../../images/icons/starIcon.svg'


export const ImageCard = ({ cardNumber, heading, text }) => {
	let cardClass;
	switch (cardNumber) {
		case 'one':
			cardClass = 'one';
			break;
		case 'two':
			cardClass = 'two';
			break;
		case 'three':
			cardClass = 'three';
			break;
		case 'four':
			cardClass = 'four';
			break;
		case 'five':
			cardClass = 'five';
			break;
		default:
			break;
	}

	return (
		<div className={`${styles.card} ${styles[cardClass]}`}>
			<h5> {heading} </h5>
			<p> {text} </p>
		</div>
	);
};

export const FeatureCard = () => {
	return (
		<div className={styles.featureCard}>
			<div className={styles.textArea}>
				<HeadingLabel text="Why Us" />
				<h3> We provide full range global logistics solution </h3>
				<p>
					{' '}
					Leverage agile frameworks to provide a robust synopsis for
					strategy foster collaborative thinking to further the
					overall value proposition.
				</p>
				<p>
					Organically grow the holistic world view of disruptive
					innovation via workplace diversity and empowerment.
				</p>

				<div className={styles.iconTextArea}>
					<div className={styles.iconItems}>
						<img src={PackageIcon} alt="Package Icon" />
						<h5> Delivery on Time </h5>
					</div>

					<div className={styles.iconItems}>
						<img src={MoneyIcon} alt="Money Icon" />
						<h5> Optimized Travel Cost </h5>
					</div>
				</div>
			</div>

			<div className={styles.imageArea}>
				<img src={Aeroplane} alt="" />
			</div>
			

		</div>
	);
};

export const TestimonialCards = ({userName, userProfile, second}) => {
	return (
		<div
			className={`${styles.testimonial} ${
				second ? styles.secondUser : ''
			}`}
		>
			<div className={styles.topDiv}>
				<div className={`${styles.userDetails} ${
				second ? styles.secondUser : ''
			}`}>
					<img src={`${second ? User2 : User1}`} alt="Smith Kathleen" />
					<div className={styles.textContainer}>
						<h5> {userName} </h5>
						<p> {userProfile} </p>
					</div>
				</div>

				<img src={QuoteIcon} alt="Quote Icon" />
			</div>

			<div className={`${styles.textDiv} ${
				second ? styles.secondUser : ''
			}`}>
				<p>
					Leverage agile frameworks to provide a robust synopsis for
					strategy foster collaborative thinking to further the
					overall value proposition. Organically grow the holistic
					world view of disruptive innovation via workplace diversity
					and empowerment.
				</p>
			</div>

			<div className={styles.ratingArea}>
				<img src={StarIcon} alt="Star Icon" />
				<img src={StarIcon} alt="Star Icon" />
				<img src={StarIcon} alt="Star Icon" />
				<img src={StarIcon} alt="Star Icon" />
				<img src={StarIcon} alt="Star Icon" />
			</div>
		</div>
	);
}


