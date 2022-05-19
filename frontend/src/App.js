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
        <Route path="/list" element={<ListOfCoins />} />
        <Route path="/coin" element={<CoinDescription />} />
      </Routes>
    </div>
  );
}

export default App;
