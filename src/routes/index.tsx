import { useRoutes } from "react-router-dom";
import Home from "../Pages/Home";

const AppRoutes = () => useRoutes([
    { path: '/', element: <Home /> },
]);

export default AppRoutes;