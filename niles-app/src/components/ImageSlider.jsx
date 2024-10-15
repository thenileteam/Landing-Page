// src/components/ImageSlider.js
import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateSliderSettings,updateCurrentSlide } from "../features/Slider/sliderSlice";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {
  const dispatch = useDispatch();
  const sliderRef = useRef(null);
  const { images, isHovered, sliderSettings, currentElement, } = useSelector(
    (store) => store.slider
  );
  // Update the current slide based on hover state on the desktop view
  useEffect(() => {
    const updateSettings = () => {
      if (window.innerWidth < 1000) {
        // For mobile view, enable autoplay
        dispatch(updateSliderSettings({ autoplay: true }));
      } else {
        // For desktop view, disable autoplay
        dispatch(updateSliderSettings({ autoplay: false, speed: 1000 }));
      }
    };

    updateSettings();

    // when the window resizes update the settings function
    window.addEventListener("resize", updateSettings);

    // Clean up function for the event listener
    return () => window.removeEventListener("resize", updateSettings);
  }, [dispatch]);

  // Update the current slide based on hover state on the desktop view
  useEffect(() => {
    if (window.innerWidth >= 1000 && sliderRef.current && isHovered) {
      const currentSlide = sliderRef.current.innerSlider.state.currentSlide;
      if (currentElement !== currentSlide) {
        sliderRef.current.slickGoTo(currentElement);
        dispatch(updateCurrentSlide(currentElement));
      }
    }
  }, [currentElement, isHovered]);

  return (
    <div className="w-full lg:w-1/2">
      <Slider ref={sliderRef} {...sliderSettings}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-auto"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
