import React from "react";
import { motion } from "framer-motion";
import css from "./Portfolio.module.scss";
import { FaGithub } from 'react-icons/fa';
import { fadeIn, staggerChildren, textVariant, textVariant2 } from "../../utils/motion";
const Portfolio = () => {

  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}>

      <a className="anchor" id="project"></a>

      <div className={`innerWidth flexCenter ${css.container}`}>


        <motion.div variants={textVariant(.4)} className={`flexCenter ${css.heading}`}>
          <div>
            <span className="primaryText">PROJECTS</span>
            <p style={{marginTop: "10px"}}></p>
          </div>
          <a href="https://github.com/Jagm33t" target="_blank" rel="noopener noreferrer">
          <span className="secondaryText">Explore All Projects</span>
          </a>
        </motion.div>


        <div className={`flexCenter ${css.showCase}`}>
        <div>
            
            <a href="https://master--jocular-empanada-a916f1.netlify.app/" target="_blank" rel="noopener noreferrer">
            <motion.img 
             style={{
              width: "20rem",
              borderRadius: "16px", 
              maxWidth: "25rem",
              maxHeight: "18rem",
              boxShadow: "0px 21px 13px rgba(0, 0, 0, 0.13)", 
              cursor: "pointer"
          }}
            variants={fadeIn("right", "tween", .10, .6)} src="./rentright.png" alt="Rental2Review" />
            </a>
            <p style={{ marginBottom: '8px' }}>RentalRight</p>
            <a href="https://github.com/Jagm33t/RentRight" className={css.githubLink} target="_blank" rel="noopener noreferrer">
        <FaGithub size={28} style={{ color: 'black', cursor:'pointer',marginTop:'0.5rem' }} />
        
</a><a href="https://master--jocular-empanada-a916f1.netlify.app/" target="_blank" rel="noopener noreferrer">     
       <button className={css.deploybtn}>Live</button>
      </a>
            </div>
        <div>
            
            <a href="https://github.com/Jagm33t/rent2review" target="_blank" rel="noopener noreferrer">
            <motion.img 
             style={{
              width: "20rem",
              borderRadius: "16px", 
              maxWidth: "25rem",
              maxHeight: "18rem",
              boxShadow: "0px 21px 13px rgba(0, 0, 0, 0.13)", 
              cursor: "pointer"
          }}
            variants={fadeIn("right", "tween", .10, .6)} src="./rental.png" alt="Rental2Review" />
            </a>
            <p style={{ marginBottom: '8px' }}>Rental2Review</p>
            <a href="https://github.com/Jagm33t/rent2review" className={css.githubLink} target="_blank" rel="noopener noreferrer">
        <FaGithub size={28} style={{ color: 'black', cursor:'pointer',marginTop:'0.5rem' }} />
        
</a>
            </div>


        <div>

            
            <a href="https://calcuttaconstructions.ca/" target="_blank" rel="noopener noreferrer">
            <motion.img 
             style={{
              width: "20rem",
              borderRadius: "16px", 
              maxWidth: "25rem",
              maxHeight: "18rem",
              boxShadow: "0px 21px 13px rgba(0, 0, 0, 0.13)", 
              cursor: "pointer"
          }}
            variants={fadeIn("right", "tween", .10, .6)} src="./cc.png" alt="Calcutta Constructions" />
            </a>
            <p style={{ marginBottom: '8px' }}>Calcutta Constructions</p>
      <a href="https://calcuttaconstructions.ca/" target="_blank" rel="noopener noreferrer">     
       <button className={css.deploybtn}>Live</button>
      </a>
            </div>
            
        <div >
    <motion.img 
    style={{
        width: "20rem",
        borderRadius: "20px", 
        maxWidth: "25rem",
        maxHeight: "18rem",
        boxShadow: "0px 21px 13px rgba(0, 0, 0, 0.13)", 
        cursor: "pointer"
    }}
         variants={fadeIn("left", "tween", .7, .6)} 
         src="./travel-pic.png" alt="project1" />
        <p >Travel Choice</p>
        <a href="https://github.com/Jagm33t/travel_choice-next.js" className={css.githubLink} target="_blank" rel="noopener noreferrer">
        <FaGithub size={28} style={{ color: 'black', cursor:'pointer',marginTop:'0.5rem' }} />
        
</a>
<a href="https://travelchoice.netlify.app/" target="_blank" rel="noopener noreferrer">     
       <button className={css.deploybtn}>Live</button>
      </a>

    </div>
    <div >
    <motion.img 
    style={{
        width: "20rem",
        borderRadius: "20px", 
        maxWidth: "25rem",
        maxHeight: "18rem",
        boxShadow: "0px 21px 13px rgba(0, 0, 0, 0.13)", 
        cursor: "pointer"
    }}
         variants={fadeIn("left", "tween", .7, .6)} 
         src="./showCase1.png" alt="project1" />
        <p >CardMute</p>
        <a href="https://github.com/Jagm33t/Capstone-client" className={css.githubLink} target="_blank" rel="noopener noreferrer">
        <FaGithub size={28} style={{ color: 'black', cursor:'pointer',marginTop:'0.5rem' }} />
        
</a>
    </div>
    <div >
    <motion.img 
    style={{
        width: "20rem",
        borderRadius: "20px", 
        maxWidth: "25rem",
        maxHeight: "18rem",
        boxShadow: "0px 21px 13px rgba(0, 0, 0, 0.13)", 
        cursor: "pointer"
    }}
         variants={fadeIn("left", "tween", .7, .6)} 
         src="./instock-screen.png" alt="instock" />
        <p >Instock</p>
        <a href="https://github.com/Jagm33t/instock-front" className={css.githubLink} target="_blank" rel="noopener noreferrer">
        <FaGithub size={28} style={{ color: 'black', cursor:'pointer',marginTop:'0.5rem' }} />
        
