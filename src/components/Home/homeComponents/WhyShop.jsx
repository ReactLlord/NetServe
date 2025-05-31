import React from 'react'

const WhyShop = () => {
  return (
    <section>
      <h1 className="text-[20px] text-text-dark text-center mt-[100px]">
        Why shop with <span className="!text-primary">NetServe?</span>
      </h1>
      <div className="flex flex-col lg:flex-row">
        <div className="bg-gray mt-[44px] py-[34px] px-[24px] max-w-[500px] mx-auto rounded-[27px]">
          <div className="flex py-[8px] px-[32px] rounded-[37px] bg-primary w-[157px] text-white mx-auto mb-[61px]">
            As a Shopper
          </div>
          <div
            className="*:p-[16px] *:leading-[27px] *:text-text-dark *:border-2 *:border-solid *:border-[#DADADA] 
        flex flex-col gap-y-[34px] *:rounded-[16px]"
          >
            <div>Explore wide range of products from trusted vendors.</div>
            <div>
              Enjoy competitive prices and exclusive deals from your favorites
              vendors.
            </div>
            <div>Safe and convenient payment options.</div>
            <div>
              Reliable customer support for a seamless shopping experience.
            </div>
          </div>
        </div>
        <div className="bg-gray mt-[44px] py-[34px] px-[24px] max-w-[500px] mx-auto rounded-[27px]">
          <div className="py-[8px] px-[32px] rounded-[37px] bg-primary w-[157px] text-white mx-auto mb-[61px]">
            As a vendor
          </div>
          <div
            className="*:p-[16px] *:leading-[27px] *:text-text-dark *:border-2 *:border-solid *:border-[#DADADA] 
        flex flex-col gap-y-[34px] *:rounded-[16px]"
          >
            <div>
              Reach million of customers within and outside of your city, or
              country
            </div>
            <div>Secure transactions and transparent policies.</div>
            <div>
              Easy-to-use platform for listing products, managing orders, interacting and retaining customers.
            </div>
            <div>Dedicated seller support from the NetCare team.</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyShop