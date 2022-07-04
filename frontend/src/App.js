import React from "react";
import { Routes, Route } from 'react-router-dom';

import Homepage from './pages/Homepage';
import ListOfCoins from './pages/ListOfCoins';
import CoinDescription from './pages/CoinDescription';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/search" element={<ListOfCoins />} />
        <Route path="/list" element={<ListOfCoins />} />
        <Route path="/category/:id" element={<ListOfCoins />} />
        <Route path="/list" element={<ListOfCoins />} />
        {/* <Route path="/category/:id" render={({match}) => <ListOfCoins id={match.params.id} />} /> */}
        <Route path="/coin" element={<CoinDescription />} />
      </Routes>
    </div>
  );
}

export default App;
