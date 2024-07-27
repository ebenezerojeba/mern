import React from "react";
import "./Header.css";
import { motion } from "framer-motion";
import vid from "../../assets/video.mp4";
import back from '../../assets/back.jpeg';

const Header = () => {
  return (
    <div className="header">
    <div className="overlay"></div>
    <img src={back} alt="" />
      <video src={vid} playsInline muted autoPlay loop></video> 
       <div className="header-contents">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 5, delay: 2 }}
        >
          <h2>Welcome to Palatial events & catering services</h2>
        </motion.div>
        <button>
          <a href="#explore-menu">View Menu</a>
  </button>
      </div>
    </div>
  );
};
/*<motion.h3 className='load-screen-message' variants={sentence} initial="hidden" animate="visible">
               <div className='header'>
            <div className="overlay"></div>
        <video src={vid} autoPlay loop muted></video>
      </div>

      {line1.split("").map((char,index) =>{
  return(
    <motion.span className='text' key={char + "-" + index} variants={letter}
    >{char}</motion.span>
  )
})}
<br />
{line2.split("").map((char, index) =>{
  return(
    <motion.span key={char + "-" + index} variants={letter}>{char}</motion.span>
  )
})}   
    
    </motion.h3>
    <AnimatedText text="hello"/>
  )
  
  
}

 const defaultAnimation = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
 }
 export const AnimatedText = ({
  text,
  el: Wrapper = "p",
  className,

 }) => {
  return(
    <Wrapper className={className}>
      <span className='sr-only'>{text}</span>
      <motion.span 
      initial= "hidden" 
      animate="visible"
      transition={{staggerChildren: 0.1}}
       aria-hidden>
      {text.split("").map((char) =>{
        <motion.span variants={defaultAnimation}>{char}</motion.span>
      })}
      </motion.span>
    </Wrapper>
  )
 }*/
 

export default Header;
