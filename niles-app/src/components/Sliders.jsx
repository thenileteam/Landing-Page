import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from "react-redux";
const Sliders = () => {
  const { sliderImages, sliderSettings } = useSelector(
    (store) => store.mainSlider
  );
  return (
    <section  id='sliders' className="py-16 bg-pry1">
      <h2 className=" section-header">The all-in-one commerce platform for africa.<br/>Launch your store online and in person.</h2>
        <div className="bg-myCustomColor-light mx-auto mt-20 py-5 px-5">
          <Slider {...sliderSettings}>
            {sliderImages.map((image, index) => (
              <div key={index}>
                <a href="#">
                  <img
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="w-full"
                  />
                </a>
              </div>
            ))}
          </Slider>
        </div>
    </section>
  );
};

export default Sliders;