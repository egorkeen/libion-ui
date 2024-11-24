import { createBrowserRouter } from "react-router-dom";
import { App } from "../app";
import { routerPath } from "utils/types";

export const router = createBrowserRouter([
  {
    path: routerPath.MAIN,
    element: <App />,
    children: [
      {
        path: routerPath.TITLE,
        element: null,
      },
      {
        path: routerPath.RANDOM_TITLE,
        element: null,
      },
    ],
  },
]);
