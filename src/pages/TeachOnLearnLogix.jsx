import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../provider/AuthProvider";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { ToastContainer, toast } from "react-toastify";

const TeachOnLearnLogix = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const axiosPublic = useAxiosPublic();
    const { user } = useContext(AuthContext);

    const [curInfo, setCurInfo] = React.useState([]);

    // will be run once 
    useEffect(() => {
        // here we get the data by requesting data from this link
        // to our nodejs server
        axiosPublic.get(`/teachers/${user.email}`)
            .then((res) => setCurInfo(res.data));
    }, []);



    const onSubmit = (data) => {
        const requestData = { ...data, status: "pending", email: user.email }
        console.log(requestData);
        axiosPublic.post('/teachers', requestData)
            .then(res => {
                if (res.data.insertedId) {
                    toast('Request Successful')
                }
            })
    }

    console.log(curInfo.status);


    return (
        <div>
            {
                curInfo.status === 'accepted' ? <>
                <h3>You alrady a Teacher</h3>
                </> :
                    <>
                        <div className="mt-7">
                            <div>
                                <h3 className="text-4xl text-center">Apply for Teaching !</h3>
                            </div>
                            <div className="card shrink-0 w-full max-w-xl shadow-2xl bg-base-100 mx-auto mt-10">
                                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input {...register("name", { required: true })} type="text" placeholder="name" className="input input-bordered" defaultValue={user.displayName} required />
                                        {errors.name && <span className="text-red-600">Name is required</span>}
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Image</span>
                                        </label>
                                        <input {...register("image", { required: true })} type="text" placeholder="image" className="input input-bordered" defaultValue={user.photoURL} required />
                                        {errors.image && <span className="text-red-600">image is required</span>}
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Title</span>
                                        </label>
                                        <input {...register("title", { required: true })} type="text" placeholder="title" className="input input-bordered" required />
                                        {errors.title && <span className="text-red-600">title is required</span>}
                                    </div>
                                    <div className="form-control">
                                        <label className="label" htmlFor="cars">Choose your Experience: </label>

                                        <select id="cars" {...register("experience", { required: true })}>
                                            <option value="Begginers">Begginers</option>
                                            <option value="Experienced">Experienced</option>
                                            <option value="Some Idea">Some Idea</option>
                                        </select>
                                        {errors.experience && <span className="text-red-600">experience is required</span>}
                                    </div>
                                    <div className="form-control">
                                        <label className="label" htmlFor="cate">Category : </label>

                                        <select id="cate" {...register("category", { required: true })}>
                                            <option value="Front-end">Front-end</option>
                                            <option value="Back-end">Back-end</option>
                                            <option value="MERN Stack">MERN Stack</option>
                                            <option value="Digital Marketing">Digital Marketing</option>
                                            <option value="opCPA Marketingel">CPA Marketing</option>
                                        </select>
                                        {errors.category && <span className="text-red-600">category is required</span>}
                                    </div>
                                    <div className="form-control mt-6">
                                        <button type="submit" className="btn btn-primary">{curInfo?.status === ('pending' || 'rejected') ? 'Request Another' : 'Submit for Review'}</button>
                                    </div>
                                </form>
                            </div>
                            <ToastContainer />
                        </div>
                    </>
            }
        </div>

    );
};

export default TeachOnLearnLogix;