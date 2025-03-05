import React from "react";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CustomScrollContainer from './CustomScrollContainer';

const images = [
    '/images/int-obs/first2.png',
    '/images/int-obs/first1.png',
    '/images/int-obs/second1.png',
    '/images/int-obs/second2.png',
    '/images/int-obs/second3.png',
  ];

  const Scrollbar = () => {
    const [ref, inView] = useInView({
      triggerOnce: false, 
      threshold: 0.2,
    });
  
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1,
        },
      },
    };
  
    
  const firstGroupVariants = {
    hidden: { opacity: 0, x: -150, y: 350, scale: 0.5 },
    visible: {
      opacity: [0, 0.5, 1], 
      x: -350,
      y: 130,
      scale: 5,
      transition: { duration: 2 },
    },
  };

  const secondGroupVariants = {
    hidden: { opacity: 0, x: -130, y: 450, scale: 0.5 },
    visible: {
      opacity: [0, 0.5, 1], 
      x: -250,
      y: 170,
      scale: 3,
      transition: { duration: 2.5 }, 
    },
  };
    return (
        
        <div className="section" ref={ref} style = {{backgroundImage:'url(../images/bg2.png)'}}>
            <div className="section__inner">
                <div className="subtitles">
                    <span className="subtitles__item">Текст</span>
                    <span className="subtitles__item">Сообщения</span>
                </div>
                <CustomScrollContainer>
                    <p><strong>Lorem, ipsum dolor sit amet</strong> consectetur adipisicing elit. Nisi maxime nesciunt impedit dolorum commodi aspernatur aperiam? Fugit obcaecati fuga quia, eligendi recusandae enim commodi aliquam velit unde saepe, distinctio dolores.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus qui unde quas quod error, reiciendis dolorem voluptatem explicabo libero voluptatibus obcaecati at architecto soluta officiis doloremque. Amet officiis vitae in!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, dicta distinctio! Nihil ipsum enim ipsam similique quasi obcaecati doloribus dolore unde, quod, nam, culpa iste? Adipisci rerum assumenda totam eos.
                    </p>
                </CustomScrollContainer>
            </div>
            <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {images.slice(0, 3).map((src, index) => (
          <motion.img
            key={index}
            src={src}
            alt={`Image ${index + 1}`}
            variants={firstGroupVariants}
            transition={{ duration: 0.5 }}
          />
        ))}
        {images.slice(3).map((src, index) => (
          <motion.img
            key={index + 2}
            src={src}
            alt={`Image ${index + 3}`}
            variants={secondGroupVariants}
            transition={{ duration: 0.5 }}
          />
        ))}
      </motion.div>
        </div>
    )
}

export default Scrollbar