</a>
    </div>
    <div >
    <a href="https://jagmeet-movielover.netlify.app/" target="_blank" rel="noopener noreferrer">
    <motion.img 
    style={{
        width: "20rem",
        borderRadius: "20px", 
        maxWidth: "25rem",
        maxHeight: "18rem",
        boxShadow: "0px 21px 13px rgba(0, 0, 0, 0.13)", 
        cursor: "pointer"
    }}
         variants={fadeIn("up", "tween", .6, .6)} 
         src="./movielover.png" alt="project2" />
         </a>
        <p >MoviesLover</p>
        <a href="https://github.com/Jagm33t/Hackathon" className={css.githubLink} target="_blank" rel="noopener noreferrer">
        <FaGithub size={28} style={{ color: 'black', cursor:'pointer',marginTop:'0.5rem' }} />
      
</a>
<a href="https://jagmeet-movielover.netlify.app/" target="_blank" rel="noopener noreferrer">
<button className={css.deploybtn}>Live</button>
</a>

    </div>
   <div>
   <a href="https://jagmeets-amazonshoppingpage.netlify.app/" target="_blank" rel="noopener noreferrer">
   <motion.img 
    style={{
      width: "20rem",
      borderRadius: "20px", 
      maxWidth: "25rem",
      maxHeight: "18rem",
      boxShadow: "0px 21px 13px rgba(0, 0, 0, 0.13)", 
      cursor: "pointer"
  }}
    variants={fadeIn("up", "tween", .7, .6)}
     src="./amazonpage.png"
      alt="project2" />
      </a>
      <p >Shopping Page</p>
      <a href="https://github.com/Jagm33t/Shopping-page" className={css.githubLink} target="_blank" rel="noopener noreferrer">
      <FaGithub size={28} style={{ color: 'black', cursor:'pointer',marginTop:'0.5rem' }} />

      </a>
      <a href="https://jagmeets-amazonshoppingpage.netlify.app/" target="_blank" rel="noopener noreferrer">
      <button className={css.deploybtn}>Live</button>
      </a>
      
   </div>
   
            <div>
            <a href="https://brainflix-platform.netlify.app/" target="_blank" rel="noopener noreferrer">
            <motion.img
            style={{
              width: "20rem",
              borderRadius: "20px", 
              maxWidth: "25rem",
              maxHeight: "18rem",
              boxShadow: "0px 21px 13px rgba(0, 0, 0, 0.13)", 
              cursor: "pointer"
          }}
            variants={fadeIn("right", "tween", .9, .6)} src="./brainflixscreen.png" alt="project3"
            />
            </a>
            <p >BrainFlix</p>

      <a href="https://github.com/Jagm33t/BrainFlix" className={css.githubLink} target="_blank" rel="noopener noreferrer">
      <FaGithub size={28} style={{ color: 'black', cursor:'pointer',marginTop:'0.5rem' }} />
      </a>
      <a href="https://brainflix-platform.netlify.app/" target="_blank" rel="noopener noreferrer">      <button className={css.deploybtn}>Live</button>
      </a>

            </div>
            

            <div>
            
            <a href="https://jagmeets-bandsite.netlify.app/" target="_blank" rel="noopener noreferrer">
            <motion.img 
             style={{
              width: "20rem",
              borderRadius: "16px", 
              maxWidth: "25rem",
              maxHeight: "18rem",
              boxShadow: "0px 21px 13px rgba(0, 0, 0, 0.13)", 
              cursor: "pointer"
          }}
            variants={fadeIn("right", "tween", .10, .6)} src="./screenshotsshow.png" alt="project4" />
            </a>
             <p >BandSite</p>
      <a href="https://github.com/Jagm33t/https://github.com/Jagm33t/BandSite" className={css.githubLink} target="_blank" rel="noopener noreferrer">
      <FaGithub size={28} style={{ color: 'black', cursor:'pointer',marginTop:'0.5rem' }} />
      </a>
      <a href="https://jagmeets-bandsite.netlify.app/" target="_blank" rel="noopener noreferrer">      <button className={css.deploybtn}>Live</button>
      </a>
            </div>
           
        </div>
        <div>
          <p style={{marginTop: "10px", fontSize:"2rem" }}>For Fun Projects</p>
          </div>
        <div className={`flexCenter ${css.showCase}`}>
          
          
         <div>
         <a href="https://jagmeetsingh-fastfingers.netlify.app/" target="_blank" rel="noopener noreferrer">
  <motion.img
  style={{
    width: "20rem",
    borderRadius: "20px", 
    maxWidth: "25rem",
    maxHeight: "18rem",
    boxShadow: "0px 21px 13px rgba(0, 0, 0, 0.13)", 
    cursor: "pointer"
}}
    variants={fadeIn("up", "tween", 0.1, 0.6)}
    src="./fastfinger.png"
    alt="project11"
    
  />
</a>
<p >Built with TypeScript</p>
         </div>
  <div>
  <a href="https://jagmeetsingh-tic-tac-toe.netlify.app/" target="_blank" rel="noopener noreferrer">
  <motion.img
  style={{
    width: "15rem",
    borderRadius: "20px", 
    maxWidth: "25rem",
    maxHeight: "18rem",
    boxShadow: "0px 21px 13px rgba(0, 0, 0, 0.13)", 
    cursor: "pointer"
}}
        variants={fadeIn("up", "tween", .1, .6)} src="./tic.png" alt="poject10" />
      </a>
      <p >Built with JavaScript</p>
  </div>
          
        
        
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;