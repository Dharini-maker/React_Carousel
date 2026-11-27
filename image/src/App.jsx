
import { useState, useEffect } from "react";
import "./App.css";

const images = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1000",
  "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1000",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1000",
  "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=1000"
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentIndex((prev) =>
      (prev - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">

      <div className="decoration circle1"></div>
      <div className="decoration circle2"></div>
      <div className="decoration circle3"></div>
      <div className="decoration circle4"></div>

      <div className="content">
        <h1>✦ Image Carousel ✦</h1>
        <p className="subtitle">Explore the beauty of nature</p>

        <div className="carousel">

          <div className="image-wrapper">
            <img
              src={images[currentIndex]}
              alt="Nature landscape"
              key={currentIndex}
            />
          </div>

          <div className="controls">
            <button onClick={previousImage}>
              ❮ Previous
            </button>

            <button onClick={nextImage}>
              Next ❯
            </button>
          </div>

          <div className="dots">
            {images.map((image, index) => (
              <span
                key={index}
                className={currentIndex === index ? "active" : ""}
                onClick={() => setCurrentIndex(index)}
              ></span>
            ))}
          </div>

          <p className="counter">
            Image {currentIndex + 1} of {images.length}
          </p>

        </div>

        <footer>
          <p>✧ Developed by Dharini S ✧</p>
          <p className="footer-text">React JS | useState | useEffect</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
