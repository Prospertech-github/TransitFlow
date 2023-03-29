import React from 'react'
import styles from './Banner.module.css'
import Navbar from '../NavBar/Navbar'
import { StyledButton } from '../Button/Buttons';

const Banner = () => {
  return (
		<div className={styles.heroBanner}>
			<Navbar />

			<div className={styles.heroText}>
				<h5>Logistics &amp; Supply Chain Solutions </h5>
				<h1> Your Gateway <br /> to any Destination in the World </h1>
				<p>
					{' '}
					In augue ligula, feugiat ut nulla consequat. Ut est lacus,
					molestie in arcu no, iaculis vehicula ipsum. Nunc faucibus,
					nisl id dapibus finibus, enim diam interdum nulla, sed
					laoreet risus lectus.{' '}
				</p>

			</div>
			<div className={styles.btnContainer}>
				<StyledButton text='Explore More' />
			</div>

		</div>
  );
}

export default Banner