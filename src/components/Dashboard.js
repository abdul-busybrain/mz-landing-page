import React, { useEffect, useState } from "react";
import {
  Bell,
  Inbox,
  Calendar,
  CheckSquare,
  Users,
  Plus,
  Menu,
  Search,
} from "lucide-react";
import { useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

// Simulated project and task data
const initialProjects = [
  { id: 1, name: "Marketing Campaign", tasks: 14, progress: 65 },
  { id: 2, name: "Product Launch", tasks: 22, progress: 45 },
  { id: 3, name: "Website Redesign", tasks: 8, progress: 80 },
];

const initialTasks = [
  {
    id: 1,
    title: "Design wireframes",
    project: "Website Redesign",
    priority: "High",
    dueDate: "2024-12-15",
  },
  {
    id: 2,
    title: "Social media strategy",
    project: "Marketing Campaign",
    priority: "Medium",
    dueDate: "2024-11-30",
  },
  {
    id: 3,
    title: "Prototype review",
    project: "Product Launch",
    priority: "Low",
    dueDate: "2024-12-05",
  },
];

const Dashboard = () => {
  const location = useLocation();
  const { currentUser } = useAuth();
  const [userData, setUserData] = useState({
    email: currentUser?.email || "user@example.com",
    displayName: currentUser?.displayName || "Isa Musa",
    profileImage: currentUser?.photoUrl || "/api/placeholder/40/40",
  });

  useEffect(
    function () {
      const locationUserData = location.state?.userData;
      if (locationUserData) {
        setUserData((prevData) => ({ ...prevData, locationUserData }));
      }
    },
    [location.state]
  );

  const [projects] = useState(initialProjects);
  const [tasks] = useState(initialTasks);

  return (
    <div className="flex h-screen bg-gray-100 mt-16">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r p-4">
        <div className="flex items-center mb-8">
          <img
            src={userData.profileImage}
            alt="User Avatar"
            className="w-10 h-10 rounded-full mr-3"
          />
          <div>
            <div className="font-semibold">{userData.displayName}</div>
            <div className="text-sm text-gray-500">{userData.email}</div>
          </div>
        </div>

        <nav>
          <div className=" mb-4 text-gray-600">
            <div className="flex items-center mb-2 hover:bg-gray-100 p-2 rounded cursor-pointer">
              <Inbox className="mr-3" size={20} />
              <span>My Tasks</span>
            </div>
            <div className="flex items-center mb-2 hover:bg-gray-100 p-2 rounded cursor-pointer">
              <Calendar className="mr-3" size={20} />
              <span>Calendar</span>
            </div>
            <div className="flex items-center mb-2 hover:bg-gray-100 p-2 rounded cursor-pointer">
              <Users className="mr-3" size={20} />
              <span>Team</span>
            </div>
          </div>
        </nav>

        <div className="border-t pt-4">
          <div className="flex justify-between items-center mb-3">
            <span className="text-gray-600">Projects</span>
            <Plus size={20} className="text-gray-500 cursor-pointer" />
          </div>
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex items-center justify-between mb-2 hover:bg-gray-100 p-2 rounded cursor-pointer"
            >
              <span>{project.name}</span>
              <span className="text-sm text-gray-500">{project.tasks}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Top Navigation */}
        <div className="bg-white border-b p-4 flex justify-between items-center">
          <div className="flex items-center">
            <Menu className="mr-4" size={24} />
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="pl-8 pr-4 py-2 border rounded w-96"
              />
              <Search
                className="absolute left-2 top-3 text-gray-400"
                size={18}
              />
            </div>
          </div>

          <div className="flex items-center">
            <Bell className="mr-4 text-gray-600" size={20} />
            <CheckSquare className="mr-4 text-gray-600" size={20} />
            <img
              src={userData.profileImage}
              alt="User Avatar"
              className="w-8 h-8 rounded-full"
            />
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="p-6 bg-gray-100">
          <h1 className="text-2xl font-bold mb-6">My Workspace</h1>

          <div className="grid grid-cols-3 gap-6">
            {/* Tasks Section */}
            <div className="bg-white rounded-lg shadow p-5">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">My Tasks</h2>
                <Plus size={20} className="text-gray-500 cursor-pointer" />
              </div>
              {tasks.map((task) => (
                <div
                  key={task.id}
                  className="border-b py-3 hover:bg-gray-50 cursor-pointer"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-medium">{task.title}</div>
                      <div className="text-sm text-gray-500">
                        {task.project}
                      </div>
                    </div>
                    <div>
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          task.priority === "High"
                            ? "bg-red-100 text-red-600"
                            : task.priority === "Medium"
                            ? "bg-yellow-100 text-yellow-600"
                            : "bg-green-100 text-green-600"
                        }`}
                      >
                        {task.priority}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Projects Section */}
            <div className="bg-white rounded-lg shadow p-5">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Projects</h2>
                <Plus size={20} className="text-gray-500 cursor-pointer" />
              </div>
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="border-b py-3 hover:bg-gray-50 cursor-pointer"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-medium">{project.name}</div>
                      <div className="text-sm text-gray-500">
                        {project.tasks} Tasks
                      </div>
                    </div>
                    <div className="w-20 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-500 h-2 rounded-full"
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Team Section */}
            <div className="bg-white rounded-lg shadow p-5">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Team</h2>
                <Plus size={20} className="text-gray-500 cursor-pointer" />
              </div>
              {[
                { name: "Alice Johnson", role: "Product Manager" },
                { name: "Bob Smith", role: "Designer" },
                { name: "Charlie Brown", role: "Developer" },
              ].map((member, index) => (
                <div
                  key={index}
                  className="flex items-center border-b py-3 hover:bg-gray-50 cursor-pointer"
                >
                  <img
                    src={`/api/placeholder/40/40?${index}`}
                    alt={member.name}
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <div className="font-medium">{member.name}</div>
                    <div className="text-sm text-gray-500">{member.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
