import React from 'react'
import '../../src/index.css';

const HeadingLabel = ({text, secondary}) => {
  return <h5 className={`headingLabel ${secondary && "secondary"}` }> {text} </h5>;
}

export default HeadingLabel