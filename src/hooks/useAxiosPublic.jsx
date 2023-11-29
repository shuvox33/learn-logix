import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://a12-learn-logix-server.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
}

export default useAxiosPublic;