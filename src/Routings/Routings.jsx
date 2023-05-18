import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/Home/Home/Home";
import AddAToy from "../components/AddAToy/AddAToy";


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
          element: <AddAToy></AddAToy>
        }
      ]
    },
  ]);

  export default router