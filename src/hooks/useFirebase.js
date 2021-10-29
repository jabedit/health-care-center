import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, updateProfile, GoogleAuthProvider, onAuthStateChanged, signOut, GithubAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import initializeAuthentication from "../firebase2/firebase.init";
initializeAuthentication();

const useFirebase = () =>{
    const [user, setUser] = useState({});
    
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true)
   
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const singInUsingGithub = () =>{
        return signInWithPopup(auth, githubProvider);
        
    }
    const signInUsingGoogle = () =>{
       return signInWithPopup(auth, googleProvider)
        
    }

     const creteAccountWithGoogle = (email, password) =>{
        
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginEmailAndPassword =(email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const updateName = (name) =>{
        updateProfile(auth.currentUser, {
            displayName:name
          }).then(() => {
            window.location.reload()
            // ...
          }).catch((error) => {
            // An error occurred
            // ...
          });
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) =>{
            if(user){
                setUser(user)
            }else{
                setUser({})
            }
            setIsLoading(false)
        })
        return ()=> unsubscribe();
    },[])
    const logout = () =>{
        signOut(auth)
        .then(()=>{
            setUser({});
        })
    }
    
    return{
        setUser,
        user,
        isLoading, setIsLoading,
        error, setError,
        signInUsingGoogle,
        singInUsingGithub,
        creteAccountWithGoogle,
        loginEmailAndPassword,
        logout,
        updateName
    } 
 
}
export default useFirebase;
