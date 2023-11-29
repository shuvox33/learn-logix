import { ToastContainer, toast } from "react-toastify";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useClasses from "../../hooks/useClasses";
import { NavLink } from "react-router-dom";

const AllClassesAdmin = () => {

    const [classes, , refetch] = useClasses();
    const axiosPublic = useAxiosPublic();

    const handleStatus = async (data) => {

        const updateStatus = {
            status: data.status
        }

        axiosPublic.patch(`/classes/${data.id}`, updateStatus)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    refetch()
                    toast('status changed')

                }
            })

    }



    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Email</th>
                            <th>Description</th>
                            <th>Status</th>
                            <th>
                                <button>Approved</button>
                            </th>
                            <th>
                                <button>Reject</button>
                            </th>
                            <th>
                                <button>Progress</button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            classes.map((clas) => <tr key={clas._id}>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={clas.image} />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {clas.title}
                                </td>
                                <td>{clas.email}</td>
                                <td>{clas.description}</td>
                                <td>{clas.status}</td>
                                <td><button
                                    onClick={() => handleStatus({ status: 'approved', id: clas._id })}
                                    className="btn btn-sm"
                                >
                                    Approved
                                </button>
                                </td>
                                <td><button
                                    onClick={() => handleStatus({ status: 'rejected', id: clas._id })}
                                    className="btn btn-sm"
                                >
                                    Reject</button></td>

                                <td>
                                    <NavLink to={`/dashboard/allreview/${clas._id}`}>
                                        <button className="btn btn-sm"
                                            disabled={clas.status === 'rejected' || clas.status === 'pending'}
                                        >See Progress</button>
                                    </NavLink>
                                </td>

                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
            <ToastContainer />
        </div>
    );
};

export default AllClassesAdmin;