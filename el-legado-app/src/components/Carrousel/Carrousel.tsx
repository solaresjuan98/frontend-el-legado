import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Carrousel.css'; // Importar el archivo CSS con los estilos

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
            src="https://fondos-legado.s3.us-east-2.amazonaws.com/Portada.jpg"
            alt="Imagen 1"
          />
          
        </div>

        {/* Contenido del segundo slide */}
        <div>
          <img
            src="https://fondos-legado.s3.us-east-2.amazonaws.com/Portada+3.jpg"
            alt="Imagen 2"
          />
        </div>
      </Carousel>
    </div>
  );
};
