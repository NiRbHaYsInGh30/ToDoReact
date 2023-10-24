import React,{useState} from 'react'

export const TodoForm = ({addTodo}) => {
    const[value,setvalue]=useState("")
    const handleSubmit= e=>{
        e.preventDefault();
        // console.log(value)
        addTodo(value);

        setvalue("");//To remove the value after submitting
    }

  return (
    <div>
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input type='text' className='todo-input' value={value} placeholder='Enter the Task' onChange={(e)=>setvalue(e.target.value)}></input>
            <button type='submit' className='todo-btn'>Add Task</button>
        </form>
      
    </div>
  )
}

export default TodoForm
