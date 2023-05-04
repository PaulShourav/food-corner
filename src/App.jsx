/* eslint-disable no-unused-vars */
import React from 'react';
import Header from './components/Header';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { Outlet } from 'react-router-dom';
const App = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default App;
library.add(fas,far)