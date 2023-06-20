import {Routes,Route, BrowserRouter} from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Photos from './pages/Photos';

import Layout from './components/Layout';
import Resume from './pages/Resume';

function App() {
  return (
    <BrowserRouter>
       <Routes >
       <Route element={<Layout />}>
          <Route  path="/" element={<Home />} />
          <Route path="/photo" element={<Photos />} />
          <Route path="/resume" element={<Resume />} />
          </Route>
    </Routes>
    </BrowserRouter>
   

  );
}

export default App;
