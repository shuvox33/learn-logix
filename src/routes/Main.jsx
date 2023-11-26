import {
    createBrowserRouter
} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
import AllClasses from "../pages/AllClasses";
import TeachOnLearnLogix from "../pages/TeachOnLearnLogix";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children :[
            {
                path : '/',
                element : <Home></Home>
            },
            {
                path : 'allclasses',
                element : <PrivateRoute><AllClasses></AllClasses></PrivateRoute>
            },
            {
                path : 'teachonlearnlogix',
                element : <PrivateRoute><TeachOnLearnLogix></TeachOnLearnLogix></PrivateRoute>
            },
            {
                path : 'login',
                element : <Login></Login>
            },
            {
                path : 'register',
                element : <Register></Register>
            }
        ]
    },
]);

export default routes;