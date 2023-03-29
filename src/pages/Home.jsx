import React from 'react'
import styles from './Home.module.css'
import {Container} from '../components/Container'
import Header from '../components/Header/Header'
import Banner from '../components/HeroSection/Banner'
import Grid from '../components/GridArea/Grid'
import PlainSection from '../components/PlainSection'



const Home = () => {
  return (
		<>
			<Container>
				<Header />
				<Banner />

				<section className={styles.aboutSection}>
					<div className={styles.headings}>
						<h5> What We Do </h5>
						<h3> Safe & Reliable Cargo Solutions </h3>
					</div>

          <Grid />
        </section>
        
        <PlainSection />
			</Container>
		</>
  );
}

export default Home