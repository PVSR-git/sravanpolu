import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Photos from "./pages/Photos";

import Layout from "./components/Layout";
import Resume from "./pages/Resume";
import Login from "./pages/Login";
import "./server";
import SPResume from "./pages/SPResume";
import Detail from "./pages/Detail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/photos" element={<Photos />} />

          <Route path="/resume" element={<Resume />} />
          <Route path="/single-page-resume" element={<SPResume />} />
          <Route path="/detail" element={<Detail />} />

          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
