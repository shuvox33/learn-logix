
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';

const useIsTeacher = () => {
    const { user } = useAuth();

    const axiosPublic = useAxiosPublic();

    const {data : isTeacher} = useQuery({
        queryKey : [user?.email, 'isTeacher'],
        queryFn :async () => {
            console.log('checking is teacher : ', user)
            const res = await axiosPublic.get(`/users/teacher/${user.email}`);
            return res.data?.teacher;
        }
    })
    return [isTeacher]
};

export default useIsTeacher;