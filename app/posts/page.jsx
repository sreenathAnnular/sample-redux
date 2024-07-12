"use client";
import React from 'react'
import { useSelector,useDispatch } from 'react-redux' 
import { addpost,deletepost } from '@/redux/slice/postslice'
import { useState } from 'react'

const page = () => {
    const dispatch=useDispatch();
    const[title,settitle]=useState("");
    const[descrption,setdescrption]=useState("");

    const postData=useSelector((state)=> state.posts)
    console.log("Postdata-redux",postData);
    const handlepost=(e)=>{
        e.preventDefaut();
        const newpost={
            id:Date.now(),
            title:title,
            descrption:descrption
        }
        dispatch(addpost(newpost));
        settitle("");
        setdescrption("");

    }
  return (
    <div>
        <div className='flex items-center justify-center w-screen h-screen '>
      <form className=''>
        <div className='border rounded-md'>
        <div className='m-6'>
        <label htmlfor="title"/>Add Title
        <input className='border border-black flex flex-col rounded-md p-2' id="title"  value={title} onChange={(e)=>settitle(e.target.value)} type="text" placeholder='enter your text'/>
        </div>
        <div className='m-6'>
        <label htmlfor="descrption" />Add Descrption
        <input className='border border-black flex flex-col rounded-md p-2' id="descrption" value={descrption} onChange={(e)=>setdescrption(e.target.value)}  type="text" placeholder="enter your Descrption"></input>
        </div>
        <div className='flex flex-row justify-center m-3 '>
            <button className='border py-1 px-2 bg-gray-600 text-white' onclick={handlepost}>Post</button>
        </div>
        </div>
      </form>
      </div>
      <div>
        <div>
            <h2>New post</h2>
            <div>
                {postData.map((data,index)=>(
                    <div key={index}>
                        <h2>{data.title}</h2>
                        <h3>{data.descrption}</h3>

                    </div>
                ))}
 
            </div>
        </div>
      </div>
    </div>
  )
}

export default page
