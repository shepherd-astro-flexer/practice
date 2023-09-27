import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import {
  About,
  Cart,
  Checkout,
  Error,
  HomeLayout,
  Landing,
  Login,
  Orders,
  Products,
  Register,
  SingleProduct,
} from "./pages";

// loaders
import { loader as landingLoader } from "./pages/Landing";
// actions
import { action as loginAction } from "./pages/Login";
import { ToastContainer } from "react-toastify";
import { ErrorElement } from "./components";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime:60 * 5 * 1000
    }
  }
})

// setup router
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        loader: landingLoader,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "orders",
        element: <Orders />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "products/:id",
        element: <SingleProduct />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
    errorElement: <ErrorElement/>,
    action: loginAction,
  },
  {
    path: "register",
    element: <Register />,
  },
]);

const App = () => {
  return (
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    <ToastContainer position="top-center" />
  </QueryClientProvider>
  )
};
export default App;
