import { Main } from "pages";
import { createBrowserRouter } from "react-router-dom";
import { routerPath } from "utils/types";
import { App } from "../app";

export const router = createBrowserRouter([
  {
    path: routerPath.MAIN,
    element: <App />,
    children: [
      {
        path: routerPath.MAIN,
        element: <Main />,
      },
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
