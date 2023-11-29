import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { NavLink } from "react-router-dom";

const PopularClass = () => {

    const axiosPublic = useAxiosPublic()
    const [pClasses, setPclasses] = useState([])

    useEffect(() => {
        axiosPublic.get('popularclass')
            .then(res => {
                setPclasses(res.data)
            })
    }, [axiosPublic])



    return (
        <div className="mt-14">
            <h3 className="text-3xl text-center">Popular Class</h3>
            <div className="grid grid-cols-3">
                {
                    pClasses.map((clas => <div key={clas._id} className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={clas.image} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{clas.title}</h2>
                            <p>Teacher : {clas.name}</p>
                            <p>Total-enroll : {clas.totalenroll}</p>
                        </div>
                    </div>))
                }
            </div>
            <div className="flex justify-center mt-5 mb-10">
                <NavLink to={'/allClasses'}>
                    <button className="btn btn-primary btn-sm">See All Class</button>
                </NavLink>
            </div>
        </div>
    );
};

export default PopularClass;