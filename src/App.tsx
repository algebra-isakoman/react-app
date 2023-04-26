import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/header";
import Exe from "./pages/exe";
import Home from "./pages/home";
import Ispit from "./pages/ispit";
import Mlinar from "./pages/mlinar";
import Petlje from "./pages/petlje";
import Varijable from "./pages/varijable";
import Vjezba2604 from "./pages/vjezba2604";

import "./styles/styles.scss";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/ispit",
      element: <Ispit />,
    },
    {
      path: "/exe",
      element: <Exe />,
    },
    {
      path: "/mlinar",
      element: <Mlinar />,
    },
    {
      path: "/varijable",
      element: <Varijable />,
    },
    {
      path: "/petlje",
      element: <Petlje />,
    },
    {
      path: "/vjezba2604",
      element: <Vjezba2604 />,
    },
  ]);

  return (
    <div className="App">
      <Header />
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
