import { createBrowserRouter } from "react-router-dom";
import Profile from "./Profile";
import Contact from "./Contact";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
