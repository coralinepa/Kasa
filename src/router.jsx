import { createBrowserRouter } from "react-router-dom";
import { Home, About, Accomodation, NotFound } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/accomodation/:id",
    element: <Accomodation />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
export default router;
