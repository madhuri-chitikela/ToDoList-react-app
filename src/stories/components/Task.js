import {useState} from 'react';

export default function Task(){
      const[todolist,setTodolist] = useState([]);
      const[newtask,setNewTask] = useState("");

      function handleChange(e){
        setNewTask(e.target.value)
      }
      function handleClick(){
        const task = {
          id: todolist.length === 0 ? 1 : todolist[todolist.length - 1].id + 1,
          taskName: newtask, 
          completed: false
        }
        setTodolist([...todolist, task]);
      }
      function handleDelete(id){
        const newtodolist = todolist.filter((task) => {
          if(task.id === id) { 
            return false; 
          }
          else {    
            return true;
          }      
        })
        setTodolist(newtodolist)
      }
      function handleComplete(id){
        setTodolist(todolist.map((task)=> {
          if(task.id === id){
            return {...task,completed:true}
          }
          else{
            return task
          }
        }))
      }
      return(
        <div>
          <div>
            <input onChange={handleChange}/>
            <button onClick={handleClick}>Add Task</button>
          </div>
          <div>
            {todolist.map((task) => {
              return (
                <div style={{background: task.completed ? "green" : "white"}}>
                  <h1>{task.taskName}</h1>
                  <button onClick={() => handleComplete(task.id)}>Complete</button>
                  <button onClick={() => handleDelete(task.id)}>X</button>
                 
                </div>
              )
            })
          }
          </div>
        </div>
      );
  }














    