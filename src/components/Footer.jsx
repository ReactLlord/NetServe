import React from 'react'
import logo from '../images/logo.svg';
import xlogo from '../images/xlogo.svg';
import fblogo from '../images/fblogo.svg';
import instalogo from '../images/instalogo.svg';
import linkedinlogo from '../images/linkedinlogo.svg';
import {Link} from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="mt-[69px] px-[24px] pb-[27px]">
      <div className="flex flex-col lg:flex-row lg:justify-between">
        <div>
          <div className="flex gap-x-[10px] items-center">
            <img src={logo} alt="logo" />
            <h3 className="text-text-dark text-[16px]">NetServe</h3>
          </div>
          <p className="text-text-dark text-[15px] leading-[26px] mt-[26px] max-w-[416px]">
            We are committed to serving as a platform for seamless transactions
            processes that will help businesses reach a greater audience while
            connecting this same audience to the business they need around them
            and beyond.
          </p>
          <div className="flex mt-[32px] gap-x-[20px]">
            <a href="https://x.com/_NetServe">
              <img src={xlogo} alt="xLogo" />
            </a>
            <a href="https://web.facebook.com/profile.php?id=100095180761965">
              <img src={fblogo} alt="fbLogo" />
            </a>
            <a href="https://www.instagram.com/_netserve?igsh=MXJzaHh0cXdjb3Fnaw==">
              <img src={instalogo} alt="instalogo" />
            </a>
            <img src={linkedinlogo} alt="linkedinlogo" />
          </div>
        </div>
        <div className="grid grid-cols-12 grid-rows-8 mt-[84px] gap-y-[52px] lg:gap-x-[30px] lg:mt-0 xl:gap-x-[50px]">
          <div className="col-span-12 row-span-5 lg:col-span-6 lg:row-span-8">
            <h6 className="text-[18px] font-medium">Company</h6>
            <div className="*:text-[15px] *:text-text-dark *:hover:text-primary *:active:text-primary flex flex-col mt-[26px] gap-y-[20px]">
              <Link to="/">Get to know us</Link>
              <Link to="/">Vendors app</Link>
              <Link to="/">Customers app</Link>
              <Link to="/">Contact us</Link>
            </div>
          </div>
          <div className="col-span-12 row-span-3 lg:col-span-6 lg:row-span-8">
            <h6 className="text-[18px] font-medium">Legal</h6>
            <div className="*:text-[15px] *:text-text-dark *:hover:text-primary *:active:text-primary flex flex-col mt-[26px] gap-y-[20px]">
              <Link to="/">Legal structure</Link>
              <Link to="/">Become an investor</Link>
            </div>
          </div>
        </div>
      </div>
      <p className="mt-[44px] text-gray-400">
        &copy; {new Date().getFullYear()} NetServe Inc. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;