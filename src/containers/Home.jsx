import React, { Fragment } from "react";
import Categories from "../components/Carousel/Categories";
import Carousel from "../components//Carousel/Carousel";
import CarouselItem from "../components/Carousel/CarouselItem";
import SiderBar from "../components/SiderBar";
import { useSelector } from "react-redux";

const Home = () => {
  const itemWidth = 300;
  const offer = "30% Off Your Purchase from $80! | Code:FDSE21";

  const carouselList = useSelector((state) => state.courses.list);

  return (
    <Fragment>
      <SiderBar offer={offer} />

      <Categories titulo="Curso de Cocina">
        <Carousel itemWidth={itemWidth}>
          {carouselList
            .filter((item) => item.category === "Cocina")
            .map((item, key) => (
              <CarouselItem
                key={key}
                itemWidth={itemWidth}
                title={item.category}
                description={item.shortDescription}
                item={item}
              />
            ))}
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
};

export default Home;
