import React from 'react'
import styles from './Home.module.css'
import {Container} from '../components/Container'
import Header from '../components/Header/Header'
import Banner from '../components/HeroSection/Banner'
import Grid from '../components/GridArea/Grid'
import PlainSection from '../components/PlainSection'
import HeadingLabel from '../components/HeadingLabel'
import { FeatureCard } from '../components/ImageCard/Cards'



const Home = () => {
  return (
		<>
			<Container>
				<Header />
				<Banner />

				<section className={styles.aboutSection}>
					<div className={styles.headings}>
						<HeadingLabel text='What We Do' />
						<h3> Safe & Reliable Cargo Solutions </h3>
					</div>
          <Grid />
				</section>
				
				<PlainSection />
        <FeatureCard />
			</Container>
		</>
  );
}

export default Home