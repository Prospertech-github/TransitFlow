import React from 'react'
import styles from './IconText.module.css'
import clockIcon from '../../images/icons/clockIcon.svg'
import mailIcon from '../../images/icons/mailIcon.svg'
import telephoneIcon from '../../images/icons/telephoneIcon.svg'

export const IconText = ({iconName, iconText}) => {
  return (
		<div className={styles.iconItems}>
			<img src={`${iconName}`} alt={`${iconName}`} />
			<h5> {iconText} </h5>
		</div>
  );
}

export const ScheduleIconText = ({column}) => {
	return (
		<div className={`${styles.headerText} ${column && styles.column}`}>
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
				<p>
					{' '}
					Call Us <br />
					(00) 112 365 489
				</p>
			</div>
		</div>
	);
}