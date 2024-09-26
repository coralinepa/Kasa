import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Home, About, Accomodation, NotFound } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        element: <Home />,
        index: true,
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
    ],
  },
]);

export default router;
