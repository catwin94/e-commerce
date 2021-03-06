import React, { Fragment } from "react";
import Categories from "../components/Carousel/Categories";
import Carousel from "../components//Carousel/Carousel";
import CarouselItem from "../components/Carousel/CarouselItem";
import SiderBar from "../components/SiderBar";
import { useSelector } from "react-redux";

const Home = () => {
  const itemHeight = 350;
  const offer = "30% Off Your Purchase from $80! | Code:FDSE21";

  const carouselList = useSelector((state) => state.courses.list);

  return (
    <Fragment>
      <SiderBar offer={offer} />

      <Categories titulo="Cooking Courses">
        <Carousel itemHeight={itemHeight}>
          {carouselList
            .filter(
              (item) => item.category.toLowerCase() === "Cocina".toLowerCase()
            )
            .map((item, key) => (
              <CarouselItem
                key={key}
                itemHeight={itemHeight}
                title={item.title}
                description={item.shortDescription}
                price={item.price}
                pictureLink={item.pictureLink}
                item={item}
              />
            ))}
        </Carousel>
      </Categories>

      <Categories titulo="Music Courses">
        <Carousel itemHeight={itemHeight}>
          {carouselList
            .filter(
              (item) => item.category.toLowerCase() === "Musica".toLowerCase()
            )
            .map((item, key) => (
              <CarouselItem
                key={key}
                itemHeight={itemHeight}
                title={item.title}
                description={item.shortDescription}
                price={item.price}
                pictureLink={item.pictureLink}
                item={item}
              />
            ))}
        </Carousel>
      </Categories>

      <Categories titulo="Programming Courses">
        <Carousel itemHeight={itemHeight}>
          {carouselList
            .filter(
              (item) =>
                item.category.toLowerCase() === "Programacion".toLowerCase()
            )
            .map((item, key) => (
              <CarouselItem
                key={key}
                itemHeight={itemHeight}
                title={item.title}
                description={item.shortDescription}
                price={item.price}
                pictureLink={item.pictureLink}
                item={item}
              />
            ))}
        </Carousel>
      </Categories>
    </Fragment>
  );
};

export default Home;
