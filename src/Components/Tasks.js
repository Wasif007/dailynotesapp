import React from 'react'

const Tasks = (props) => {
    const {title,description}=props;
  return (
    
    <div className='tasks'>
      <div>
      <p>{title}</p>
      <span>{description}</span>
    </div>
    <button>-</button>
    </div>
  )
}

export default Tasks
