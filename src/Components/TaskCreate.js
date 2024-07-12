import {useState} from "react";

function TaskCreate({ onCreate,task, taskFormUpdate,onUpdate}) {
    const [title, setTitle] = useState(task ? task.title :'');
    const [taskDesc, setTaskDesc] = useState(task ? task.taskDesc:'');
    console.log(title, taskDesc)
   

    const handleChange = (event) => {
        setTitle(event.target.value)
    };
    const handleTaskChange = (event) => {
        setTaskDesc(event.target.value)
    };
    const handleSubmit = (event) => {
event.preventDefault();
if (taskFormUpdate) {
onUpdate(task.id,title,taskDesc)
}
else {
    onCreate(title,taskDesc);
}

setTitle('');
setTaskDesc("");

    };
    return (
    <div> {taskFormUpdate ? <div className="task-update">
        <h3 className="Label1" >Lütfen Görevinizi Düzenleyiniz</h3>
        <form className="TaskCreate" > 
            <label className="task-label"> Başlığı Düzenleyiniz</label> 
            <input value={title} onChange= {handleChange} className="task-input" />
            <label className="task-label"> Görevinizi Düzenleyiniz</label> 
           <textarea
           value={taskDesc} 
           onChange= {handleTaskChange} 
           className="task-input" 
           rows={5}/> 
           <button className="task-button" onClick={handleSubmit}>Düzenle</button>
            </form>
                </div>:<div className="task-create">
<h3 className="Label1" >Hoşgeldiniz, <br></br>Lütfen Görev Ekleyiniz!</h3>
<form className="TaskCreate" > 
    <label className="task-label"> Görevinizin Başlığı;</label> 
    <input value={title} onChange= {handleChange} className="task-input" />
    <label className="task-label"> Görevinizi giriniz;</label> 
   <textarea
   value={taskDesc} 
   onChange= {handleTaskChange} 
   className="task-input" 
   rows={5}/> 
   <button className="task-button update-button" onClick={handleSubmit}>Oluştur</button>
    </form>
        </div> }</div>
  

 

         
 ); 
}


export default TaskCreate;
