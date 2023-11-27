import useAxiosPublic from "../../hooks/useAxiosPublic";
import useUsers from "../../hooks/useUsers";

const AllUsers = () => {

    const [users, , refetch] = useUsers();
    const axiosPublic = useAxiosPublic()

    const updateRole = {
        role : 'admin'
    }

    const handleAdmin = (email) => {
        axiosPublic.patch(`/users/${email}`, updateRole)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    console.log("role updated");
                    refetch()
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
                            <th>Name</th>
                            <th>Email</th>
                            <th>Make Admin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            users.map((user) => <tr key={user._id}>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={user.photo} />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {user.name}
                                </td>
                                <td>{user.email}</td>

                                <td>
                                    {(user.role === 'admin') ? <>
                                        <h3>Admin</h3>
                                    </> : <button
                                        onClick={() => handleAdmin(user.email)}
                                        className="btn btn-sm"
                                    >Make Admin</button>}

                                </td>

                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;