import { NavLink } from "react-router-dom";


const Contact = () => {
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl mt-20">
            <figure><img className="w-96" src="https://i.ibb.co/2sW3Mj9/offer1.jpg" alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title text-4xl mt-10">10% off to our Web Development course!</h2>

                <div className="card-actions justify-center mt-7">
                    <NavLink to={'/allclasses'}>
                        <button className="btn btn-primary">Explore</button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Contact;