import React from 'react'
import styles from './Banner.module.css'
import FacebookIcon from '../../images/icons/Facebook.svg'
import InstagramIcon from '../../images/icons/Instagram.svg'
import LinkedinIcon from '../../images/icons/Linkdin.svg'
import TwitterIcon from '../../images/icons/Twitter.svg'

const Banner = () => {
  return (
		<div className={styles.heroBanner}>
			<div className={styles.navBar}>
				<nav>
					<ul>
						<li>
							<a href="#"> Home </a>
						</li>
						<li>
							<a href="#" className={styles.pd}>
								{' '}
								About{' '}
							</a>
						</li>
						<li>
							<a href="#" className={styles.pd}>
								{' '}
								Pages{' '}
							</a>
						</li>
						<li>
							<a href="#" className={styles.pd}>
								{' '}
								Project{' '}
							</a>
						</li>
						<li>
							<a href="#" className={styles.pd}>
								{' '}
								Contact{' '}
							</a>
						</li>
					</ul>
				</nav>

				<div className={styles.socials}>
					<img src={InstagramIcon} alt="" />

					<img src={FacebookIcon} alt="" />

					<img src={TwitterIcon} alt="" />

					<img src={LinkedinIcon} alt="" />

					<a href="#"> Request Quote </a>
				</div>
			</div>

			<div className={styles.heroText}>
				<h5>Logistics &amp; Supply Chain Solutions </h5>
				<h1> Your Gateway to any Destination in the World </h1>
				<p>
					{' '}
					In augue ligula, feugiat ut nulla consequat. Ut est lacus,
					molestie in arcu no, iaculis vehicula ipsum. Nunc faucibus,
					nisl id dapibus finibus, enim diam interdum nulla, sed
					laoreet risus lectus.{' '}
				</p>
			</div>
		</div>
  );
}

export default Banner