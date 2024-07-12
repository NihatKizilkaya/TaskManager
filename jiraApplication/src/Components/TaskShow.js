import TaskCreate from "./TaskCreate";
import { useState } from "react";

function TaskShow({ task, onDelete, onUpdate }) {
  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteClick = () => {
    let text = "Emin Misiniz? \n";
    if (window.confirm(text)) {
      onDelete(task.id);
      alert('Göreviniz Başarıyla Silindi!');
    }
  };

  const handleUpdateClick = () => {
    setShowEdit(!showEdit);
  };
  
  const handleSubmit = (id, updatedTitle, updatedTaskDesc) => {
    setShowEdit(false);
    onUpdate(id, updatedTitle, updatedTaskDesc);
  };

  return (
    <div className="task-show">
      {showEdit ? (
        <TaskCreate task={task} taskFormUpdate={true} onUpdate={handleSubmit}/>
      ) : (
        <div>
          <h3>Göreviniz</h3>
          <p>{task.title}</p>
          <h3>Yapılacaklar</h3>
          <p>{task.taskDesc}</p>
        </div>
      )}{!showEdit && (
      <div className="task-buttons">
        <button className="button-1" onClick={handleDeleteClick}>Sil</button>
        <button className="button-2" onClick={handleUpdateClick}>Güncelle</button>
        
      </div> 
         )}   </div>
  );
}

export default TaskShow;
