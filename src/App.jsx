import HomeLayout from "pages/HomeLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Data from "pages/home/Data";
import Recent from "pages/recent/Recent";
import Starred from "pages/starred/Starred";
import Shared from "pages/shared/Shared";
import Trash from "pages/trash/Trash";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "pages/Layout";
import ErrorPage from "pages/ErrorPage";
import { Provider } from "react-redux";
import { store } from "store/Store";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        {
          path: "/home",
          element: <Data />,
        },
        {
          path: "/recent",
          element: <Recent />,
        },
        {
          path: "/starred",
          element: <Starred />,
        },
        {
          path: "/Shared",
          element: <Shared />,
        },
        {
          path: "/trash",
          element: <Trash />,
        },
      ],
    },
  ]);
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </Provider>
  );
}

export default App;
