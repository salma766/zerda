import { lazy } from "react";

import { Navigate } from "react-router-dom";
import { RequireAuth } from "react-auth-kit";


/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/full-layout"));

/***** Pages ****/

const Login = lazy(() => import("../pages/0-login"));
const Dashboard = lazy(() => import("../pages/1-dashboard"));
const Users = lazy(() => import("../pages/2-users"));
const Courses = lazy(() => import("../pages/3-courses"));
const UpdateCourses  = lazy(() => import("../pages/3.1-update-course"));
const Categories= lazy(() => import("../pages/4-categories"));
const Search = lazy(() => import("../pages/5-search"));
const Participations = lazy(() => import("../pages/6-participations"));
const Calendar = lazy(() => import("../pages/7-calendar"));

/*****Routes******/

const ThemeRoutes = [
  { path: "/login", exact: true, element: <Login /> },
  {
    path: "/",
    element: <RequireAuth loginPath="/login">
      <FullLayout />
    </RequireAuth>,
    children: [
      { path: "/", element: <Navigate to="/dashboard" /> },
      { path: "/dashboard", exact: true, element: <Dashboard /> },
      { path: "/users", exact: true, element: <Users /> },
      { path: "/search", exact: true, element: <Search /> }, 
      { path: "/courses", exact: true, element: <Courses /> },     
      { path: "/courses/update/:id", exact: true, element: <UpdateCourses /> },     
      
      { path: "/participations", exact: true, element: <Participations /> },     
      { path: "/categories", exact: true, element: <Categories /> },     
      { path: "/calendar", exact: true, element: <Calendar /> },     

    ],
  },
  


];

export default ThemeRoutes;
