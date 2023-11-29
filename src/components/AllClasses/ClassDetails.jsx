import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const ClassDetails = () => {

    const id = useParams();

    const [classInfo, setClassInfo] = useState([])

    const { user } = useAuth();
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate();

    useEffect(() => {
        axiosPublic.get(`/classes/single/${id.id}`)
            .then(res => {
                setClassInfo(res.data)
            })
    }, [axiosPublic, id])

    const handlePay = () => {
        const data = {
            classId: classInfo._id,
            userEmail: user.email,
            tEmail: classInfo.email,
            title: classInfo.title,
            name: classInfo.name,
            image: classInfo.image

        }
        axiosPublic.post('/enroll', data)
            .then(() => {
                toast('Course Enrolled');
                const enrollData = {
                    totalenroll: classInfo.totalenroll + 1
                }
                axiosPublic.patch(`/classes/enroll/${classInfo._id}`, enrollData)
                    .then(res => {
                        console.log(res.data);
                    })
                navigate('/dashboard/myenrolls')
            })

    }

    return (
        <div className="card card-side bg-base-100 shadow-xl mt-16">
            <figure><img src={classInfo.image} alt="Movie" /></figure>
            <div className="space-y-5 mt-10">
                <h2 className="card-title">Title: {classInfo.title}</h2>
                <p>Instructor : {classInfo.name}</p>
                <p>Price : {classInfo.price}</p>
                <p>Description : {classInfo.description}</p>
                <p>Total Enroll : {classInfo.totalenroll}</p>
                <div className="card-actions justify-end">
                    <button onClick={handlePay} className="btn btn-primary">Pay</button>
                </div>
            </div>
        </div>
    );
};

export default ClassDetails;