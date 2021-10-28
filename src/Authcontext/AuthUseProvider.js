import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';


export const AuthUseContext = createContext();
 const AuthUseProvider = ({children}) => {
    //const {children} = props;
    const allContext = useFirebase();
    return (
        <div>
            <AuthUseContext.Provider value={allContext}>
                    {children}
            </AuthUseContext.Provider>
        </div>
    );
}

export default AuthUseProvider;