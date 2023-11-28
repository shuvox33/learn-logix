
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';

const useAdmin = () => {
    const { user } = useAuth();

    const axiosPublic = useAxiosPublic();

    const {data : isAdmin} = useQuery({
        queryKey : [user?.email, 'isAdmin'],
        queryFn :async () => {
            // console.log('checking is admin : ', user)
            const res = await axiosPublic.get(`/users/admin/${user.email}`);
            return res.data?.admin;
        }
    })
    return [isAdmin]
};

export default useAdmin;