import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

import job_data from "../data/admission_data";
import RigthArrowIcon from "../assets/icons/RigthArrowIcon";
import LeftArrowIcon from "../assets/icons/LeftArrowIcon";
import { useRef } from "react";
import { Link } from "react-router-dom";

function JobSlider() {

    let sliderRef = useRef(null);
    const next = () => {
      sliderRef.slickNext();
    };
    const previous = () => {
      sliderRef.slickPrev();
    };

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1305,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }
  
  return (
    <div className="slider-container  relative mx-auto px-[20px]">
      <Slider ref={slider => {
          sliderRef = slider;
        }} {...settings}>
    {
        job_data.map((item) => (
            
            <div key={item.id} className=" text-start max-w-[286px] rounded-xl h-auto mobile450:max-w-[200px] shadow-md m-1 ">
            <Link to="">
              <div className="imglo mb-4">
                <img className="w-full mx-auto rounded-t-xl" src={item.img} alt={item.title} />
              </div>
              <div className="p-4">
              <p className="text-[18px] font-normal leading-5">{item.title}</p>
              <p className="text-[20px] font-semibold text-[#017575]">{item.price}</p>
              </div>
            </Link>
          </div>
        ))
    }
      </Slider>
        <button className="button absolute top-[50%] left-0 " onClick={previous}>
          <LeftArrowIcon/>
        </button>
        <button className="button absolute top-[50%] right-0" onClick={next}>
          <RigthArrowIcon/>
        </button>
    </div>
  );
}

export default JobSlider;

