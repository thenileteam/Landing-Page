import { useState } from 'react';

const ImageHoverComponent = () => {
  // State to store the current image URL
  const [currentImage, setCurrentImage] = useState('');

  // Image URLs for different buttons
  const images = {
    image1: 'https://example.com/image1.jpg',
    image2: 'https://example.com/image2.jpg',
    image3: 'https://example.com/image3.jpg',
  };

  return (
    <div>
      {/* Buttons with hover events */}
      <div>
        <button
          onMouseEnter={() => setCurrentImage(images.image1)}
          onMouseLeave={() => setCurrentImage('')}
        >
          Button 1
        </button>

        <button
          onMouseEnter={() => setCurrentImage(images.image2)}
          onMouseLeave={() => setCurrentImage('')}
        >
          Button 2
        </button>

        <button
          onMouseEnter={() => setCurrentImage(images.image3)}
          onMouseLeave={() => setCurrentImage('')}
        >
          Button 3
        </button>
      </div>

      {/* Display the image based on the hover state */}
      <div>
        {currentImage && (
          <img
            src={currentImage}
            alt="Hovered Image"
            style={{ width: '200px', height: 'auto' }}
          />
        )}
      </div>
    </div>
  );
};

export default ImageHoverComponent;