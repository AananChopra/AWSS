import React from 'react'
import "./hero.css"
import HeroImage from "../../assets/hero.png"
import { SlideUp } from '../../../Utility/animations'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section>
        <div className="Hero-section">
            {/* Text section */}
            <div className='hero-section-text'>
                <div className='hero-section-text-2'>
                    <motion.h1 variants={SlideUp(0.2)}
                    whileInView={"animate"}
                    initial="initial" className='covid-19-risks'>COVID-19 Risk <br/> Assessment Tool</motion.h1>
                    <motion.p 
                    variants={SlideUp(0.4)}
                    whileInView={"animate"}
                    initial="initial"
                    className='covid-19-text'>
                        A set of solutions designed to help quickly identify corona virus
                        symptoms and get reliable information regarding COVID-19 concerns.
                    </motion.p>
                    <motion.div 
                    variants={SlideUp(0.6)}
                    whileInView={"animate"}
                    initial="initial"
                    className='see-button'>
                        <button>See how to use it</button>
                    </motion.div>
                </div>
            </div>


            {/* image section */}
            <motion.div
            initial={{opacity:0 , scale: 0.5}}
            whileInView={{opacity:1 , scale:1}}
             className='hero-section-image'>
                <img src={HeroImage}/>
            </motion.div>
        </div>
    </section>
  )
}

export default Hero