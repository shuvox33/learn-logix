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
import MyEnrollClass from "../components/userDashboard/MyEnrollClass";
import EnrollClassDetails from "../components/userDashboard/EnrollClassDetails";
import AllReview from "../components/AdminDashboard/AllReview";
import ClassDetails from "../components/AllClasses/ClassDetails";

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
                element : <AllClasses></AllClasses>,
                loader:() => fetch(`http://localhost:5000/classes/approved`)
            },
            {
                path : 'classDetails/:id',
                element : <PrivateRoute><ClassDetails></ClassDetails></PrivateRoute>,
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
                index: true,
                element: <h3 className="text-3xl text-center text-green-300">Welcome To DashBoard</h3>
            },
            {
                path : 'teacherRequest',
                element : <TeacherRequest></TeacherRequest>
            },
            {
                path : 'allClasses',
                element : <AllClassesAdmin></AllClassesAdmin>,
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
            {
                path : 'myenrolls',
                element : <MyEnrollClass></MyEnrollClass>
            },
            {
                path : 'myenrollclasdetails/:classId',
                element : <EnrollClassDetails></EnrollClassDetails>
            },
            {
                path : 'allreview/:classId',
                element : <AllReview></AllReview>
            },
        ]
    }
]);

export default routes;