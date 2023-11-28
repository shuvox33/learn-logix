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
import DashBoard from "../layouts/DashBoard";
import TeacherRequest from "../components/AdminDashboard/TeacherRequest";
import AllUsers from "../components/AdminDashboard/AllUsers";
import AllClassesAdmin from "../components/AdminDashboard/AllClassesAdmin";
import AddClass from "../components/TeacherDashboard/AddClass";
import MyClass from "../components/TeacherDashboard/MyClass";
import MyProfile from "../components/shared/MyProfile";
import UpdateClass from "../components/TeacherDashboard/UpdateClass";

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
    {
        path : 'dashboard',
        element : <DashBoard></DashBoard>,
        children :[
            {
                path : 'teacherRequest',
                element : <TeacherRequest></TeacherRequest>
            },
            {
                path : 'allClasses',
                element : <AllClassesAdmin></AllClassesAdmin>
            },
            {
                path : 'users',
                element : <AllUsers></AllUsers>
            },
            {
                path : 'addclass',
                element : <AddClass></AddClass>
            },
            {
                path : 'myclass',
                element : <MyClass></MyClass>
            },
            {
                path : 'myclass/update/:id',
                element : <UpdateClass></UpdateClass>,
                loader: ({params}) => fetch(`http://localhost:5000/classes/single/${params.id}`)
            },
            {
                path : 'myprofile',
                element : <MyProfile></MyProfile>
            },
        ]
    }
]);

export default routes;