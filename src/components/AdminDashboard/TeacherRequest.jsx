import useAxiosPublic from "../../hooks/useAxiosPublic";
import useTeacher from "../../hooks/useTeacher";

const TeacherRequest = () => {
    const [teachers, , refetch] = useTeacher();
    const axiosPublic = useAxiosPublic();

    const handleStatus = async (data) => {
        const updateStatus = {
            status: data.status
        }
        const updateRole = {
            role: 'teacher'
        }

        axiosPublic.patch(`/teachers/${data.id}`, updateStatus)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    refetch()
                    if (data.status === 'approved' ) {
                        console.log(data.email);
                        axiosPublic.patch(`/users/${data.email}`, updateRole)
                            .then(res => {
                                if (res.data.modifiedCount > 0) {
                                    console.log("role updated");

                                }
                            })
                    }
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
                            <th>Experience</th>
                            <th>Title</th>
                            <th>Category</th>
                            <th>Status</th>
                            <th>
                                <button>Approved</button>
                            </th>
                            <th>
                                <button>Reject</button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            teachers.map((teacher) => <tr key={teacher._id}>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={teacher.image} />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {teacher.name}
                                </td>
                                <td>{teacher.experience}</td>
                                <td>{teacher.title}</td>
                                <td>{teacher.category}</td>
                                <td>{teacher.status}</td>
                                <td><button
                                    onClick={() => handleStatus({ status: 'approved', id: teacher._id, email: teacher.email })}
                                    className="btn btn-sm"
                                    disabled={teacher.status === 'rejected' || teacher.status === 'approved'}
                                >
                                    Approved
                                </button>
                                </td>
                                <td><button
                                    onClick={() => handleStatus({ status: 'rejected', id: teacher._id})}
                                    className="btn btn-sm"
                                    disabled={teacher.status === 'rejected' || teacher.status === 'approved'}
                                >
                                    Reject</button></td>

                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TeacherRequest;