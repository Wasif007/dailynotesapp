import React from 'react'

const Tasks = (props) => {
    const {title,description,deleteArray,index}=props;
  return (
    <div className='tasks'>
        <div>
            <p>{title}</p>
        <span>{description}</span>
        </div>
        
        <button onClick={()=>{
            deleteArray(index);
        }}>-</button>
    </div>
  )
}

export default Tasks
