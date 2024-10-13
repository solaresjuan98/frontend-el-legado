import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Carrousel.css'; // Importar el archivo CSS con los estilos
import { S3_BUCKET_URL } from '../../constants/constants';

export const Carrousel = () => {


  return (
    <div className="carousel-container">
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={3000}
      >
        {/* Contenido del primer slide */}
        <div>
          <img
            src="https://fondos-legado.s3.us-east-2.amazonaws.com/CongresoPortada.jpg"
            alt="Imagen 1"
          />

        </div>

        {/* Contenido del segundo slide */}
        <div>
          <img
            src="https://fondos-legado.s3.us-east-2.amazonaws.com/PORTAD+2.jpg"
            alt="Imagen 2"
          />
        </div>
        {/* Contenido del tercer slide */}
        <div>
          <iframe
            src={`${S3_BUCKET_URL}/videos/PROMOCIONAL1.mp4`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          ></iframe>
        </div>


      </Carousel>
    </div>
  );
};
