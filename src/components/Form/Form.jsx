import React from 'react';
import styles from './Form.module.css'
import { StyledButton } from '../Button/Buttons';

const Form = () => {
	return (
    <form action="">
      <div className={styles.formInputs}>

        <div className={styles.inputControl}>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your Name*"
          />

          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email *"
          />

          <input
            type="text"
            name="phoneNumber"
            id="phoneNumber"
            placeholder="Phone Number*"
          />

          <input
            type="text"
            name="city"
            id="city"
            placeholder="City*"
          />
        </div>

        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Your Message"
        ></textarea>
      </div>

      <StyledButton text='Submit Message' />
		</form>
	);
};

export default Form;
