import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css/pagination';

// Import Swiper styles
import "swiper/css";
import { Pagination } from 'swiper/modules';
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

const Feedback = () => {

    const axiosPublic = useAxiosPublic();
    const [feedBacks, setFeedBack] = useState([]);

    useEffect(() => {
        axiosPublic.get('/reviewhome')
            .then(res => {
                setFeedBack(res.data)
            })
    }, [axiosPublic])


    return (
        <div className="mt-10 mb-10">
            <h3 className="text-4xl text-center">Feedback</h3>
            <div>
                <Swiper slidesPerView={'auto'}
                    centeredSlides={true}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper">

                    {
                        feedBacks.map(review => <SwiperSlide
                            key={review._id}
                        >
                            <div className="flex flex-col items-center mx-24 my-16">

                                <h3 className="text-2xl text-green-500 mb-5">Title : </h3>

                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />
                                <div className="mt-5">
                                    <h3 className="text-2xl text-orange-400">{review.name}</h3>
                                    <figure>
                                        <img src="" alt="" />
                                    </figure>
                                </div>
                                <p className="py-8">{review.description}</p>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Feedback;