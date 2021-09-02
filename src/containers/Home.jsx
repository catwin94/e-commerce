import React, {Fragment} from 'react';
import Header from '../components/Header';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';

const Home = () => {
  return (  
    <Fragment>
      <Header/>
      <Categories>
        <Carousel>
          <CarouselItem/>
        </Carousel>
      </Categories>
      <Footer/>
    </Fragment>
  );
}
 
export default Home;