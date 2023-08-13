import React, { useState } from 'react'
import Tasks from './Tasks'

const Home = () => {
  const [objectArray,setObjectArray]=useState([]);
  const [title,setTitle]=useState("");
  const [description,setDescription]=useState("");
  const onSubmitHandler=(e)=>{
    e.preventDefault();
    setObjectArray([...objectArray,{title,description}]);
  }
  return (
   <div className='container'>
    <form onSubmit={onSubmitHandler}>
      <input placeholder='Title' value={title} onChange={(e)=>{
        setTitle(e.target.value);
      }}></input>
      <textarea placeholder='Description' value={description} onChange={(e)=>{
        setDescription(e.target.value);
      }}></textarea>
      <button>ADD</button>
    </form>
    {
      objectArray.map((item,index)=>
      (<Tasks key={index} title={item.title} description={item.description}/>))
    }

   </div>
  )
}

export default Home
