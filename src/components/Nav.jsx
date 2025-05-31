import React from 'react';
import logo from '../images/logo.svg';
import { GiHamburgerMenu } from "react-icons/gi";
import {motion, AnimatePresence} from 'motion/react';
import {Link, useLocation} from 'react-router-dom';
import { IoMdClose } from "react-icons/io";
import { useState } from 'react';

const MotionLink = motion.create(Link);
const menuVariant = {
  hidden: {
    width: 0,
  },
  visible: {
    width: "90%",
    transition: {
      duration: 1,
      delay: 0.5,
      staggerChildren: 0.5,
      delayChildren: 1.5,
      ease: "easeInOut",
    },
  },
  exit: {
    width: 0,
    transition: {
      duration: 1,
      delay: 0.5,
      ease: "easeInOut",
    }
  }
};
const childVariant = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    }
  },
  exit: {
    opacity: 0,
    x: -50,
    transition: {
      duration: 0.5,
    }
  }
}

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  function showMenu() {
    setToggle(!toggle);
  }

  const location = useLocation();       
  return (
    <header className="overflow-x-hidden">
      <nav className="pt-[54px] pb-[20px] xl:px-[95px] px-[25px] flex justify-between w-full items-center">
        <div className="flex gap-x-[10px] items-center">
          <img src={logo} alt="logo" />
          <h3 className="text-text-dark text-[16px]">NetServe</h3>
        </div>
        <GiHamburgerMenu
          style={{ color: "var(--color-hamburger-close)", fontSize: "30px" }}
          onClick={showMenu}
          className="cursor-pointer lg:hidden"
        />
        <AnimatePresence>
          {toggle && (
            <motion.div
              variants={menuVariant}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="z-[50] bg-primary h-[2000px] pt-[50px] flex flex-col gap-y-[30px] items-center w-[90%] absolute top-0 right-0
            "
            >
              <IoMdClose
                style={{ fontSize: "30px" }}
                onClick={showMenu}
                className="text-white cursor-pointer"
              />
              <div
                className="*:hover:underline *:active:underline *:hover:text-decoration-white *:active:text-decoration-white 
              *:text-white *:text-[24px] flex flex-col gap-y-[40px] items-center *:cursor-pointer"
              >
                <MotionLink variants={childVariant} to="/">
                  Home
                </MotionLink>
                <MotionLink variants={childVariant} to="/">
                  Products
                </MotionLink>
                <MotionLink variants={childVariant} to="/">
                  Get to know us
                </MotionLink>
                <MotionLink variants={childVariant} to="/">
                  Contact us
                </MotionLink>
                <MotionLink variants={childVariant} to="/">
                  <button className="text-primary bg-white py-[20px] px-[24px] rounded-[20px] hover:scale-[1.05] ease">
                    Download our app
                  </button>
                </MotionLink>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="max-lg:hidden lg:w-2/3 flex justify-between items-center *:text-[18px] *:text-text-dark *:hover:underline
        *:hover:text-decoration-primary *:active:underline
        ">
          <Link
            to="/"
            className={`flex gap-x-[5px] items-center ${
              location.pathname === "/"
                ? "!text-primary font-bold"
                : "text-white"
            }`}
          >
            <div className={`h-[35px] w-[3px] rounded-[41px] ${
              location.pathname === "/"
                ? "bg-primary font-bold"
                : "text-white"
            }`}>

            </div>
            Home
          </Link>
          <Link to="/">Products</Link>
          <Link to="/">Get to know us</Link>
          <Link to="/">Contact us</Link>
          <Link to="/">
            <button className="text-white bg-primary py-[20px] px-[24px] rounded-[20px] hover:scale-[1.05] ease">
              Download our app
            </button>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Nav