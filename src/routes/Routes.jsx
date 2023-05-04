import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import { loadData } from "../utilities/utilities";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        loader: loadData,
        children: [
            {
                path: "/",
                element: <Home />,
            },
        ],
    },
]);

export default router;