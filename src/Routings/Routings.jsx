import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/Home/Home/Home";
import AddAToy from "../components/AddAToy/AddAToy";
import Login from "../components/Home/Login/Login";
import Register from "../components/Home/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AllToys from "../components/Home/AllToys/AllToys";
import MyToys from "../components/Home/MyToys/MyToys";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path:'add-toy',
          element: <PrivateRoute><AddAToy></AddAToy></PrivateRoute>
        },
        {
          path:'all-toys',
          element: <AllToys></AllToys>,
          loader: () => fetch('http://localhost:5000/toys')
        },
        {
          path:'my-toys',
          element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'register',
          element: <Register></Register>
        }
      ]
    },
  ]);

  export default router