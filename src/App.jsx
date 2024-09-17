import { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./index.css";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    if (editingTask) {
      setTasks(
        tasks.map((t) =>
          t.id === editingTask.id ? { ...task, id: editingTask.id } : t
        )
      );
      setEditingTask(null);
    } else {
      setTasks([...tasks, { ...task, id: Date.now(), completed: false }]);
    }
  };

  const editTask = (task) => {
    setEditingTask(task);
  };

  const deleteTask = (id) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      setTasks(tasks.filter((task) => task.id !== id));
    }
  };

  const completeTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="app">
      <TaskForm onSubmit={addTask} existingTask={editingTask} />
      <TaskList
        tasks={tasks}
        onEdit={editTask}
        onDelete={deleteTask}
        onComplete={completeTask}
      />
    </div>
  );
};

export default App;
