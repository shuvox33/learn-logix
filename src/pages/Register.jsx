import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {


    // const {createUser} = useContext(AuthContext);
    const {createUser} = useContext(AuthContext)
    const [registerError, setRegisterError] = useState('');
    const navigate = useNavigate();

    const handleSingUp = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;
        const photo = e.target.photourl.value;
        const terms = e.target.terms.checked;
        console.log(name, photo);
        const specialCharacterPattern = /[^\w\s]/;

        if (password.length < 6) {
            setRegisterError('Password should be at least 6 characters')
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError('password must have capital letter')
            return;
        }
        else if (!specialCharacterPattern.test(password)) {
            setRegisterError('password must have special charecter')
            return;
        }
        else if (!terms) {
            setRegisterError('please accept our terms & condition')
            return;
        }

        setRegisterError('');

        createUser(email, password)
            .then((result) => {
                toast('Sing Up Successful')

                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photo
                })
                    .then(() => console.log('profile updated'))
                    .catch()

                e.target.reset();
                navigate('/');
            })
            .catch(error => console.error(error));
    }

    return (
        <div>
            <h3 className="text-4xl text-center">Register</h3>
            <div className="hero min-h-full ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSingUp} className="card-body ">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" name="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name="password" className="input input-bordered" required />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Profile Photo URL</span>
                                </label>
                                <input type="text" placeholder="url" name="photourl" className="input input-bordered" />

                            </div>


                            <div className="text-xs space-x-1 items-center mt-2">
                                <input type="checkbox" name="terms" id="terms" />
                                <label htmlFor="terms">Accept our terms and condition</label>
                            </div>



                            <div className="form-control mt-2">
                                <button className="btn btn-primary">Sign Up</button>
                            </div>
                            <div className="mt-3">
                                <p className="text-sm text-center">Already a User? Please <NavLink to={'/login'}><span className="text-blue-600">Log In</span></NavLink></p>
                            </div>
                            {
                                registerError && <p className="mb-2 text-sm text-red-600 text-center">{registerError}</p>
                            }
                        </form>

                    </div>
                </div>
            </div>

            <ToastContainer />
        </div>
    );
};

export default Register;