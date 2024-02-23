import { createBrowserRouter, RouterProvider } from "react-router-dom";
//layout
import MainLayout from "./layout/MainLayout";
//pages
import Home from "./pages/Home";
import Headphones from "./pages/Headphones";
import Earphones from "./pages/Earphones";
import Speakers from "./pages/Speakers";
import Product from "./pages/Product";
import Signup from "./pages/Signup";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/headphones",
          element: <Headphones />,
        },
        {
          path: "/speakers",
          element: <Speakers />,
        },
        {
          path: "/earphones",
          element: <Earphones />,
        },
        {
          path: "product/:slug",
          element: <Product />,
        },
      ],
    },
    {
      path: "/signup",
      element: <Signup />,
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
