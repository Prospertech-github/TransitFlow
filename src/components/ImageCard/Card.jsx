import React from 'react';
import styles from './Card.module.css'

const Card = ({cardNumber, heading, text}) => {
  let cardClass;
  switch (cardNumber) {
		case 'one':
			cardClass = 'one';
			break;
		case 'two':
			cardClass = 'two';
			break;
		case 'three':
			cardClass = 'three';
			break;
		case 'four':
			cardClass = 'four';
			break;
		case 'five':
			cardClass = 'five';
			break;
		default:
			break;
  }
  
  return (
    <div className={`${styles.card } ${styles[cardClass]}`}>
      <h5> {heading} </h5>
      <p> {text} </p>
		</div>
  );
}

export default Card