import {useState} from 'react'

export const TaskCreator= ({createNewTask})=>{
    // console.log(props)
    const [TaskName,setTaskName]=useState('');

    const handleSubmit = (e)=>{
    e.preventDefault();
    createNewTask(TaskName)
    localStorage.setItem('tasks',TaskName);
    setTaskName('');
    }
    return(
        <form className="my-2 row" onSubmit={handleSubmit}>
        <div className="col-9">    
        <input 
        type ="text" 
        placeholder='Escriba su tarea' 
        value={TaskName} 
        onChange={(e)=>{setTaskName(e.target.value)}} 
        className="form-control"/>
        </div>
        <div className="col-3">
            <button className="btn btn-primary btn-sm">Guardar Tarea</button> 
        </div>
        </form>
    )
}