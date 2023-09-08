import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner'

const Blogs = () => {

  const {posts,loading} = useContext(AppContext);
  return (
    <div className='w-11/12 max-w-[450px] h-screen py-3 flex flex-col gap-y-7 mt-[60px] mb-[70px] justify-center items-center'>
     { 
      loading  ? 
      (<Spinner/>)  : 
      
      (
        posts.length === 0  ? 
        (<div>
            <p>No Post Found</p>  
        </div>)  :

        (posts.map( (post) => (
          
          <div key={post.id}>
            
            <p className='font-bold text-sm' >{post.title}</p>
            
            <p className='text-xs mt-[3px]'>
              By <span className='italic' >{post.author}</span> on <span className='font-bold underline'>{post.category}</span>
            </p>

            <p className='text-xs mt-[4px]'>Posted on {post.date}</p>
            
            <p className='text-[13px] mt-[10px]'>{post.content}</p>
              
              <div className='flex gap-x-2'>
              {post.tags.map( (tag,index) => {
                return <span key={index} className='text-blue-800 underline text-[10px] font-bold mt-[7px]'>{`#${tag}`}</span>
              })}
            </div>
          </div>
        ) ) )
      )
    }
    </div>
  )
}

export default Blogs
