import React from 'react'
import styles from './Grid.module.css'
import shipIcon from '../../images/icons/shipIcon.svg';
import containerIcon from '../../images/icons/containerIcon.svg';
import flightIcon from '../../images/icons/flightIcon.svg';
import truckIcon from '../../images/icons/truckIcon.svg';

const Grid = () => {
  return (
		<div className={styles.gridArea}>
			<div className={styles.gridItems}>
				<img src={shipIcon} alt="Ship Icon" />

				<div className={styles.gridItemText}>
					<h5> Sea Transport Services </h5>
					<p>
						{' '}
						Following the quality of our service thus having gained
						trust of our many clients.
					</p>
				</div>
			</div>

			<div className={styles.gridItems}>
				<img src={containerIcon} alt="Container Icon" />

				<div className={styles.gridItemText}>
					<h5> Warehousing Services </h5>
					<p>
						{' '}
						Following the quality of our service thus having gained
						trust of our many clients.
					</p>
				</div>
			</div>

			<div className={styles.gridItems}>
				<img src={flightIcon} alt="Flight Icon" />

				<div className={styles.gridItemText}>
					<h5> Air Fright Services </h5>
					<p>
						{' '}
						Following the quality of our service thus having gained
						trust of our many clients.
					</p>
				</div>
			</div>

			<div className={styles.gridItems}>
				<img src={truckIcon} alt="Truck Icon" />

				<div className={styles.gridItemText}>
					<h5> Local Shipping Services </h5>
					<p>
						{' '}
						Following the quality of our service thus having gained
						trust of our many clients.
					</p>
				</div>
			</div>
		</div>
  );
}

export default Grid