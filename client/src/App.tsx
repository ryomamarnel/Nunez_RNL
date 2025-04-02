import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Genders from "./pages/gender/Genders";
import EditGender from "./pages/gender/EditGender";
import DeleteGender from "./pages/gender/DeleteGender";
import User from "./pages/user/Users";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Genders />,
  },
  {
    path: "/gender/edit/:gender_id",
    element: <EditGender />,
  },
  {
    path: "/gender/delete/:gender_id",
    element: <DeleteGender />,
  },
  {
    path: "/users",
    element: <User />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
