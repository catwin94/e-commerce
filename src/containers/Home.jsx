import React, {Fragment} from 'react';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';

const Home = () => {
  return (  
    <Categories>
      <Carousel>
        <CarouselItem/>
      </Carousel>

      <Carousel>
        <CarouselItem/>
      </Carousel>

      <Carousel>
        <CarouselItem/>
      </Carousel>

      <Carousel>
        <CarouselItem/>
      </Carousel>


    </Categories>
  );
}
 
export default Home;