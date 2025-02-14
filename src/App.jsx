import HomeLayout from "components/HomeLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Data from "components/home/Data";
import Recent from "components/recent/Recent";
import Starred from "components/starred/Starred";
import Shared from "components/shared/Shared";
import Trash from "components/trash/Trash";

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
