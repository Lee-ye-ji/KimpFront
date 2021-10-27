import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import styled from 'styled-components'
import CardContent from "../Common/CardContent";

import SwiperCore, {
    Pagination
  } from 'swiper';


SwiperCore.use([Pagination]);

function SliderFour(props) {

    const Slider = styled(Swiper)`
    height: 550px;
    padding-top: 30px;
    .swiper-pagination-bullet-active{
        background: #102A3E;
    }
    `
    
    return (
        <>
     <Slider
     slidesPerView={1} spaceBetween={10} pagination={{"clickable": true}} breakpoints={{
            "@0.00": {
                "slidesPerView": 1,
                "spaceBetween": 10
            },
            "@0.75": {
                "slidesPerView": 2,
                "spaceBetween": 20
            },
            "@1.00": {
                "slidesPerView": 3,
                "spaceBetween": 40
            },
            "@1.50": {
                "slidesPerView": 4,
                "spaceBetween": 50
            }
            }} className="mySwiper">
            {props.list && props.list.map((content, index) => (    
                <SwiperSlide>
                    { content && <CardContent content={content} index={index}/> }
                </SwiperSlide>
            ))}
            </Slider>
      </> 
      
    )
}

export default SliderFour
