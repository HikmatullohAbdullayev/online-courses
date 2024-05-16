import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import newYear_data from "../data/new_year";
import RigthArrowIcon from "../assets/icons/RigthArrowIcon";
import LeftArrowIcon from "../assets/icons/LeftArrowIcon";
import { useRef } from "react";

function NewYearSlider() {

    let sliderRef = useRef(null);
    const next = () => {
      sliderRef.slickNext();
    };
    const previous = () => {
      sliderRef.slickPrev();
    };

    // function SampleNextArrow(props) {
    //     const { className, style, onClick } = props;
    //     return (
    //       <div
    //         className={className}
    //         style={{ ...style, display: "block", background: "red" }}
    //         onClick={onClick}
    //       />
    //     );
    //   }
      
    //   function SamplePrevArrow(props) {
    //     const { className, style, onClick } = props;
    //     return (
    //       <span
    //         className={className}
    //         style={{ ...style, display: "block", background: "green" }}
    //         onClick={onClick}> <LeftArrowIcon/></span>
    //     );
    //   }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 1,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
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
                <img className=" w-[200px] mx-auto " src={item.img} alt="" />
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

