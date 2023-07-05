import {
  BrowserRouter,
  Routes,
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Photos from "./pages/Photos";
import Layout from "./components/Layout";
import Resume from "./pages/Resume";
import Login, {
  loader as loginLoader,
  action as loginAction,
} from "./pages/Login";
import "./server";
import SPResume from "./pages/SPResume";
import Detail from "./pages/Detail";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/photos" element={<Photos />} />

      <Route path="/resume" element={<Resume />} />
      <Route path="/single-page-resume" element={<SPResume />} />
      <Route path="/detail" element={<Detail />} />

      <Route
        path="login"
        element={<Login />}
        loader={loginLoader}
        action={loginAction}
      />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
