import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useIsTeacher from "../hooks/useIsTeacher";


const DashBoard = () => {
    const [isAdmin] = useAdmin();

    const [isTeacher] = useIsTeacher();

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
                    {
                        isTeacher && <>
                            <li>
                                <NavLink to={'/dashboard/addclass'}>Add Class</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/dashboard/myclass'}>My Class</NavLink>
                            </li>
                        </>
                    }

                    {
                        (!isTeacher && !isAdmin) && <>
                            <li>
                                <NavLink to={'/dashboard/myenrolls'}>My Enroll Class</NavLink>
                            </li>
                        </>
                    }


                    <div className="divider"></div>
                    <li>
                        <NavLink to={'/'}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/dashboard/myprofile'}>My Profile</NavLink>
                    </li>

                </ul>

            </div>
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoard;