import { useState } from "react";

export default function ListaTareas() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  // Función para agregar tarea
  const addTask = (tecla) => {
    if (tecla.key === "Enter" && newTask.trim()) {
      const taskId = Date.now();
      setTasks([...tasks, { id: taskId, text: newTask.trim() }]);
      setNewTask("");
    }
  };

  // Función para eliminar tarea
  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="container mt-5 p-4 bg-white shadow-lg rounded-lg w-25">
      <h1 className="text-center text-secondary mb-4">todos</h1>
      <input
        type="text" className="form-control" placeholder="What needs to be done?" aria-label="What needs to be done?" value={newTask} onChange={(e) => setNewTask(e.target.value)} onKeyDown={addTask} />
      <ul className="list-group mt-4">
        {tasks.length > 0 && 
          tasks.map((task) => (
            <li key={task.id} className="list-group-item d-flex justify-content-between align-items-center">
              <span>{task.text}</span>
              <button className="btn btn-outline-black btn-sm" onClick={() => removeTask(task.id)}>
                <i className="fa fa-times fs-6"></i>
              </button>
            </li>
          ))
        }
      </ul>
    </div>
  );
}
