import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, GithubAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";


initializeAuthentication()

const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [isLogin, setIsLogin] = useState(false);
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const singInUsingGithub = () =>{
        return signInWithPopup(auth, githubProvider);
        
    }
    const signInUsingGoogle = () =>{
       return signInWithPopup(auth, googleProvider)
        
    }
    const logout = () =>{
        signOut(auth)
        .then(()=>{
            setUser({});
        })
    }
    const handleRegistration = e =>{
        e.preventDefault()
        console.log(email, password , error);
        if(password.length < 6){
            setError('Password Must be at least 6 characters limit');
            return;
        
        }
        if(/(?=.*[A-Z].*[A-Z])/.test(password)){
            setError('Password Must contain two uppercase ')
        }
        createUserWithEmailAndPassword(auth, email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            setError('')
        })
        .catch(error =>{
            setError(error.message);
        })
        
        
    }
    const handleLogin = e =>{
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            setError('')
        })
        .catch(error =>{
            setError(error.message);
        })

    }
    
    const handleEmailField = e =>{
        setEmail(e.target.value)
    }
    const handlePasswordField = e =>{
        setPassword(e.target.value)
    }
    const handleNameField =  e =>{
        setName(e.target.value)
    }
    //crete password auth
    
    
    
    useEffect( () =>{
        const unsubcribed =   onAuthStateChanged(auth, user=>{
            if(user){
                console.log('inside state change', user);
                setUser(user);
            }
            else{
                setUser({})
            }
        });
        return () => unsubcribed;
    },[]);

    useEffect( () =>{
       const unsubcribed =  onAuthStateChanged(auth, isLogin=>{
            if(isLogin){
                console.log('inside state change', isLogin);
                setIsLogin(isLogin);
            }
        })
        return () => unsubcribed;
    },[])
    return{
        user,
        error,
        signInUsingGoogle,
        singInUsingGithub,
        handleRegistration,
        handleEmailField,
        handlePasswordField,
        handleLogin,
        handleNameField,
        
        logout
    } 
 
}

export default useFirebase;