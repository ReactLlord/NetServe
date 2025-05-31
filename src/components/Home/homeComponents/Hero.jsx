import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import {motion} from 'motion/react';
import heroImage from '../../../images/hero-image.png';
import {Link} from 'react-router-dom';

const words = ["Buying", "Selling"];
const Hero = () => {
 const [text, setText] = useState("");
 const [index, setIndex] = useState(0);
 const [isDeleting, setIsDeleting] = useState(false);

 useEffect(() => {
   const currentWord = words[index];
   let typingSpeed = isDeleting ? 100 : 150;

   if (!isDeleting && text.length === currentWord.length) {
     setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
   } else if (isDeleting && text === "") {
     setIsDeleting(false);
     setIndex((prev) => (prev + 1) % words.length);
   }

   const timeout = setTimeout(() => {
     setText(
       (prevText) =>
         isDeleting
           ? prevText.slice(0, -1) // Delete last character
           : currentWord.slice(0, prevText.length + 1) // Add next character
     );
   }, typingSpeed);

   return () => clearTimeout(timeout);
 }, [text, isDeleting, index]);
  return (
    <section className="pt-[49px] xl:mt-[128px] lg:max-xl:mt-[60px] px-[24px] xl:px-[95px] sm:max-md:pl-[40px] md:relative">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex flex-col gap-y-[14px]"
      >
        <h1 className="text-text-dark text-[40px] lg:max-xl:text-[60px] xl:text-[76px] font-medium">
          Shop Easy,
        </h1>
        <h1 className="text-text-dark text-[40px] lg:max-xl:text-[60px] xl:text-[76px]  font-medium">
          Enjoy stress-free{" "}
        </h1>
        <motion.div className="flex items-center text-[40px] lg:max-xl:text-[60px] xl:text-[76px] font-medium *:text-primary">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {text}
          </motion.span>

          {/* Blinking Caret */}
          <motion.span
            className="ml-1 text-primary"
            initial={{ opacity: 1 }}
            animate={{ opacity: [1, 0, 1] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
          >
            |
          </motion.span>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mt-[20px] flex justify-center md:absolute md:right-[24px] md:top-0 md:w-[50%]"
      >
        <img src={heroImage} alt="hero-image" className="lg:w-[80%]" />
      </motion.div>
      <motion.p
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mt-[40px] text-text-dark text-[16px] font-medium leading-[23px] max-lg:max-w-[334px] lg:text-[21px] 
      lg:max-w-[546px]"
      >
        NetServe offer the most convenience and trusted means of assessing different products, services and businesses in one place. 
      </motion.p>
      <Link to="/">
        <button className="mt-[28px] text-white bg-primary py-[20px] px-[24px] rounded-[20px] hover:scale-[1.05] ease">
          Get Started
        </button>
      </Link>
    </section>
  );
}

export default Hero;