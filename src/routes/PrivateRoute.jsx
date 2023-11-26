import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    if(loading){
        return <span className="loading loading-infinity loading-lg"></span>
        
    }
    if(user){
        return children;
    }
    return <Navigate to={'/login'}></Navigate>;
};

PrivateRoute.propTypes = {
    children : PropTypes.object.isRequired
}

export default PrivateRoute;