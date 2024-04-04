import MainLayout from "./components/layouts/main/MainLayout";
import HomeView from "./views/home/HomeView";
import { RouteObject } from "react-router-dom";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomeView />,
      },
    ],
  },
];

export default routes;
