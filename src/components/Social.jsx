import React from "react";
import { Tilt } from "react-tilt"; 
import { motion } from "framer-motion";

import { styles } from "../styles"; 
import { socials } from "../constants"; 
import { SectionWrapper } from "../hoc"; 
import { fadeIn, textVariant } from "../utils/motion"; 

const ServiceCard = ({ index, title, icon, link }) => (
  <Tilt className='xs:w-[190px] w-full' options={{ max: 45, scale: 1, speed: 450 }}>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div className='bg-tertiary rounded-[50px] py-5 px-12 min-h-[180px] flex justify-evenly items-center flex-col cursor-pointer'>
        <a href={link} target="blank">
          <img src={icon} alt='web-development' className='w-20 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </a>
      </div>
    </motion.div>
  </Tilt>
);

const Social = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>You can find me </p>
        <h2 className={styles.sectionHeadText}>On</h2>
      </motion.div>

      <div className='mt-20 flex flex-row flex-wrap justify-center gap-10 just'>
        {socials.map((service, index) => (
          <ServiceCard key={service.title} index={index} link={service.link} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Social, "Social");
