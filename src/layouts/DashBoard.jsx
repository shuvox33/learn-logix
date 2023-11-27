import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";


const DashBoard = () => {
    const [isAdmin] = useAdmin();
    console.log(isAdmin);


    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-green-300">
                <ul className="menu p-4 text-base font-medium">
                    {
                        isAdmin && <>
                            <li>
                                <NavLink to={'/dashboard/teacherRequest'}>Teacher Request</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/dashboard/allClasses'}>All Classes</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/dashboard/users'}>Users</NavLink>
                            </li>
                        </>
                    }

                </ul>

            </div>
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoard;