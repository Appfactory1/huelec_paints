import React, { useState } from 'react';
import Swiper from 'react-id-swiper';
import './album.css';
import image1 from '../images/image1.png';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';

const albumConfigs = {
    containerClass: 'swiper-container hero-slider',
    parallax: true,
    centeredSlides: true,
    slidesPerView: 1,
    speed: 5,
    spaceBetween: 30,
    loop: true,
    effect: 'slide',
    observer: true, 
    observeParents: true, 
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
};

const Album = () => {
    const {parallaxSwiper, setParallaxSwiper} = useState(null);
    const parallaxAmount = parallaxSwiper ? parallaxSwiper.width *0.95 : 0;
    const parallaxOpacity = 0.5;

    return(
        <Swiper {...albumConfigs} getSwiper={setParallaxSwiper}>
            <div className="hero-slide">
                <div 
                    className="slide-image"
                    data-swiper-parallax={parallaxAmount}
                    data-swiper-parallax-opacity={parallaxOpacity}
                >
                    <img src={image1} alt="image1" />
                </div>
                <div className="col-md-6 offset-md-3 my-auto text-center text-white content" >
                    <h1 className="text-uppercase mb-2 font-weight-bold">Slide 1</h1>
                    <p className="mb-5 small">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>
                </div>
            </div>

            <div className="hero-slide">
                <div 
                    className="slide-image"
                    data-swiper-parallax={parallaxAmount}
                    data-swiper-parallax-opacity={parallaxOpacity}
                >
                    <img src={image2} alt="image2" />
                </div>
                <div className="col-md-6 offset-md-3 my-auto text-center text-white content" >
                    <h1 className="text-uppercase mb-2 font-weight-bold">Slide 2</h1>
                    <p className="mb-5 small">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>
                </div>
            </div>
            
            <div className="hero-slide">
                <div 
                    className="slide-image"
                    data-swiper-parallax={parallaxAmount}
                    data-swiper-parallax-opacity={parallaxOpacity}
                >
                    <img src={image3} alt="image3" />
                </div>
                <div className="col-md-6 offset-md-3 my-auto text-center text-white content" >
                    <h1 className="text-uppercase mb-2 font-weight-bold">Slide 3</h1>
                    <p className="mb-5 small">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>
                </div>
                
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
            </div>
        </Swiper>
    );
};

export default Album;