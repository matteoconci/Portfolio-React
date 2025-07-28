import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Navigate,
} from "react-router-dom";
import Root from "./Component/Root.tsx";
import AboutMe from "./Pages/AboutMe.tsx";
import Project from "./Pages/Project.tsx";
import Contact from "./Pages/Contact.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<AboutMe />} />
        <Route path='/project' element={<Project />} />
        <Route path='/contact' element={<Contact />} />
      </Route>
  )
);

function App() {
    return <RouterProvider router={router} />;
};

export default App;
