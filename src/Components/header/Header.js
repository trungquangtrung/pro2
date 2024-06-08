import React, { useState, useRef } from 'react';
import Slider from "react-slick";
import "./Header.css";
import bannerImage from '../../Image/Banner KOI.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bannerCouple from '../../Image/CoupleWatch.png';
import bannerFeMale from '../../Image/BannerFemaleWatch.png';
import bannerMale from '../../Image/BannerMaleWatch.png';
import HeaderMain from './HeaderMain';

const SlickGoTo = () => {
    const [updateCount, setUpdateCount] = useState(0);
    const sliderRef = useRef(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        afterChange: () => setUpdateCount(updateCount + 1),
    };

    return (
        <>
        <HeaderMain />
            <div className="slider-container">
                <Slider ref={sliderRef} {...settings}>
                    <div className="banner">
                        <img src={bannerImage} alt="Banner" />
                    </div>
                    <div className='banner'>
                        <img src={bannerMale} alt="Banner" />
                    </div>
                    <div className='banner'>
                        <img src={bannerFeMale} alt="Banner" />
                    </div>
                    <div className='banner'>
                        <img src={bannerCouple} alt="Banner" />
                    </div>
                </Slider>
            </div>
            
        </>
    );
};

export default SlickGoTo;
