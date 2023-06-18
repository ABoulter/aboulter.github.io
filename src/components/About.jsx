import React from "react";
import { Tilt } from "react-tilt";
import { motion, AnimatePresence } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} className="object-contain w-16 h-16" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <AnimatePresence>
      <>
        <motion.div>
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>Overview</h2>
        </motion.div>

        <motion.p
          variants={fadeIn(",", 0.1, 1)}
          className="mt-4 text-white
        text-[17px] max-w-3xl leading-[30px]">
          <p>
            I'm Andrei, a dedicated Full-Stack Web Developer originally from
            Braga but currently residing in Albufeira, Portugal. With a diverse
            background in Arts and a Bachelor's degree in Education, I have
            cultivated a wide range of experiences and skills.
          </p>
          <br />
          <p>
            {" "}
            Throughout my journey, I have embraced various opportunities,
            including volunteering in rehab institutions and working in roles
            such as a waiter, Sommelier, and Administrative staff in a Hospital.
            These experiences have honed my ability to handle stress and excel
            under pressure, while also significantly developing my soft skills.
          </p>
          <br />
          <p>
            {" "}
            Presently, I am actively seeking a trainee, junior, or internship
            position where I can further enhance my development skills and make
            meaningful contributions to my prospective employer. During my
            leisure time, when I am not immersed in coding or acquiring new
            knowledge, you can find me indulging in gaming, watching captivating
            movies and TV shows, or diving into intriguing books.
          </p>
        </motion.p>
        <div className="flex flex-wrap gap-10 mt-20">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </>
    </AnimatePresence>
  );
};

export default SectionWrapper(About, "about");
