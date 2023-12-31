import { NavLink } from "react-router-dom";
import { SiSololearn } from "react-icons/si";
import { ToastContainer, toast } from 'react-toastify';
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
    const { user, logOut } = useAuth();
    console.log(user);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast("Logout Successful!")
                console.log('logout');
            })
            .catch(error => {
                console.error(error);
            })
    }
    const links = <>
        <div className="flex gap-5">
            <NavLink to={'/'} className={({ isActive }) => isActive ? 'btn btn-primary btn-sm' : 'btn btn-ghost btn-sm'}>Home</NavLink>
            <NavLink to={'allclasses'} className={({ isActive }) => isActive ? 'btn btn-primary btn-sm' : 'btn btn-ghost btn-sm'}>All Classes</NavLink>
            <NavLink to={'teachonlearnlogix'} className={({ isActive }) => isActive ? 'btn btn-primary btn-sm' : 'btn btn-ghost btn-sm'}>Teach on Learn-Logix</NavLink>
        </div>
    </>
    return (
        <div className="navbar bg-base-100 flex justify-around">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-lg dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-96">
                        {links}
                    </ul>
                </div>
                <div className="flex items-center">
                    <SiSololearn className="text-3xl text-green-400"></SiSololearn>
                    <a className="btn btn-ghost text-xl">Learn Logix</a>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div>
                {
                    user ? <>
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-lg">
                                <li className="text-center mb-5 font-semibold">{user.displayName}</li>

                                <li><NavLink to={'dashboard'}><button className=" ml-4 px-3 py-1 btn btn-ghost btn-sm">Dashboard</button></NavLink></li>

                                <li><button onClick={handleLogOut} className=" ml-4 px-3 py-1 btn btn-primary btn-sm">Log Out</button></li>
                            </ul>
                        </div>
                    </> :
                        <>
                            <div>
                                <NavLink to={'login'} className={({ isActive }) => isActive ? 'btn btn-primary btn-sm' : 'btn btn-ghost btn-sm'}>Sign In</NavLink>
                            </div>
                        </>
                }
            </div>
            <ToastContainer />
        </div>
    );
};

export default Navbar;