import { useRoutes } from "react-router-dom";
import Home from "../pages/Home";

const AppRoutes = () => useRoutes([
    { path: '/', element: <Home /> },
]);

export default AppRoutes;