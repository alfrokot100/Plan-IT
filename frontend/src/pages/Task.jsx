import "./Task.css";
import { useState, useRef, useEffect } from "react";
import CardContainer from "../components/taskPage/CardContainer";
import Modal from "../components/taskPage/Modal";
import axios from "axios";
import TaskHeader from "../components/taskPage/TaskHeader";
import CustomSidebar from "../components/navbar/CustomSidebar";
import Navbar from "../components/navbar/Navbar";

export default function ToDo() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const filterRef = useRef(null);

const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Close popup on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setIsFilterOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const [tasks, setTasks] = useState([
    {
      title: "",
      description: "",
      dueDate: "",
      teamMembers: [],
      project: "",
      status: "Ej påbörjad",
    },
  ]);

  //Fetch all tasks

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get("https://localhost:7007/tasks");
        setTasks(response.data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, []);

  const [filter, setFilter] = useState({
    member: "",
    project: "",
    deadline: "",
  });

  const filteredTasks = tasks.filter((task) => {
    return (
      (!filter.member || task.teamMembers?.[0] === filter.member) &&
      (!filter.project || task.project === filter.project) &&
      (!filter.deadline || task.deadline === filter.deadline)
    );
  });

  const handleNewTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const uniqueMembers = [...new Set(tasks.map((t) => t.teamMembers?.[0]))];
  const uniqueProjects = [...new Set(tasks.map((t) => t.project))];

  const uniqueDeadlines = [...new Set(tasks.map((t) => t.deadline))];

  return (
    <div>

      <Navbar userName="Joshua" setIsOpen={setIsSidebarOpen} isOpen={isSidebarOpen} />
      
      <header>
      <TaskHeader />
      </header>

      <CustomSidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />


      <main className="main-content">

        <div className="main-header"> 
        <div className="main-header-left">
          <h2 className="main-title">Kanban Board</h2>
          <p className="main-subtitle">Lägg till dina uppgifter och hantera dem här</p>
        </div>
        
        <div className="main-header-right">
          <Modal onAddTask={handleNewTask} />
          <br />

          
          {/* Filter Button */}

          <div
            style={{ position: "relative", display: "inline-block" }}
            ref={filterRef}
          >
            <button
              onClick={() => setIsFilterOpen((prev) => !prev)}
              className="filter-btn"
            >
              <img src="/src/assets/filter.svg" alt="Filter" /> Filtrera
            </button>

            {isFilterOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  background: "white",
                  border: "1px solid #ccc",
                  padding: "1rem",
                  zIndex: 999,
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  minWidth: "200px",
                }}
              >
                <label htmlFor="filterType">Filter by:</label>
                <select
                  id="filterType"
                  value={
                    filter.member
                      ? `member:${filter.member}`
                      : filter.project
                      ? `project:${filter.project}`
                      : filter.deadline
                      ? `deadline:${filter.deadline}`
                      : ""
                  }
                  onChange={(e) => {
                    const [type, value] = e.target.value.split(":");

                    if (!type || !value) {
                      setFilter({ member: "", project: "", deadline: "" });
                      return;
                    }

                    setFilter({
                      member: type === "member" ? value : "",
                      project: type === "project" ? value : "",
                      deadline: type === "deadline" ? value : "",
                    });
                  }}
                  style={{ width: "100%", marginBottom: "0.5rem" }}
                >
                  <option value="">All Tasks</option>

                  <optgroup label="By Member">
                    {uniqueMembers.map((m) => (
                      <option key={`member-${m}`} value={`member:${m}`}>
                        {m}
                      </option>
                    ))}
                  </optgroup>

                  <optgroup label="By Project">
                    {uniqueProjects.map((p) => (
                      <option key={`project-${p}`} value={`project:${p}`}>
                        {p}
                      </option>
                    ))}
                  </optgroup>

                  <optgroup label="By Deadline">
                    {uniqueDeadlines.map((d) => (
                      <option key={`deadline-${d}`} value={`deadline:${d}`}>
                        {new Date(d).toLocaleDateString()}
                      </option>
                    ))}
                  </optgroup>
                </select>

                <button
                  onClick={() => {
                    setFilter({ member: "", project: "", deadline: "" });
                    setIsFilterOpen(false);
                  }}
                  style={{ width: "100%" }}
                >
                  Clear Filters
                </button>
              </div>
            )}
            </div>
          </div>
        </div>



        <div style={{ display: "flex", marginTop: "20px" }}>
          <CardContainer
            title="Ej påbörjad"
            numberOfTasks={
              filteredTasks.filter((t) => t.status === "Ej påbörjad").length
            }
            tasks={filteredTasks.filter((t) => t.status === "Ej påbörjad")}
          />
          <CardContainer
            title="Påbörjad"
            numberOfTasks={
              filteredTasks.filter((t) => t.status === "Påbörjad").length
            }
            tasks={filteredTasks.filter((t) => t.status === "Påbörjad")}
          />
          <CardContainer
            title="Avslutad"
            numberOfTasks={
              filteredTasks.filter((t) => t.status === "Avslutad").length
            }
            tasks={filteredTasks.filter((t) => t.status === "Avslutad")}
          />
        </div>
      </main>
    </div>
  );
}