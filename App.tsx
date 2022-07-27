import * as React from "react";
import { Routes, Route, Outlet, NavLink } from "react-router-dom";
import TodoListContent from "./todo/TodoListContent";

import "./styles.css";

export default function App() {
  return (
    <div>
      <h1>Organsier App</h1>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="todo" element={<TodoList />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div className="linkContainer">
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              style={({ isActive }) => {
                return {
                  color: isActive ? "red" : "",
                  padding: "10px",
                };
              }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => {
                return {
                  color: isActive ? "red" : "",
                  padding: "10px",
                };
              }}
              to="/todo"
            >
              TodoList{" "}
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => {
                return {
                  color: isActive ? "red" : "",
                  padding: "10px",
                };
              }}
              to="/nothing-here"
            >
              Nothing Here
            </NavLink>
          </li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>
        “Deciding what NOT to do is as important as deciding what to do.” —
        Steve Jobs
      </h2>
    </div>
  );
}

function TodoList() {
  return (
    <div className="notesContainer">
      <div>
        <h2>TodoList</h2>

        <TodoListContent />
      </div>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <NavLink
        className="homeLink"
        style={({ isActive }) => {
          return {
            color: isActive ? "red" : "",
          };
        }}
        to="/"
      >
        Go to the home page
      </NavLink>
    </div>
  );
}
