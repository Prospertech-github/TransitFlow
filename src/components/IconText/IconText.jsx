import React from 'react'
import styles from './IconText.module.css'

const IconText = ({iconName, iconText}) => {
  return (
		<div className={styles.iconItems}>
			<img src={`${iconName}`} alt={`${iconName}`} />
			<h5> {iconText} </h5>
		</div>
  );
}

export default IconText