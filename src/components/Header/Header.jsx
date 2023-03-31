import React from 'react'
import styles from './Header.module.css'
import Logo from '../../images/logo.png'
import { ScheduleIconText } from '../IconText/IconText'

const NavBar = () => {
  return (
		<header className={styles.header}>
			<img src={Logo} alt="TransitFlow Logo" />

			<ScheduleIconText />
		</header>
  );
}

export default NavBar