import React, { Fragment } from "react";
// import "../../assets/styles/Media.scss";
import "../../assets/styles/components/Categories.scss";

const Categories = (props) => {
  return (
    <div className="carousel-container">
      <div className="title">
        <h1>{props.titulo}</h1>
      </div>
      <Fragment>{props.children}</Fragment>
    </div>
  );
};

export default Categories;
