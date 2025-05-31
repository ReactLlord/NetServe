import React from "react";
import {features} from './data.js';
import homeFeatures from '../../../images/home-features.png';
import {Link} from 'react-router-dom';
import wave from '../../../images/wave.svg';
import waveTwo from '../../../images/wave-two.svg';
const Features = () => {
  return (
    <section className="flex flex-col gap-y-[50px] bg-black pb-[100px] mt-[150px] md:max-lg:mt-[200px] xl:mt-[300px] relative">
      <img src={wave} alt="wave" className="top-[-50px] absolute"/>
      {features.map(({ id, img, title, text, button }) => {
        return (
          <div
            key={id}
            className={`flex flex-col pt-[50px] px-[24px] max-w-[320px] mx-auto mt-[50px] lg:max-w-full lg:gap-x-[50px]
              ${id === 1? 'lg:flex-row-reverse': 'lg:flex-col'} ${id === 2 ? 'lg:flex-row': 'lg:flex-col'}`}
          >
            <img src={img} alt={title} className="lg:w-[90%]" />
            <div className="bg-primaryTwo rounded-[16px] mt-[29px] px-[16px] lg:w-[70%] lg:h-[320px] p-[40px] lg:mt-[200px]
            lg:max-w-[579px] lg:p-[40px]
            ">
              <div className="flex items-center gap-x-[12px] mt-[20px]">
                <div className="h-[2px] w-[19px] bg-white"></div>
                <h4 className="text-white text-[18px]">{title}</h4>
              </div>
              <p className="text-white text-[15px]">{text}</p>
              <Link to="/">
                <button className="mt-[28px] text-white bg-primary py-[20px] px-[24px] rounded-[20px] hover:scale-[1.05] ease">
                  {button}
                </button>
              </Link>
            </div>
          </div>
        );
      })}
      <img src={waveTwo} alt="wave-two" className="absolute bottom-[-70px] sm:hidden"/>
    </section>
  );
};

export default Features;
