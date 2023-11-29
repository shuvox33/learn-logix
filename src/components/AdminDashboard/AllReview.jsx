import { useParams } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useState } from "react";

const AllReview = () => {

    const classId = useParams();
    const axiosPublic = useAxiosPublic();

    const [reviews, setReviews] = useState([]);

    axiosPublic.get(`/review/${classId.classId}`)
        .then(res => {
            setReviews(res.data);
        })

    console.log(reviews);

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Description</th>
                            <th>Rating</th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            reviews.map((review) => <tr key={review._id}>
                                
                                <td>{review.name}</td>
                                <td>{review.email}</td>

                                <td>{review.description}</td>
                                <td>{review.rating}</td>

                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllReview;