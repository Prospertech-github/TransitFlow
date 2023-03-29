import React from 'react'
import styles from './Navbar.module.css'
import FacebookIcon from '../../images/icons/Facebook.svg';
import InstagramIcon from '../../images/icons/Instagram.svg';
import LinkedinIcon from '../../images/icons/Linkdin.svg';
import TwitterIcon from '../../images/icons/Twitter.svg';

const Navbar = () => {
  return (
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

			<div className={styles.rightItems}>
				<div className={styles.socials}>
					<img src={InstagramIcon} alt="" />

					<img src={FacebookIcon} alt="" />

					<img src={TwitterIcon} alt="" />

					<img src={LinkedinIcon} alt="" />
				</div>

				<div className={styles.btn}>
					<a href="#"> Request Quote </a>
				</div>
			</div>
		</div>
  );
}

export default Navbar