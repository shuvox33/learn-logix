import { useLoaderData } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import useAuth from "../../hooks/useAuth";

const UpdateClass = () => {

    const axiosPublic = useAxiosPublic()
    const classInfo = useLoaderData();



    const {_id, title, price, description, image} = classInfo;

    // console.log(classInfo);

    const {user} = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {

        const updatedData = {
            title: data.title,
            name: data.name,
            email: data.email,
            price: data.price,
            description: data.description,
            image: data.image,

        }

        axiosPublic.patch(`/classes/update/${_id}`, updatedData)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    toast('Updated Successfully')
                }
            })
    }



    return (
        <div className="mt-7">
            <div>
                <h3 className="text-4xl text-center">Update Class !</h3>
            </div>
            <div className="card shrink-0 w-full max-w-xl shadow-2xl bg-base-100 mx-auto mt-10">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Title</span>
                        </label>
                        <input defaultValue={title} {...register("title", { required: true })} type="text" placeholder="title" className="input input-bordered"  />
                        {errors.title && <span className="text-red-600">title is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input defaultValue={user?.displayName} {...register("name", { required: true })} type="text" placeholder="name" className="input input-bordered"  readOnly />
                        {errors.name && <span className="text-red-600">name is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input defaultValue={user?.email} {...register("email", { required: true })} type="text" placeholder="email" className="input input-bordered 'readonly'"  readOnly />
                        {errors.email && <span className="text-red-600">email is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input defaultValue={price} {...register("price", { required: true })} type="text" placeholder="price" className="input input-bordered"   />
                        {errors.price && <span className="text-red-600">price is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <input defaultValue={description} {...register("description", { required: true })} type="text" placeholder="description" className="input input-bordered"   />
                        {errors.description && <span className="text-red-600">description is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <input defaultValue={image} {...register("image", { required: true })} type="text" placeholder="image" className="input input-bordered"   />
                        {errors.image && <span className="text-red-600">image is required</span>}
                    </div>


                    <div className="form-control mt-6">
                        <button type="submit" className="btn btn-primary">Update Class</button>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default UpdateClass;