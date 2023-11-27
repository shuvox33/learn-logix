import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useAdmin = () => {
    const {user, loading} = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();

    const {data : isAdmin, isPending : isAdminLoading} = useQuery({
        queryKey : [user?.email, 'isAdmin'],
        enabled : !loading,
        queryFn :async () => {
            console.log('checking is admin : ', user)
            const res = await axiosPublic.get(`/user/admin/${user.email}`);
            return res.data?.admin;
        }
    })
    return [isAdmin, isAdminLoading]
};

export default useAdmin;