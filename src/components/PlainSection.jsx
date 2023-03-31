import React from 'react'

const PlainSection = ({ secondary }) => {
  return (
    <section className={`plainSection ${secondary && "secondary"}`} />
  )
}

export default PlainSection;