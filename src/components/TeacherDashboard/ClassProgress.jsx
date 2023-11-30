import { useForm } from 'react-hook-form';
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Modal from 'react-modal';
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAxiosPublic from '../../hooks/useAxiosPublic';

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


const ClassProgress = () => {

    const { id } = useParams()
    console.log(id);

    const axiosPublic = useAxiosPublic()
    // const {user} = useAuth()

    const [totalEnrolls, setTotalEnrolls] = useState(null);
    const [totalAss, setTotalAss] = useState(null);
    const [totalAssPerDay, setTotalAssPerDay] = useState(null);

    useEffect(()=>{
        axiosPublic.get(`/classes/single/${id}`)
        .then(res=>{
            // console.log(res.data);
            setTotalEnrolls(res.data.totalenroll)
        })
    },[axiosPublic, id])
    useEffect(()=>{
        axiosPublic.get(`/totalass/${id}`)
        .then(res=>{
            setTotalAss(res.data.totalAss)
        })
    },[axiosPublic, id])
    useEffect(()=>{
        axiosPublic.get('assperday')
        .then(res=>{
            setTotalAssPerDay(res.data.count)
        })
    },[axiosPublic, id])


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

    const [expireDate, setExpireDate] = useState(new Date());


    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        const assignmentData = { ...data, expireDate: expireDate, classId: id }

        axiosPublic.post('/createAss', assignmentData)
            .then(res => {
                if (res.data.insertedId) {
                    toast('Assignment Added Successfully')
                    closeModal();
                }
            })
    }


    return (
        <div >

            <div className="flex gap-8">
                <div className="text-center border-b-2 border-blue-300 p-8 rounder-lg">
                    <h3 className="text-2xl font-medium text-blue-600">Total Enrollment </h3>
                    <h3 className="text-4xl font-medium">{totalEnrolls}</h3>
                </div>
                <div className="text-center border-b-2 border-blue-300 p-8 rounder-lg">
                    <h3 className="text-2xl font-medium text-blue-600">Total Assignment </h3>
                    <h3 className="text-4xl font-medium">{totalAss}</h3>
                </div>
                <div className="text-center border-b-2 border-blue-300 p-8 rounder-lg">
                    <h3 className="text-2xl font-medium text-blue-600">Per-Day Assignment Submitted </h3>
                    <h3 className="text-4xl font-medium">{totalAssPerDay}</h3>
                </div>
            </div>


            <div id="root" className='mt-14'>
                <button onClick={openModal} className="btn btn-primary btn-sm">Create</button>
                <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >

                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <h3>Create Assignment</h3>
                        <div className="form-control">
                            <input {...register("title", { required: true })} type="text" placeholder="title" name='title' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <input {...register("description", { required: true })} type="text" placeholder="description" name='description' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label> Deadline</label>
                            <DatePicker className="border-2" selected={expireDate} onChange={(date) => setExpireDate(date)} />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Create</button>
                        </div>
                    </form>
                </Modal>
            </div>
            <ToastContainer />
        </div>
    );
};

export default ClassProgress;