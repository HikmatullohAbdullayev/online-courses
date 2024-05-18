import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import newYear_data from "../data/new_year";
import RigthArrowIcon from "../assets/icons/RigthArrowIcon";
import LeftArrowIcon from "../assets/icons/LeftArrowIcon";
import { useRef } from "react";
import { Link } from "react-router-dom";

function NewYearSlider() {

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
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 580,
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
        newYear_data.map((item) => (
            <div key={item.id} className="">
              <Link>
                <img className=" w-[200px] mx-auto " src={item.img} alt="img" />
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

export default NewYearSlider;

