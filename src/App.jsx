
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
      <h1>Image Carousel</h1>

      <div className="carousel">
        <img
          src={images[currentIndex]}
          alt="Carousel"
        />

        <div className="controls">
          <button onClick={previousImage}>❮ Previous</button>
          <button onClick={nextImage}>Next ❯</button>
        </div>

        <p>
          Image {currentIndex + 1} of {images.length}
        </p>
      </div>
    </div>
  );
}

export default App;
