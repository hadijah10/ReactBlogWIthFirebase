import { useState } from 'react'
import {Routes,NavLink,Route} from 'react-router-dom'
import CreatePost from './CreatePost'
import Home from './Home'
import Login from './Login'
import { signOut,auth } from './firebase-config'
import './App.css'
import NotFound from './NotFound'

function App() {
  const [isAuth,setIsAuth] = useState(localStorage.getItem("isAuth")); 
  const logOut = async() => {
    try{
        await signOut(auth)
        setIsAuth(false)
        localStorage.clear()
      
     // window.location.pathname = '/blog'
    }catch(err){
   console.log(err.message)
    }
    }
return(
  <>
   <nav>
      <NavLink to='/'>Home</NavLink>
    {!isAuth ?   (<NavLink to='/login'>Login</NavLink>):  
    <>
    <NavLink to='/create'>Create_Post</NavLink>
    <NavLink to='/login' onClick={logOut}>Logout</NavLink>
  </>
  }
    </nav>
  <Routes>
   
    <Route path='/' element={<Home isAuth={isAuth}/>}/>
    <Route path='/login' element={<Login setAuth={setIsAuth}/>}/>
    <Route path='/create' element={<CreatePost isAuth={isAuth}/>}/>
    <Route path='*' element={<NotFound/>}/>
  </Routes>
  </>
);
}
export default App;
