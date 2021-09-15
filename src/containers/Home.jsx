import React, {Fragment} from 'react';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import SiderBar from '../components/SiderBar';

const Home = () => {
  const itemWidth = 310;
  return (  
    <Fragment>
      
      <SiderBar />
      
      <Categories titulo="Curso de Cocina">
        <Carousel itemWidth={itemWidth}>
          <CarouselItem itemWidth={itemWidth} />
          <CarouselItem itemWidth={itemWidth} />
          <CarouselItem itemWidth={itemWidth} />
          <CarouselItem itemWidth={itemWidth} />
          <CarouselItem itemWidth={itemWidth} />
          <CarouselItem itemWidth={itemWidth} />
        </Carousel>
      </Categories>

      <Categories titulo="Curso de Música">
        <Carousel itemWidth={itemWidth}>
          <CarouselItem itemWidth={itemWidth} />
        </Carousel>
      </Categories>

      <Categories titulo="Curso de Programación">
        <Carousel itemWidth={itemWidth}>
          <CarouselItem itemWidth={itemWidth} />
        </Carousel>
      </Categories>  

      <Categories titulo="Cursos Varios">
        <Carousel itemWidth={itemWidth}>
          <CarouselItem itemWidth={itemWidth} />
        </Carousel>
      </Categories>
    </Fragment>
    
  );
}
 
export default Home;