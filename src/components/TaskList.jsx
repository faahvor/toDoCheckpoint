/* eslint-disable react/prop-types */

import TaskItem from './TaskItem';

const TaskList = ({ tasks, onEdit, onDelete, onComplete }) => {
  return (
    <div className="space-y-2">
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onEdit={onEdit}
          onDelete={onDelete}
          onComplete={onComplete}
        />
      ))}
    </div>
  );
};

export default TaskList;
