import { createBrowserRouter, RouterProvider } from "react-router-dom";
//layout
import MainLayout from "./layout/MainLayout";
import { Navigate } from "react-router-dom";
//firebase
import { auth } from "./firebase/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
//pages
import Home from "./pages/Home";
import Headphones from "./pages/Headphones";
import Earphones from "./pages/Earphones";
import Speakers from "./pages/Speakers";
import Product from "./pages/Product";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoutes";
import { useDispatch, useSelector } from "react-redux";
import { isAuthChange, logIn } from "./redux/features/userSlice";
import { useEffect } from "react";

function App() {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch()
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute user={user}>
          <MainLayout />
        </ProtectedRoute>
      ),
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
          path: "/product/:slug",
          element: <Product />,
        },
      ],
    },
    {
      path: "/login",
      element: <>{user ? <Navigate to="/" /> : <Login />}</>,
    },
    {
      path: "/signup",
      element: <>{user ? <Navigate to="/" /> : <Signup />}</>,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch(logIn(user));
      dispatch(isAuthChange());
    });
  }, []);

  return <RouterProvider router={routes} />;
}

export default App;
