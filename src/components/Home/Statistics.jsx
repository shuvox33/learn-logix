import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Statistics = () => {

    const axiosPublic = useAxiosPublic();
    const [stats, setStats] = useState([]);

    useEffect(() => {
        axiosPublic('/stats')
            .then(res => {
                setStats(res.data);
            })
    }, [axiosPublic])


    return (
        <div className="hero min-h-[500px] bg-base-200 mb-14">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://i.ibb.co/10mJBxn/stats.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                <div className="flex gap-8">
                    <div className="text-center border-b-2 border-blue-300 p-8 rounder-lg">
                        <h3 className="text-2xl font-medium text-blue-600">Total User </h3>
                        <h3 className="text-4xl font-medium">{stats.totalUser}</h3>
                    </div>
                    <div className="text-center border-b-2 border-blue-300 p-8 rounder-lg">
                        <h3 className="text-2xl font-medium text-blue-600">Total Enrollment </h3>
                        <h3 className="text-4xl font-medium">{stats.totalEnroll}</h3>
                    </div>
                    <div className="text-center border-b-2 border-blue-300 p-8 rounder-lg">
                        <h3 className="text-2xl font-medium text-blue-600">Total Class </h3>
                        <h3 className="text-4xl font-medium">{stats.totalClass}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Statistics;