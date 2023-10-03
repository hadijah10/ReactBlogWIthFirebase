import React from 'react'
import {useNavigate} from 'react-router-dom'
import { signInWithPopup} from './firebase-config'
import {auth, provider} from './firebase-config'


export default function Login({setAuth}) {
    let navigate = useNavigate();

    const signInWithGoogle = async()=>{
       signInWithPopup(auth,provider).then(result => {
        localStorage.setItem("isAuth",true);
        setAuth(true)
       }).catch(err =>
        console.log(err.message)
       );
     navigate('/')
    }
  return (
 <>
 <div className='logins'>
     <p>Sign in with google</p>
    <button className='login-google-btn'   onClick={signInWithGoogle}>Sign In with Google</button>
 </div>
 </>
  )
}
