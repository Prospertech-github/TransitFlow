import React from 'react'
import styles from './ImageStack.module.css'
import Image1 from '../../images/imageStack1.png'
import Image2 from '../../images/imageStack2.png';
import Image3 from '../../images/imageStack3.png';
import Image4 from '../../images/imageStack4.png'; 

const ImageStack = () => {
  return (
		<div className={styles.imageStacking}>
			<img src={Image1} alt="Studio Green" />
			<img src={Image2} alt="Norto" />
			<img src={Image3} alt="Point One" />
			<img src={Image4} alt="Out of the Sand Box" />
		</div>
  );
}

export default ImageStack