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

      return(
        <div>
          <div>
            <input onChange={handleChange}/>
            <button onClick={handleClick}>Add Task</button>
          </div>
          <div>
            {todolist.map((task) => {
              return (
                <div>
                  <h1>{task.taskName}</h1>
                  <button onClick={() => handleDelete(task.id)}>X</button>
                </div>
              )
            })
          }
          </div>
        </div>
      );














    // const[todolist,setTodolist] = useState([]);
    // const[newtask,setNewTask] = useState("");

    // function handleChange(e){
    //     setNewTask(e.target.value);
    // }

    // function handleClick(){
    //   const task = {
    //     id : todolist.length === 0 ? 1 : todolist[todolist.length-1].id + 1,
    //     taskName: newtask,
    //   }
    //   //const newList = [...todolist,task];
    //   setTodolist([...todolist,task]);
    // }

    // function handleDelete(id){
    //   const newtodolist = todolist.filter((task) => {
    //     //if(task === taskName){
    //     //  return false;
    //     //}
    //     //else{
    //     //  return true;
    //     //(or)
    //       return task.id != id;
    //     }
    //   );
    //   setTodolist(newtodolist);  
    // };

    // return(
    //   <div>
    //       <div>
    //         <input onChange={handleChange}/>
    //         <button onClick={handleClick}>Add Task</button>
    //       </div>
    //       <div>
    //         {todolist.map((task) => {
    //           return (
    //             <div>
    //             <h1>{task.taskName}</h1>
    //             <button onClick={() => handleDelete(task.id)}>x</button>
    //             </div>
    //           );
    //         })}
    //       </div>
    //   </div>
    // );
}