import HomeLayout from "pages/HomeLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Data from "pages/home/Data";
import Recent from "pages/recent/Recent";
import Starred from "pages/starred/Starred";
import Shared from "pages/shared/Shared";
import Trash from "pages/trash/Trash";

function App() {
  const router = createBrowserRouter([
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
  return <RouterProvider router={router} />;
}

export default App;
