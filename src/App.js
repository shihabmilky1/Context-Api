import React, { createContext, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Shipment from './components/Shipment/Shipment';
export const cetagoryContext = createContext();
function App() {
  const [category,setCategory]= useState('')
  return (
    <cetagoryContext.Provider value={[category,setCategory]}>
      <Header></Header>
      <Home></Home>
      <Shipment></Shipment>
    </cetagoryContext.Provider>
  );
}

export default App;
