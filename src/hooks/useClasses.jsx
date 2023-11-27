import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useClasses = () => {


    const axiosPublic = useAxiosPublic();

    const {data : classes=[], isPending: loading, refetch} = useQuery({
        queryKey : ['classes'],
        queryFn : async() =>{
            const res = await axiosPublic.get('/classes');
            return res.data;
        }
    })

    return [classes, loading, refetch]
};

export default useClasses;