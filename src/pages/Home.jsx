import React from 'react'
import { Button, PlainButton } from '../components/Button/Buttons'
import { Container } from '../components/Container'

const Home = () => {
  return (
    <>
      <Container>
        <PlainButton text='Send Now'/>
        <Button secondary text='Button Style'/>
      </Container>
    </>
  )
}

export default Home