import React from 'react';
import '../assets/styles/components/Categories.scss'

const Categories = (props) => {
  return (  
    <div className='carousel-container'>
      <div className='title'>
        <h1 >
          {props.titulo}
        </h1>
      </div>
      {props.children}
    </div>
  );
}
 
export default Categories;