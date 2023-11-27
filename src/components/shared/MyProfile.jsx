import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const MyProfile = () => {

    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();

    const [userinfo, setUserInfo] = useState(null);


    useEffect(() => {
        axiosPublic.get(`/users/${user?.email}`)
            .then(res => {
                setUserInfo(res.data);
            })

    }, [user?.email,axiosPublic])


    return (
        <div className="card w-96 bg-base-100 shadow-xl mx-auto mt-10">
            <figure className="mt-5"><img className="rounded-full" src={userinfo?.photo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{userinfo?.name}</h2>
                <p>{userinfo?.email}</p>
                <p>Phon : +880 1700-62068</p>
                <p className="text-lg text-green-500">{userinfo?.role}</p>
            </div>
        </div>
    );
};

export default MyProfile;