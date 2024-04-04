import MainLayout from "./components/layouts/main/MainLayout";
import AuthenticationView from "./views/auth/AuthenticationView";
import HomeView from "./views/home/HomeView";
import { RouteObject } from "react-router-dom";

const routes: RouteObject[] = [
  // {
  //   path: '/404',
  //   element: <NotFoundView />,
  // },
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
  {
    path: "/auth",
    element: <AuthenticationView />,
  },
];

export default routes;
