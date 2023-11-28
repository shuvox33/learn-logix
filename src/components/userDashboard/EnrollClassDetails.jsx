import React, { useState } from 'react';
import Modal from 'react-modal';
import { useParams } from 'react-router-dom';
import Rating from 'react-rating';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
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
    const axiosPublic = useAxiosPublic()
    const {user} = useAuth()
    console.log(user);

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
    console.log(rating);

    const { register, handleSubmit} = useForm();
    

    const onSubmit = (data) => {
        const reviewData = { ...data, status: "pending", email: user.email }
        console.log(data);
        axiosPublic.post('/teachers', reviewData)
            .then(res => {
                if (res.data.insertedId) {
                    toast('Request Successful')
                }
            })
    }


    return (
        <div id='root'>

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
                        <button  className="btn btn-primary">Send</button>
                    </div>
                </form>
            </Modal>




        </div>
    );
};

export default EnrollClassDetails;