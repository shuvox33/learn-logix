import { NavLink } from "react-router-dom";

const JoinTeacher = () => {
    return (
        <div>
            <div className="hero min-h-[500px] bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://i.ibb.co/D8GJJsC/teacher.png" className="max-w-sm rounded-lg shadow-2xl" />
                    <div className="w-1/2 ml-10">
                        <h1 className="text-5xl font-bold">Become an Instructor !</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <NavLink to={'/teachonlearnlogix'}>
                            <button className="btn btn-primary">Start Teaching Today</button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JoinTeacher;