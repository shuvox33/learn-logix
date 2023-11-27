import { useForm } from "react-hook-form";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAuth from "../../hooks/useAuth";
import { ToastContainer, toast } from "react-toastify";

const AddClass = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const axiosPublic = useAxiosPublic();
    const { user } = useAuth();





    const onSubmit = (data) => {
        const requestData = { ...data, status: "pending"}
        axiosPublic.post('/classes', requestData)
            .then(res => {
                if (res.data.insertedId) {
                    toast('Class Request send Successfully')
                }
            })
    }



    return (
        <div className="mt-7">
            <div>
                <h3 className="text-4xl text-center">Add Class !</h3>
            </div>
            <div className="card shrink-0 w-full max-w-xl shadow-2xl bg-base-100 mx-auto mt-10">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Title</span>
                        </label>
                        <input {...register("title", { required: true })} type="text" placeholder="title" className="input input-bordered"  required />
                        {errors.title && <span className="text-red-600">title is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input {...register("name", { required: true })} type="text" placeholder="name" className="input input-bordered" defaultValue={user.displayName}  readOnly />
                        {errors.name && <span className="text-red-600">name is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input {...register("email", { required: true })} type="text" placeholder="email" className="input input-bordered 'readonly'" defaultValue={user.email} readOnly />
                        {errors.email && <span className="text-red-600">email is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input {...register("price", { required: true })} type="text" placeholder="price" className="input input-bordered" required />
                        {errors.price && <span className="text-red-600">price is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <input {...register("description", { required: true })} type="text" placeholder="description" className="input input-bordered" required />
                        {errors.description && <span className="text-red-600">description is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <input {...register("image", { required: true })} type="text" placeholder="image" className="input input-bordered" required />
                        {errors.image && <span className="text-red-600">image is required</span>}
                    </div>


                    <div className="form-control mt-6">
                        <button type="submit" className="btn btn-primary">Add Class</button>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default AddClass;