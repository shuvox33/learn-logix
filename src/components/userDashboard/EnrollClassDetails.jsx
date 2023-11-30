import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useParams } from 'react-router-dom';
import Rating from 'react-rating';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import useAuth from '../../hooks/useAuth';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};
Modal.setAppElement('#root');



const EnrollClassDetails = () => {

    const classId = useParams()
    // console.log(classId.classId);
    const axiosPublic = useAxiosPublic()
    const { user } = useAuth()

    const [title, setTitle] = useState([]);
    const [allAss, setAllAss] = useState([]);

    useEffect(() => {
        axiosPublic.get(`/classes/single/${classId.classId}`)
            .then(res => {
                setTitle(res.data.title)
            })
    }, [axiosPublic, classId])
    useEffect(() => {
        axiosPublic.get(`/assignment/${classId.classId}`)
            .then(res => {
                setAllAss(res.data)
            })
    }, [axiosPublic, classId])

    // let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }
    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        // subtitle.style.color = '#f00';
    }
    function closeModal() {
        setIsOpen(false);
    }

    const [rating, setRating] = useState(0);

    const { register, handleSubmit } = useForm();


    const onSubmit = (data) => {
        const reviewData = { ...data, rating: rating, classId: classId.classId, email: user.email, name: user.displayName, photo: user.photoURL, title: title }
        console.log(reviewData);
        axiosPublic.post('/review', reviewData)
            .then(res => {
                if (res.data.insertedId) {
                    toast('Feedback Added Successfully')
                    closeModal();
                }
            })
    }

    const handleAss = (classId) => {
        // let currentDate = new Date();
        const submitAss = { classId, studentEmail: user.email}

        console.log(submitAss);
        axiosPublic.post('/submitAss', submitAss)
            .then(res => {
                if (res.data.insertedId) {
                    toast('Assignment Submitted')
                }
            })
    }


    return (
        <div id='root'>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Deadline</th>
                            <th>submit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            allAss.map((ass) => <tr key={ass._id}>

                                <td>{ass.title}</td>
                                <td>{ass.description}</td>
                                <td>{ass.expireDate}</td>

                                <td><button onClick={()=>handleAss(ass.classId)} className='btn btn-ghost btn-sm'>Submit</button></td>

                            </tr>)
                        }


                    </tbody>
                </table>
            </div>

            <button className='btn btn-primary btn-sm' onClick={openModal}>TER</button>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >

                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <h3>Feedback</h3>
                    <div className="form-control">
                        <input {...register("description", { required: true })} type="text" placeholder="description" name='description' className="input input-bordered" required />
                    </div>
                    <div>
                        <Rating
                            initialRating={rating}
                            // emptySymbol={<i className="far fa-star" />}
                            // fullSymbol={<i className="fas fa-star" />}
                            onChange={(value) => setRating(value)}
                        />
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Send</button>
                    </div>
                </form>
            </Modal>
            <ToastContainer />
        </div>
    );
};

export default EnrollClassDetails;