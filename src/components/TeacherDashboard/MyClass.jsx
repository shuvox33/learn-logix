import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { NavLink } from "react-router-dom";

const MyClass = () => {

    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();

    const { data: classes = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/classes/${user.email}`);
            return res.data;
        }
    })

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosPublic.delete(`/classes/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
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
                            <div className="card-actions justify-end">
                                <NavLink to={`/dashboard/myclass/update/${clas._id}`}><button className="btn">Update</button></NavLink>
                                <button onClick={() => handleDelete(clas._id)} className="btn">Delete</button>
                                <button className="btn">See Details</button>
                            </div>
                        </div>
                    </div>)
            }
        </div>


    );
};

export default MyClass;