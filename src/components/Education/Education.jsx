import React from "react";
import { workExp } from "../../utils/data";
import css from "./Education.module.scss";
import {motion} from 'framer-motion'
import { FiFileText } from 'react-icons/fi';
import {zoomIn, fadeIn, staggerContainer, staggerChildren, textVariant2} from '../../utils/motion'

const Education = () => {


 
  return (
   <>
  <motion.section 
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}>
    <a className="anchor" id="education"></a>
  
    <div className={`innerWidth flexCenter ${css.container}`}>
        {/* heading */}
         <span className="primaryText yPaddings">Education</span>

         <div className={`flexCenter ${css.experiences}`}>
         {workExp.map((exp, i) => {
            return (
              <motion.div variants={textVariant2} key={i} className={`flexCenter ${css.exp}`}>
                <div className={css.post}>
                  <h1>{exp.place}</h1>
                  <p>{exp.tenure}</p>
                </div>
                <div className={css.role}>
                  <h1>{exp.role}</h1>
                  {exp.icon && <span className="icon-container"><exp.icon size={18}  /></span>}
                  <p>{exp.detail}</p>
                </div>
              </motion.div>
            );
          })}
        <motion.div variants={zoomIn(1, 1)} className={css.progressbar}>
          <motion.div variants={fadeIn("down", "tween", 2, 1.5)} className={css.line}></motion.div>
            <div><div className={css.circle} style={{background: "#286F6C"}}></div></div>
            <div><div className={css.circle} style={{background: "#F2704E"}}></div></div>
         <div><div className={css.circle} style={{background: "#EEC048" }}></div></div>
         </motion.div>
         <div>
        <a className={css.resumebtn} href="../../public/jagmeet_singh_resume.pdf" download>Download Resume</a>
        <a className={css.resumebtn}  href="../../public/diploma.pdf" >
    <span className="icon-container"><FiFileText size={18} style={{ marginRight: '8px' }} /></span>
   Open  Diploma
  </a>
      </div>
         </div>
   </div>
     </motion.section>
   
   </>
  );
};

export default Education;