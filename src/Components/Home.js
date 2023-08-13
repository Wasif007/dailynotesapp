import React, { useEffect, useState } from 'react'
import Tasks from './Tasks'

const Home = () => {
  const initialValue=localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")):localStorage.setItem("tasks",[]);
  const [objectArray,setObjectArray]=useState(initialValue);
    useEffect(() => {
     localStorage.setItem("tasks",JSON.stringify(objectArray));
   }, [objectArray]);
  const [title,setTitle]=useState("");
  const [description,setDescription]=useState("");
  const onSubmitHandler=(e)=>{
    e.preventDefault();
    setObjectArray([...objectArray,{title,description}]);
    
  }
  const deleteNoteFunc=(index)=>{
    const newArray=objectArray.filter((item,i)=>{
      return index!==i
    });
    setObjectArray(newArray);
  }
 
  return (
   <div className='container'>
    <h1>Daily Goals</h1>
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
      (<Tasks key={index} title={item.title} description={item.description} deleteNoteFunc={deleteNoteFunc} index={index}/>))
    }

   </div>
  )
}

export default Home
