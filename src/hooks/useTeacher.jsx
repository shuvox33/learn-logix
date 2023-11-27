import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useTeacher = () => {

    const axiosPublic = useAxiosPublic();

    const {data : teachers=[], isPending: loading, refetch} = useQuery({
        queryKey : ['teacher'],
        queryFn : async() =>{
            const res = await axiosPublic.get('/teachers');
            return res.data;
        }
    })

    return [teachers, loading, refetch]
};

export default useTeacher;