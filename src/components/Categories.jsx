import React from 'react';
import '../assets/styles/components/Categories.scss'

const Categories = ({children}) => {
  return (  
    <div className='carousel-container'>
      <h1 className='title'>
      </h1>
      {children}
    </div>
  );
}
 
export default Categories;