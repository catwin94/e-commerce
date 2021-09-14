import React, {Fragment} from 'react';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import SiderBar from '../components/SiderBar';

const Home = () => {
  return (  
    <Fragment>
      
      <SiderBar />
      
      <Categories titulo="Curso de Cocina">
        <Carousel>
          <CarouselItem/>
          <CarouselItem/>
          <CarouselItem/>
          <CarouselItem/>
          <CarouselItem/>
        </Carousel>
      </Categories>

      <Categories titulo="Curso de Música">
        <Carousel>
          <CarouselItem/>
        </Carousel>
      </Categories>

      <Categories titulo="Curso de Programación">
        <Carousel>
          <CarouselItem/>
        </Carousel>
      </Categories>  

      <Categories titulo="Cursos Varios">
        <Carousel>
          <CarouselItem/>
        </Carousel>
      </Categories>
    </Fragment>
    
  );
}
 
export default Home;