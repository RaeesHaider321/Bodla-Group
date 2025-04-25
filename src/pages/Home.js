import React from 'react';
import NewsTicker from "../components/NewsTicker";
import Slider from "../components/Slider";
import TrustedAdvisors from '../components/TrustedAdvisors';
import AboutHomejs from '../components/AboutHome';
import HistoryTimeline from '../components/HistoryTimeline';
import HomeServices from '../components/HomeServices';
import UtilitiesList from '../components/UtilitiesList';
import HomeProjects from '../components/HomeProjects';
import BodlaUpdates from '../components/BodlaUpdates';
import PromotionalSlider from '../components/PromotionalSlider';
import Testimonial from '../components/Testimonial';

const Home = () => {
  return (
    <>
      <div data-aos="fade-up" data-aos-duration="1000">
        <NewsTicker />
      </div>

      <div data-aos="fade-up" data-aos-duration="1300">
        <Slider />
      </div>

      <div data-aos="fade-up" data-aos-duration="1600">
        <TrustedAdvisors />
      </div>

      <div data-aos="fade-up" data-aos-duration="1900">
        <AboutHomejs />
      </div>

      <div data-aos="fade-up" data-aos-duration="2100">
        <HistoryTimeline />
      </div>

      <div data-aos="fade-up" data-aos-duration="2400">
        <HomeServices />
      </div>

      <div data-aos="fade-up" data-aos-duration="2700">
        <HomeProjects />
      </div>

      <div data-aos="fade-up" data-aos-duration="3000">
        <UtilitiesList />
      </div>

       <div data-aos="fade-up" data-aos-duration="3300">
        <BodlaUpdates />
      </div>

      <div data-aos="fade-up" data-aos-duration="3600">
        <PromotionalSlider />
      </div>
      <div data-aos="fade-up" data-aos-duration="3900">
        <Testimonial/>
      </div>
    </>
  );
};

export default Home;
