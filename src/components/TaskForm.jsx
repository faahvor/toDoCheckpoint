/* eslint-disable react/prop-types */
import  { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

const TaskForm = ({ onSubmit, existingTask }) => {
  const { register, handleSubmit, setValue } = useForm();
  const [task, setTask] = useState(existingTask || { name: '', description: '' });

  useEffect(() => {
    if (existingTask) {
      setValue('name', existingTask.name);
      setValue('description', existingTask.description);
    }
  }, [existingTask, setValue]);

  const submitHandler = (data) => {
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <input
        type="text"
        placeholder="Task Name"
        {...register('name', { required: true })}
      />
      <textarea
        placeholder="Task Description"
        {...register('description', { required: true })}
      />
      <button type="submit">Save Task</button>
    </form>
  );
};

export default TaskForm;
