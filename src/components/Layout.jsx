import React, {Children, Fragment} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = ({children}) => {
  return (  
    <Fragment>
      <Header/>
      {Children}
      <Footer/>
    </Fragment>
  );
}
 
export default Layout;