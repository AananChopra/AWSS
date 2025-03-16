import React, { useState } from 'react'
import "./Upload.css"
import {SlideUp} from "../../Utility/animations"
import { motion } from 'framer-motion'

const Upload = () => {


    const [selectedImage, setSelectedImage] = useState(null);

    // Handle Image Selection
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
        setSelectedImage(URL.createObjectURL(file)); // Create a preview URL
        }
    };


  return (
    <div className="Hero-section">
        
        {/* Text section */}
        <div className='hero-section-text'>
            <div className='hero-section-text-2'>
                <motion.h1 variants={SlideUp(0.2)}
                whileInView={"animate"}
                initial="initial" className='Upload-img-header'>The Most Advance <br/> Waste Classification Model</motion.h1>
                <motion.p 
                variants={SlideUp(0.4)}
                whileInView={"animate"}
                initial="initial"
                className='upload-img-text'>
                    Upload the image you want to classify and get the result in seconds.                        
                </motion.p>
                <motion.div 
                variants={SlideUp(0.2)}
                whileInView={"animate"}
                initial="initial"
                className='see-button'>
                    <button>Upload</button>
                </motion.div>
            </div>
        </div>


        {/* image Upload section */}
        <motion.div
        initial={{opacity:0 , scale: 0.5}}
        whileInView={{opacity:1 , scale:1  ,transition: {duration: 0.5}}}
        className='hero-section-image'>
            <div className='hero-section-image-2'>
                {selectedImage ? (
                <img src={selectedImage} alt="Selected" className="preview-image" />
                ) : (
                <p>No image selected</p>
                )}
                
                {/* File Input */}
                <input type="file" accept="image/*" onChange={handleImageChange} />
            </div>
        </motion.div>
    </div>
  )
}

export default Upload