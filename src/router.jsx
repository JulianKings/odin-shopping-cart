import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContent from "./App";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainContent />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;