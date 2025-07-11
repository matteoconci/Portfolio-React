import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Navigate,
} from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Root from "./Component/Root.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<Homepage />} />
    </Route>
  )
);

function App() {
    return <RouterProvider router={router} />;
};

export default App;
