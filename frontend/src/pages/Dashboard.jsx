import { useEffect, useState } from "react";
import API from "../api/api";
import Navbar from "../components/Navbar";

function Dashboard() {

  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const fetchTasks = async () => {

    const res = await API.get("/tasks");

    setTasks(res.data);

  };

  const createTask = async () => {

    if (!title) return;

    await API.post("/tasks", {
      title,
      description,
    });

    setTitle("");
    setDescription("");

    fetchTasks();

  };

  const deleteTask = async (id) => {

    await API.delete(`/tasks/${id}`);

    fetchTasks();

  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>

      <Navbar />

      <div className="container">

        <h2>Task Dashboard</h2>

        <input
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          placeholder="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button onClick={createTask}>
          Add Task
        </button>

        <h3>Tasks</h3>

        {tasks.map((task) => (

          <div className="task" key={task.id}>

            <strong>{task.title}</strong>

            <p>{task.description}</p>

            <button
              style={{ background: "red" }}
              onClick={() => deleteTask(task.id)}
            >
              Delete
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Dashboard;