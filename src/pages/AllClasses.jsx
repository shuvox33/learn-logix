import { useLoaderData, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { ToastContainer, toast } from "react-toastify";


const AllClasses = () => {

    const classes = useLoaderData();
    const { user } = useAuth();
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate();

    const handleEnroll = (clas) => {
        const data = {
            classId: clas._id,
            userEmail: user.email,
            tEmail: clas.email,
            title: clas.title,
            name: clas.name,
            image: clas.image

        }
        console.log(data);
        axiosPublic.post('/enroll', data)
            .then(() => {
                toast('Course Enrolled');
                const enrollData = {
                    totalenroll: clas.totalenroll + 1
                }
                axiosPublic.patch(`/classes/enroll/${clas._id}`, enrollData)
                    .then(res =>{
                        console.log(res.data);
                    })
                navigate('/dashboard/myenrolls')
            })

    }

    return (

        <div className="grid grid-cols-3 gap-3">
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
                            <p>Status : {clas.status}</p>
                            <p>Total Enroll :{clas.totalenroll} </p>
                            <div className="card-actions justify-end">
                                <button onClick={() => handleEnroll(clas)} className="btn">Enroll</button>
                            </div>
                        </div>
                    </div>)
            }
            <ToastContainer />
        </div>
    );
};

export default AllClasses;