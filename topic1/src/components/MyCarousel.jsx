// Import React dan komponen Carousel dari React Bootstrap
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Carousel } from "react-bootstrap";

// Import gaya Bootstrap (Anda dapat mengimpor gaya Bootstrap melalui CDN jika Anda tidak menggunakan modul CSS)
import 'bootstrap/dist/css/bootstrap.min.css';

// Buat komponen Carousel
const MyCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://example.com/slide1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Slide 1</h3>
          <p>Deskripsi slide pertama.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://example.com/slide2.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Slide 2</h3>
          <p>Deskripsi slide kedua.</p>
        </Carousel.Caption>
      </Carousel.Item>
      {/* Tambahkan lebih banyak Carousel.Item jika diperlukan */}
    </Carousel>
  );
};

// Ekspor komponen Carousel
export default MyCarousel;
