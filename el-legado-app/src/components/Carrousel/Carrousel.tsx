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
            src="https://scontent.fgua3-3.fna.fbcdn.net/v/t39.30808-6/355486675_278947701313929_2215865153211816696_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=300f58&_nc_ohc=M2FVKk1zToAAX8-e-0u&_nc_ht=scontent.fgua3-3.fna&oh=00_AfAZMYrCkyyoW7N_EJu9GE7KGMZj6JKBDQsINSWOlC_12Q&oe=64DED042"
            alt="Imagen 1"
          />
          
        </div>

        {/* Contenido del segundo slide */}
        <div>
          <img
            src="https://scontent.fgua3-3.fna.fbcdn.net/v/t39.30808-6/355486675_278947701313929_2215865153211816696_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=300f58&_nc_ohc=M2FVKk1zToAAX8-e-0u&_nc_ht=scontent.fgua3-3.fna&oh=00_AfAZMYrCkyyoW7N_EJu9GE7KGMZj6JKBDQsINSWOlC_12Q&oe=64DED042"
            alt="Imagen 2"
          />
        </div>
      </Carousel>
    </div>
  );
};
