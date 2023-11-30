import { NavLink, useLoaderData } from "react-router-dom";
import { ToastContainer } from "react-toastify";


const AllClasses = () => {

    const classes = useLoaderData();




    return (

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {
                classes.map(clas =>
                    <div key={clas._id} className="card w-96 bg-primary text-primary-content">
                        <figure><img src={clas.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Title :{clas.title}</h2>
                            <h2 className="text-lg">Name :{clas.name}</h2>
                            <h2 className="text-lg">Email :{clas.email}</h2>
                            <h2 className="text-lg">price :{clas.price}</h2>
                            <p>Des : {clas.description}</p>
                            <p>Total Enroll :{clas.totalenroll} </p>
                            {/* <div className="card-actions justify-end">
                                <button onClick={() => handleEnroll(clas)} className="btn">Enroll</button>
                            </div> */}
                            <div className="card-actions justify-end">
                                <NavLink to={`/classDetails/${clas._id}`}>
                                    <button className="btn">Enroll</button>
                                </NavLink>
                            </div>
                        </div>
                    </div>)
            }
            <ToastContainer />
        </div>
    );
};

export default AllClasses;