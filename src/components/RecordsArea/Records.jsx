import React from 'react'
import styles from './Records.module.css'

const Records = () => {
  return (
		<div className={styles.recordsArea}>
			<div className={`${styles.figures} ${styles.first}`}>
				<h1> 1294 </h1>
				<div className={styles.box} />
				<h5> Delivered Packages </h5>
			</div>

			<div className={styles.figures}>
				<h1> 3594 </h1>
				<div className={styles.box} />
				<h5> Satisfied Clients </h5>
			</div>
		</div>
  );
}

export default Records