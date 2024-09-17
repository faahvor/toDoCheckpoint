
import classNames from 'classnames';

const TaskItem = ({ task, onEdit, onDelete, onComplete }) => {
  return (
    <div className={classNames('task-item', { completed: task.completed })}>
      <h3>{task.name}</h3>
      <p>{task.description}</p>
      <button onClick={() => onEdit(task)}>Edit</button>
      <button onClick={() => onComplete(task.id)}>
        {task.completed ? 'Unmark' : 'Complete'}
      </button>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
};

export default TaskItem;
