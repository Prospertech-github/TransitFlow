import React from 'react';
import styles from './Buttons.module.css'

export const Button = ({secondary, text}) => {
  return (
			<button
				href="google.com"
        className={`${styles.btn} ${secondary ? styles.secondaryBtn : ''}`}
			>
			{text}	
			</button>
  );
}

export const PlainButton = ({text}) => {
	return (
		<button className={styles.plainBtn}>
			{text}
		</button>
	)
}