import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContent from "./content";
import ErrorPage from "./components/errorPage";
import Index from "./components";
import Shop from "./components/shop";
import About from "./components/about";
import Cart from "./components/cart";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainContent />,
      children: [
        {
            errorElement: <ErrorPage />,
            children: [
                {index: true, element: <Index />},
                {
                    path: "shop",
                    element: <Shop />,
                },
                {
                    path: "about",
                    element: <About />,
                },
                {
                    path: "cart",
                    element: <Cart />,
                },
            ],
        }
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;