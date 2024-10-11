 // src/components/ImageSlider.js
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { autoplay, setHoverState, updateSliderSettings } from '../features/Slider/sliderSlice';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageSlider = () => {
  const dispatch = useDispatch();
  
    // Get state properties from Redux store
    const{images, isHovered,sliderSettings} = useSelector(store=> store.slider)
 
  // Set slider settings based on screen size
  useEffect(() => {
    const updateSettings = () => {
      if (window.innerWidth < 768) {
        // For mobile view, enable autoplay
        dispatch(updateSliderSettings({ autoplay: true, autoplaySpeed: 2000 }));
      } else {
        // For desktop view, disable autoplay
        dispatch(updateSliderSettings({ autoplay: false }));
      }
    };

    updateSettings();

    // when the window resizes update settings
    window.addEventListener('resize', updateSettings);
    
    // Clean up event listener
    return () => window.removeEventListener('resize', updateSettings);
  }, [dispatch]);

  // Update autoplay settings based on hover state for desktop
  useEffect(() => {
    if (window.innerWidth >= 768) {
      dispatch(autoplay(isHovered));
    }
  }, [isHovered, dispatch]);

  return (
    <div
      className="w-full lg:w-1/2"
   
    >
      <Slider {...sliderSettings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index + 1}`} className="w-full h-auto" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
