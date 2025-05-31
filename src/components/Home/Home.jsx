import React from 'react'
import Hero from './homeComponents/Hero';
import Features from './homeComponents/Features';
import WhyShop from './homeComponents/WhyShop';
import AppStore from './homeComponents/AppStore';
import Footer from '../Footer';
import { Helmet } from "react-helmet-async";
const Home = () => {

  return (
    <div>
      <Helmet>
        <title>NetServe | Home</title>
        <meta
          name="description"
          content="NetServe is Nigeria's number one trusted online marketplace that connects reliable vendors with a vibrant customer base."
        />
        <meta name="keywords" content="NetServe, onlinevendors, vendors, NetPreneur, Netcare, mynetserve, restuarants, marketplace, online shopping" />
        <meta property="og:title" content="NetServe" />
        <meta
          property="og:description"
          content="NetServe is Nigeria's number one trusted online marketplace that connects reliable vendors with a vibrant customer base. NetServe offer seamless business tools, dependable logistics, and a dedicated NetCare team to ensure every order is exactly as expected – no story, no wahala. Whether you sell products, offer essential services, logistics or cooking gas, we empower you to grow by linking you with the customers you need, enabling partnership, driving quality and growth every step of the way. With deep local insights and a vision for global expansion, NetServe is your indispensable partner for success and growth in your business. 
          Become a NetPrenuer today and be that trusted business Customers shop from on NetServe. 
MyNetServe, my everyday lifestyle companion for a stress-free life!"
        />
        <meta property="og:image" content="%PUBLIC_URL%/ns.svg" />
        <meta property="og:url" content="https://mynetserve.com" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <Hero />
      <Features />
      <WhyShop />
      <AppStore />
      <Footer />
    </div>
  );
}

export default Home