import React, { Component } from "react";

class ListaTareas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      newTask: ""
    };
  }

  // Función para agregar tarea
  addTask = (tecla) => {
    if (tecla.key === "Enter" && this.state.newTask.trim()) {
      const taskId = Date.now();
      this.setState((prevState) => ({
        tasks: [...prevState.tasks, { id: taskId, text: prevState.newTask.trim() }],
        newTask: ""
      }));
    }
  };

  // Función para eliminar tarea
  removeTask = (id) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter((task) => task.id !== id)
    }));
  };

  render() {
    return (
      <div className="container mt-5 p-4 bg-white shadow-lg rounded-lg w-25">
        <h1 className="text-center text-secondary mb-4">todos</h1>
        <input
          type="text"
          className="form-control"
          placeholder="What needs to be done?"
          aria-label="What needs to be done?"
          value={this.state.newTask}
          onChange={(e) => this.setState({ newTask: e.target.value })}
          onKeyDown={this.addTask}
        />

        {this.state.tasks.length === 0 ? (
          <p className="text-center text-muted mt-3">No hay tareas, agrega una</p>
        ) : (
          <ul className="list-group mt-4">
            {this.state.tasks.map((task) => (
              <li
                key={task.id}
                className="list-group-item d-flex justify-content-between align-items-center position-relative"
                style={{ position: "relative" }}
              >
                <span>{task.text}</span>
                <button
                  className="btn btn-outline-black btn-sm position-absolute end-0 me-2"
                  style={{ display: "none" }}
                  onClick={() => this.removeTask(task.id)}
                >
                  <i className="fa fa-times fs-6"></i>
                </button>
              </li>
            ))}
          </ul>
        )}

        <p className="text-center mt-3">Tareas pendientes: {this.state.tasks.length}</p>

        <style>{`
          .list-group-item:hover button {
            display: inline-block !important;
          }
        `}</style>
      </div>
    );
  }
}

export default ListaTareas;
