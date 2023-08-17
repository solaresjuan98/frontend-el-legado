import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Carrousel.css'; // Importar el archivo CSS con los estilos

export const Carrousel = () => {
  const linkStyle = {
    textDecoration: 'none', // Quitar subrayado
    color: 'inherit', // Para asegurar que el color del texto se herede del contenedor
  };

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
            src="https://github.com/JuanDiegoAlv1234/ImagenesVarias/blob/master/Portada.jpg?raw=true"
            alt="Imagen 1"
          />
          
        </div>

        {/* Contenido del segundo slide */}
        <div>
          <img
            src="https://github.com/JuanDiegoAlv1234/ImagenesVarias/blob/master/Portada%203.jpg?raw=true"
            alt="Imagen 2"
          />
        </div>
      </Carousel>
    </div>
  );
};
