import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./Footer.module.scss";
import {motion} from 'framer-motion'
import { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { FaLinkedin } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';


const Footer = () => {


  const [showEmail, setShowEmail] = useState(false);
  const [showPhone, setShowPhone] = useState(false);

  const handleImageClick = () =>{
    setShowEmail(true);
   }
const handlePhoneClick = () =>{
  setShowPhone(true);
}
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}>
            <a className="anchor" id="footer"></a>
      
      
      <motion.div
      variants={footerVariants}
      className={`innerWidth yPaddings flexCenter ${css.container}`}>
        <div className={css.left}>
          <span className="primaryText">
          and let the conversation  <br />
          begin.
          </span>
          <span className="primaryText">
             <a href="mailto:itsjag07@gmail.com">Say 'Hi' </a>
          </span>
        </div>

        <div className={css.right}>
          <div className={css.info}>
            <span className="secondaryText">Contact</span>
      
          </div>
          <ul className={css.menu}>
          <span><FiMail size={38} style={{ color: 'black', cursor: 'pointer' }} onClick={handleImageClick}/></span>
          {showEmail && (
        <div className="email-section">
          <p className="email-address">itsjag07@gmail.com</p>
        </div>
      )}
          <a href="https://www.linkedin.com/in/jagmeet-singh7/" target="_blank" rel="noopener noreferrer">
          <span className="icon-container"><FaLinkedin size={38} style={{ color: 'black' }} /></span>
          </a>
          <a href="https://github.com/Jagm33t" target="_blank" rel="noopener noreferrer">
          <span className="icon-container"><FaGithub size={38} style={{ color: 'black' }} /></span>
          </a>
        

                
          <p className={css.copyright}  >copyright © Jagmeet Singh 2023</p>
          </ul>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;