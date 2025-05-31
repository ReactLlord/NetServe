import React from 'react'
import playstore from '../../../images/playstore.svg';
import apple from '../../../images/apple.svg';
import {Link} from 'react-router-dom';
import appstore from '../../../images/appstore.png';
const AppStore = () => {
  return (
    <div className="bg-primary rounded-[16px] pt-[24px] px-[20px] mx-[21px] mt-[52px] max-w-[500px] lg:max-w-[1000px] mx-auto
    flex flex-col lg:flex-row lg:px-[71px] lg:pt-[95px]
    ">
      <div className='lg:w-1/3'>
        <h1 className="text-white text-[32px]">Start shopping on NetServe</h1>
        <p className="text-white text-[15px] leading-[39px] mt-[16px]">
          Enjoy the ease of buying from stores around you, from the comfort of
          wherever you are.
        </p>
        <div className="flex justify-center gap-x-[10px] mt-[40px]">
          <Link to="/">
            <button className="bg-white rounded-[8px] p-[9px]">
              <div className="flex">
                <img src={playstore} alt="playstore" />
                <div className="flex flex-col items-start">
                  <small className="text-[12px]">GET IT ON</small>
                  <small className="text-[16px]">Google Play</small>
                </div>
              </div>
            </button>
          </Link>
          <Link to="/">
            <button className="bg-white rounded-[8px] p-[9px]">
              <div className="flex">
                <img src={apple} alt="apple" />
                <div className="flex flex-col items-start">
                  <small className="text-[12px]">Download on the</small>
                  <small className="text-[16px]">App Store</small>
                </div>
              </div>
            </button>
          </Link>
        </div>
      </div>
      <img src={appstore} alt="appstore" className='lg:w-2/3'/>
    </div>
  );
}

export default AppStore