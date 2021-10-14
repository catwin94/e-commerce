import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "../assets/styles/components/SiderBar.scss";

const SiderBar = (props) => {
  const [checkNb, setcheckNb] = useState(1);

  useEffect(() => {
    setInterval(function () {
      setcheckNb((prevState) => {
        if (prevState < 4) {
          return prevState + 1;
        } else {
          return 1;
        }
      });
    }, 5000);
  }, []);

  const noop = () => {}; // NO OPeration function

  //UseEffect: Cuando una variable del array se modifica o cambia de valor, se vuelve a ejecutar el useEffect.
  // Cuando el array esta vacio o el useEffect no depende de ninguna variable, solo se ejecuta una vez cuando se carga el componente.

  const offerList = useSelector((state) =>
    state.courses.list.filter((item) => item.promotion)
  );

  return (
    <div className="slider">
      {/* <div className="offers">
        <h2>{props.offer}</h2>
      </div> */}
      {/* <h1 style={{ color: "red" }}> Cursosssss </h1> */}
      <div className="slides">
        {/* <!-- radio buttons start --> */}
        <input
          type="radio"
          name="radio-btn"
          id="radio1"
          checked={checkNb === 1}
          onChange={noop}
        />
        <input
          type="radio"
          name="radio-btn"
          id="radio2"
          checked={checkNb === 2}
          onChange={noop}
        />
        <input
          type="radio"
          name="radio-btn"
          id="radio3"
          checked={checkNb === 3}
          onChange={noop}
        />
        <input
          type="radio"
          name="radio-btn"
          id="radio4"
          checked={checkNb === 4}
          onChange={noop}
        />
        {/* <!-- radio buttons end -->
        <!-- slide images start --> */}
        {offerList.map((item, key) => {
          if (key === 0) {
            return (
              <div className="slide first" key={key}>
                <img src={item.pictureLink} alt="" />
              </div>
            );
          } else {
            return (
              <div className="slide" key={key}>
                <img src={item.pictureLink} alt="" />
              </div>
            );
          }
        })}

        {/* <!-- slide images end -->
        <!-- automatic navigation start --> */}
        <div className="navigation-auto">
          <div className="auto-btn1"></div>
          <div className="auto-btn2"></div>
          <div className="auto-btn3"></div>
          <div className="auto-btn4"></div>
        </div>
        {/* <!-- automatic navigation end -->
        <!-- manual navigation start .. linked with radio btn id --> */}
        <div className="navigation-manual">
          <label
            htmlFor="radio1"
            className="manual-btn"
            onClick={() => {
              setcheckNb(1);
            }}
          ></label>
          <label
            htmlFor="radio2"
            className="manual-btn"
            onClick={() => {
              setcheckNb(2);
            }}
          ></label>
          <label
            htmlFor="radio3"
            className="manual-btn"
            onClick={() => {
              setcheckNb(3);
            }}
          ></label>
          <label
            htmlFor="radio4"
            className="manual-btn"
            onClick={() => {
              setcheckNb(4);
            }}
          ></label>
        </div>
        {/* <!-- manual navigation end --> */}
      </div>
      <div className="offers">
        <h2>{props.offer}</h2>
      </div>
    </div>
  );
};

export default SiderBar;
