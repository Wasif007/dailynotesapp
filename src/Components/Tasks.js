import React from 'react'

const Tasks = (props) => {
    const {title,description,deleteNoteFunc,index}=props;
  return (
    
    <div className='tasks'>
      <div>
      <p>{title}</p>
      <span>{description}</span>
    </div>
    <button onClick={()=>{
      deleteNoteFunc(index);
    }}>-</button>
    </div>
  )
}

export default Tasks
