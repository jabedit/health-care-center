import React , { useContext } from 'react';
import { AuthUseContext } from '../context/AuthUseProvers';




const useAuth = () => {
    return useContext(AuthUseContext);
};

export default useAuth;