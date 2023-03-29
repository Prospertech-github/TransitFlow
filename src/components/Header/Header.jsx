import React from 'react'
import styles from './Header.module.css'
import Logo from '../../images/logo.png'
import clockIcon from '../../images/icons/clockIcon.svg'
import mailIcon from '../../images/icons/mailIcon.svg'
import telephoneIcon from '../../images/icons/telephoneIcon.svg'

const NavBar = () => {
  return (
		<header className={styles.header}>
			<img src={Logo} alt="TransitFlow Logo" />

			<div className={styles.headerText}>
				<div className={styles.contactDetails}>
					<img src={clockIcon} alt="Work Hours" />
					<p> Mon - Sat 9.00 - 18.00 Sunday Closed </p>
				</div>

				<div className={styles.contactDetails}>
					<img src={mailIcon} alt="Email" />
					<p> Email contact@logistics.com </p>
				</div>

				<div className={styles.contactDetails}>
					<img src={telephoneIcon} alt="Phone Number" />
					<p> Call Us <br />(00) 112 365 489</p>
				</div>
			</div>
		</header>
  );
}

export default NavBar