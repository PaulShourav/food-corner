import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
// import { loadData } from "../utilities/utilities";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ViewRecipe from "../pages/ViewRecipe";
import PrivateRoute from "./PrivateRoute";
import Blog from "../pages/Blog";

const router = createBrowserRouter([
    
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        // loader: data,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "view-recipe/:id",
                element:<PrivateRoute><ViewRecipe/></PrivateRoute> ,
            },
            {
                path: "blog",
                element: <Blog/>,
            },
            {
                path: "login",
                element: <Login/>,
            },
            {
                path: "register",
                element: <Register/>,
            },
        ],
    },
]);

export default router;