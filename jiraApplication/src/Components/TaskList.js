import TaskShow from "./TaskShow";

function TaskList({ tasks, onDelete, onUpdate }) {
  console.log(tasks);
  return (
    <div className="task-list">
      {tasks.map((task) => {
        return <TaskShow key={task.id} task={task} onDelete={onDelete} onUpdate={onUpdate}/>;
      })}
    </div>
  );
}

export default TaskList;
