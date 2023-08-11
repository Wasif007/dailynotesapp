import React, { useState } from 'react'
import Tasks from './Tasks'

const Home = () => {
  const [titleSetting,setTitleSetting]=useState([]);
  const [title,setTitle]=useState("");
  const [description,setDescription]=useState("");
const onSubmitHandler=(e)=>{
e.preventDefault();
setTitleSetting([...titleSetting,{title,description}]);
}
const deleteArray=(index)=>{
const filteredArray=titleSetting.filter((val,i)=>{
  return i!==index;
})
setTitleSetting(filteredArray);
}
  return (
    <div className='container'>
      <h1>DAILY TASKS</h1>
            <form onSubmit={onSubmitHandler}>
                <input placeholder='Title' value={title} onChange={(e)=>{
                  setTitle(e.target.value);
                }}></input>
                <textarea placeholder='Description' value={description} onChange={(e)=>{
                  setDescription(e.target.value);

                }}></textarea>
                <button>ADD</button>
            </form>
            {titleSetting.map((item,index)=>(
              <Tasks key={index} title={item.title} description={item.description} deleteArray={deleteArray} index={index}/>
            ))}
            
      
    </div>
  )
}

export default Home
