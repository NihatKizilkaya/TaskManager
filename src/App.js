import TaskList from './Components/TaskList';
import './App.css';
import TaskCreate from './Components/TaskCreate';
import { useState } from 'react';


function App() {
  const [tasks, setTasks] = useState([]);

  const createTask = (title, taskDesc) => {
    const createdTasks = [
      ...tasks,
      {
        id: Math.round(Math.random() * 999999),
        title,
        taskDesc,
      },
    ];
    setTasks(createdTasks);
  };

  const deleteTaskById = (id) => {
    const afterDeletingTasks = tasks.filter((task) => task.id !== id);
    setTasks(afterDeletingTasks);
  };
  const editTaskById = (id, updatedTitle, updatedTaskDesc) => {
    const updatedTasks = tasks.map((task) =>  {
if(task.id ===id) {

return {id,title:updatedTitle,taskDesc:updatedTaskDesc}

}
return task;
    });
    setTasks(updatedTasks);
  };


  return (
    <div className="App">
      <TaskCreate onCreate={createTask} />
      <div>
        <h1 className="TaskTitle">Görevler</h1>
       
      </div>
      <div className="task-container" id="taskContainer"></div>
      <TaskList tasks={tasks} onDelete={deleteTaskById} onUpdate={editTaskById} />
    </div>
  );
}

export default App;
