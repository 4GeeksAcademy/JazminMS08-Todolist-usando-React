import React, { useState } from "react";

const ListaTareas = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = (tecla) => {
    if (tecla.key === "Enter" && newTask.trim()) {
      const taskId = Date.now();
      setTasks((prevTasks) => [
        ...prevTasks,
        { id: taskId, text: newTask.trim() }
      ]);
      setNewTask(""); 
    }
  };

  const removeTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <div className="container mt-5 p-4 bg-white shadow-lg rounded-lg w-25">
      <h1 className="text-center text-secondary mb-4">todos</h1>
      <input type="text" className="form-control" placeholder="What needs to be done?" aria-label="What needs to be done?" value={newTask} onChange={(e) => setNewTask(e.target.value)} onKeyDown={addTask} />

      {tasks.length === 0 ? (
        <p className="text-center mt-3">No hay tareas, agrega una</p>
      ) : (
        <ul className="list-group mt-4">
          {tasks.map((task) => (
            <li key={task.id} className="list-group-item d-flex justify-content-between align-items-center position-relative" style={{ position: "relative" }}>
              <span>{task.text}</span>
              <button className="btn btn-outline-black btn-sm position-absolute end-0 me-2" style={{ display: "none" }} onClick={() => removeTask(task.id)} >
                <i className="fa fa-times fs-6"></i>
              </button>
            </li>
          ))}
        </ul>
      )}

      <p className="text-center mt-3">Tareas pendientes: {tasks.length}</p>

      <style>{`.list-group-item:hover button {display: inline-block !important;}`}</style>
    </div>
  );
};

export default ListaTareas;

