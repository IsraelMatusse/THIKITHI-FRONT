import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";
import { Login } from "./pages/login.tsx";
import { SignUp } from "./pages/SignUp.tsx";
import EventsPage from "./pages/admin/Events.tsx";
import CreateEvent from "./pages/admin/CreateEvent.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/admin",
    element: <Home />,
    children: [],
  },
  {
    path: "/events",
    element: <EventsPage />,
  },
  {
    path: "/create-event",
    element: <CreateEvent />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
