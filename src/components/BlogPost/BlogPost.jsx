import React from 'react';
import styles from './BlogPost.module.css';
import CalendarIcon from '../../images/icons/calendarIcon.svg';
import BlogImage1 from '../../images/blogImage1.png'
import BlogImage2 from '../../images/blogImage2.png';
import BlogImage3 from '../../images/blogImage3.png';

const BlogPost = ({ date, heading, diff, first, second, third}) => {
  let url;

	return (
		<div className={`${styles.blog} ${third && styles.last}` }>
			{first && <img src={BlogImage1} alt="BlogImage 1" />}

			{second && <img src={BlogImage2} alt="BlogImage 1" />}

			{third && <img src={BlogImage3} alt="BlogImage 1" />}
			<div className={styles.blogPostDate}>
				<img src={CalendarIcon} alt="Calendar Icon" />
				<h4> {date} </h4>
				<p> September </p>
			</div>

			<div className={styles.blogDetails}>
				<h4 className={`${diff && styles.diff}`}> {heading} </h4>
				<p>
					{' '}
					We are dedicated in creating added value for our customers
					by implementing modern technology in our work.{' '}
				</p>

				<ul>
					<li> &#x2022; Urgent transport solutions</li>
					<li> &#x2022; Reliable & experienced staffs</li>
					<li> &#x2022; Urgent transport solutions</li>
					<li> &#x2022; Reliable & experienced staffs</li>
				</ul>
			</div>
		</div>
	);
};

export default BlogPost;
