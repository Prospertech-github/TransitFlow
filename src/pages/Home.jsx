import React from 'react'
import styles from './Home.module.css'
import {Container} from '../components/Container'
import Header from '../components/Header/Header'
import Banner from '../components/HeroSection/Banner'
import Grid from '../components/GridArea/Grid'
import PlainSection from '../components/PlainSection'
import HeadingLabel from '../components/HeadingLabel'
import { FeatureCard, ImageCard, TestimonialCards } from '../components/ImageCard/Cards'
import Records from '../components/RecordsArea/Records'
import { StyledButton } from '../components/Button/Buttons'
import IconText from '../components/IconText/IconText'
import PackageIcon from '../images/icons/packageIcon.svg'
import PricingIcon from '../images/icons/pricingIcon.svg'
import GlobeIcon from '../images/icons/globeIcon.svg'
import ClockIcon from '../images/icons/clockIcon2.svg'
import ShipIcon from '../images/icons/shipIcon2.svg'
import HeadsetIcon from '../images/icons/headSetIcon.svg'
import Aeroplane from '../images/aeroplane2.png'



const Home = () => {
  return (
		<>
			<Container>
				<Header />
				<Banner />

				<section className={styles.aboutSection}>
					<div className={styles.headings}>
						<HeadingLabel text="What We Do" />
						<h3> Safe & Reliable Cargo Solutions </h3>
					</div>
					<Grid />
				</section>

				<PlainSection />
				<FeatureCard />
				<Records />

				<section className={styles.cardSection}>
					<h3> Transporting Across The World </h3>
					<div className={styles.cardArea}>
						<ImageCard
							cardNumber="one"
							heading="Liquid Transportation"
							text="Premium Tankers"
						/>
						<ImageCard
							cardNumber="two"
							heading="Packaging Solutions"
							text="Warehouse Management"
						/>
						<ImageCard
							cardNumber="three"
							heading="Contract Logistics"
							text="Road Transportation"
						/>
						<ImageCard
							cardNumber="four"
							heading="Warehouse & Distribution"
							text="Large Warehouse"
						/>
						<ImageCard
							cardNumber="five"
							heading="Specialized Transport"
							text="Ocean Transports"
						/>
					</div>

					<div className={styles.buttonArea}>
						<StyledButton secondary text="More Work" />
					</div>
				</section>

				<section className={styles.userTestimonials}>
					<HeadingLabel text="Testimonial" />
					<h3> What Our Customer Say </h3>

					<div className={styles.testimonial}>
						<TestimonialCards
							userName="Kathleen Smith"
							userProfile="Fuel Company"
						/>
						<TestimonialCards
							userName="John Martin"
							userProfile="Restoration Company"
							second
						/>
					</div>
				</section>

				<section className={styles.opportunitySection}>
					<div className={styles.firstDiv}>
						<img src={Aeroplane} alt="" />
					</div>
					<div>
						<HeadingLabel text="Why Choose" />
						<h3> We create opportunity to reach potential </h3>
						<p>
							{' '}
							Leverage agile frameworks to provide a robust
							synopsis for strategy foster collaborative thinking
							to further the overall value proposition.{' '}
						</p>

						<div className={styles.iconGridArea}>
							<IconText
								iconName={PackageIcon}
								iconText="Safe Package"
							/>
							<IconText
								iconName={ShipIcon}
								iconText="Ship Everyware"
							/>
							<IconText
								iconName={GlobeIcon}
								iconText="Global Tracking"
							/>
							<IconText
								iconName={HeadsetIcon}
								iconText="24/7 Support"
							/>
							<IconText
								iconName={ClockIcon}
								iconText="In Time Delivery"
							/>
							<IconText
								iconName={PricingIcon}
								iconText="Transparant Pricing"
							/>
						</div>
					</div>
				</section>
			</Container>
		</>
  );
}

export default Home