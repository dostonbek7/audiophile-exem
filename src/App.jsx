import { createBrowserRouter, RouterProvider } from "react-router-dom";
//layout
import MainLayout from "./layout/MainLayout";
//pages
import Home from "./pages/Home";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children:[
        {
          index:true,
          element:<Home/>
        }
      ]
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
