import { createBrowserRouter } from "react-router-dom";
import Profile from "./Profile";
import Contact from "./Contact";
import Home from "./Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

export default router;
