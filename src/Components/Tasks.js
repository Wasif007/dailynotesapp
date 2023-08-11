import React from 'react'

const Tasks = (props) => {
  return (
    <div className='tasks'>
        <div>
            <p>{props.title}</p>
        <span>{props.description}</span>
        </div>
        
        <button>-</button>
    </div>
  )
}

export default Tasks
