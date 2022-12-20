import { useState,useEffect } from 'react';

import './App.css';
import { Container } from './components/Container';
import {TaskCreator} from './components/TaskCreator'
import TaskTable from './components/TaskTable';
import { VisibilityControl } from './components/VisibilityControl';

function App() {

  const [showCompleted,setShowCompleted] = useState(false)

// funcion de borrar
  const cleanTask = ()=>{
    setTaskItems(taskItems.filter(task=>!task.done))
    setShowCompleted(false)
  }
  const [taskItems,setTaskItems]=useState([])
  
    function createTask(taskName){
      // console.log(taskName)
      if(!taskItems.find(task=>task.name===taskName)){
        setTaskItems([...taskItems,{name:taskName,done:false}])
      
      }

    }
// función condición
    const toggleTask = (task) =>{
      setTaskItems(
      taskItems.map((t)=> (t.name === task.name? {...t, done: !t.done}: t))
      );
    };

    useEffect(()=>{
      let data=localStorage.getItem('tasks')
      if(data){
        setTaskItems(JSON.parse((data)))
      }
    },[])
    useEffect(()=>{
      localStorage.setItem('tasks',JSON.stringify(taskItems))
    },[taskItems])
    return (
  <main className="bg-dark vh-100">
    <Container>
    <TaskCreator createNewTask={createTask}/>
    <TaskTable toggleTask={toggleTask} tasks={taskItems} />
    <VisibilityControl isChecked={showCompleted} setShowCompleted={(checked)=>setShowCompleted(checked)} cleanTask={cleanTask}/>
    {
    showCompleted === true && (<TaskTable toggleTask={toggleTask} tasks={taskItems} showCompleted={showCompleted} />)
    }
    </Container>
  </main>
  );
}

export default App;
