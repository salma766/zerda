
import { lazy } from "react";


import { HashRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom"
import Home from './pages/1-home';
import ProtectedRoute from "./components/protected-route";
import { useStore } from "zustand";
import { authStore } from "./stores/auth-store";


const Courses = lazy(() => import("./pages/2-courses"));
const CourseDetails = lazy(() => import("./pages/2.1-course-details"));
const Contact = lazy(() => import("./pages/3-contact"));
const MyCourses = lazy(() => import("./pages/4-mycourses"));
const Quiz = lazy(() => import("./pages/5-quiz"));



function App() {
  const { connectedUser } = useStore(authStore);
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mycourses" element={
            <ProtectedRoute user={connectedUser} >
              <MyCourses />
            </ProtectedRoute>
          }
        />
        <Route path="/quiz/:id" element={<Quiz />}
        />
      </Routes>
    </HashRouter>
  )
}

export default App;
