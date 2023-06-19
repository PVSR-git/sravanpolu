import {Routes,Route, BrowserRouter} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Photos from './pages/Photos';

function App() {
  return (
    <BrowserRouter>
       <Routes>
          <Route  path="/" element={<Home />} />
          <Route pathe="/photos" element={<Photos />} />
    </Routes>
    </BrowserRouter>
   

  );
}

export default App;
