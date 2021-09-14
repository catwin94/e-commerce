import React, {Fragment} from 'react';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import SiderBar from '../components/SiderBar';

const Home = () => {
  return (  
    <Fragment>
      
      <SiderBar />

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
    </Fragment>
    
  );
}
 
export default Home;