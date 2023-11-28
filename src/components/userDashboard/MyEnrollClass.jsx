import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { NavLink } from "react-router-dom";

const MyEnrollClass = () => {

    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();

    const [allEnrolls, setAllEnrolls] = useState([])

    useEffect(() => {
        axiosPublic.get(`/myenroll/${user?.email}`)
            .then(res => {
                setAllEnrolls(res.data);
            })
    }, [allEnrolls, axiosPublic, user?.email])

    return (
        <div className="grid grid-cols-3 gap-3">
            {
                allEnrolls.map(enroll => <div key={enroll._id} className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src={enroll.image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{enroll.title}</h2>
                        <p>{enroll.name}</p>
                        <div className="card-actions justify-end">
                            <NavLink to={`/dashboard/myenrollclasdetails/${enroll.classId}`}>
                                <button className="btn btn-primary">Continue</button></NavLink>
                        </div>
                    </div>
                </div>)
            }
        </div>

    );
};

export default MyEnrollClass;