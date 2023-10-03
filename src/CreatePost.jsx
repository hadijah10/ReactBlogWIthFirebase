import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { addDoc,auth,collection,db} from './firebase-config';

export default function CreatePost({isAuth}) {
    let navigate = useNavigate()
    const [title,setTitle] = useState('');
    const [post,setPost] = useState('')
    const userCollectionRef = collection(db,"posts")
    const setError = null;
    const docToAdd = async(e)=>{
        e.preventDefault()
      try{
        await addDoc(userCollectionRef ,{
            title:title,
            blog:post,
            author:{name:auth.currentUser.displayName,id:auth.currentUser.uid},}
            
            )
            navigate('/')
      }catch(error){
        alert('Not sent')
      }
   
        }
    useEffect(()=> {
        if(!isAuth){
            navigate('login')
        }
    },[])

  return (
   <>
<div id='form'>
 <form method='POST' onSubmit={docToAdd}>
     <h1>Create Post</h1>
     <label htmlFor="title">Title</label>
     <input type="text" id='title' onChange={e => setTitle(e.target.value)} />
     <label htmlFor="post">Post</label>
     <textarea name="posts" id="post" cols="30" onChange={e => setPost(e.target.value)}></textarea>
 </form>
 <button type='submit' onClick={docToAdd}>Submit Post</button>
</div>
 
   </> 
  )

}