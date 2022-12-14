import React from 'react';

import './scss/style.css';

import NavBar from './components/NavBar/NavBar'
import HomePage from './components/HomePage';
import ItemDetailContainer from './components/Items/ItemDetailContainer';
import ItemListContainer from './components/Items/ItemListContainer';

import {BrowserRouter, Routes, Route} from "react-router-dom";

import { ToastContainer, Slide} from 'react-toastify';
// https://fkhadra.github.io/react-toastify/introduction
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <ToastContainer transition={Slide} />

      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route exact path='/' element={<HomePage/>}/>
          <Route exact path='/products'  element={<ItemListContainer/>}/>
          <Route exact path='/products/:category'  element={<ItemListContainer/>}/>
          <Route exact path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>

      {/* <Footer/> */}
    </div>
  );
}

export default App;

