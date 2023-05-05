/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import Header from './components/Header';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { Outlet } from 'react-router-dom';
import { AuthContext } from './providers/AuthProvider';
import { Vortex } from 'react-loader-spinner';
import Footer from './components/Footer';
const App = () => {
  const { loading } = useContext(AuthContext);
  if (loading) {
    return <div className='flex justify-center mt-64'>
      <Vortex
        visible={true}
        height="80"
        width="80"
        ariaLabel="vortex-loading"
        wrapperStyle={{}}
        wrapperClass="vortex-wrapper"
        colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
      />
    </div>
  }
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default App;
library.add(fas, far)