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
import Error from "./components/Error";
import NotFound from "./components/NotFound";
import { requireAuth } from "../../sravanpolu/src/utils";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route
        path="/photos"
        element={<Photos />}
        loader={async () => {
          await requireAuth();
          return null;
        }}
      />

      <Route path="/resume" element={<SPResume />} />
      <Route path="/single-page-resume" element={<SPResume />} />
      <Route path="/detail" element={<Detail />} />

      <Route
        path="login"
        element={<Login />}
        loader={loginLoader}
        action={loginAction}
      />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
