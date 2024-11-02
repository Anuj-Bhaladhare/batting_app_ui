import { lazy } from "react";
import { Navigate } from "react-router-dom";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/***** Pages ****/

// const Starter = lazy(() => import("../views/Starter.js"));
// const About = lazy(() => import("../views/About.js"));
// const Alerts = lazy(() => import("../views/ui/Alerts/alerts.js"));
// const Badges = lazy(() => import("../views/ui/Badges/Badges.js"));
// const Buttons = lazy(() => import("../views/ui/Buttons/Buttons.js"));
// const Cards = lazy(() => import("../views/ui/Cards/Cards.js"));
// const Grid = lazy(() => import("../views/ui/Grid/Grid.js"));
// const Tables = lazy(() => import("../views/ui/Tables"));
// const Forms = lazy(() => import("../views/ui/Forms"));
// const Breadcrumbs = lazy(() => import("../views/ui/Breadcrumbs"));


const Starter = lazy(() => import("../pages/starter/Starter.js"));
const About = lazy(() => import("../pages/about/About.js"));
const Alerts = lazy(() => import("../pages/Alerts/alerts.js"));
const Badges = lazy(() => import("../pages/Badges/Badges.js"));
const Buttons = lazy(() => import("../pages/Buttons/Buttons.js"));
const Cards = lazy(() => import("../pages/Cards/Cards.js"));
const Grid = lazy(() => import("../pages/Grid/Grid.js"));
const Tables = lazy(() => import("../components/Tables.js"));
const Forms = lazy(() => import("../components/Forms.js"));
const Breadcrumbs = lazy(() => import("../components/Breadcrumbs.js"));

/*****Routes******/

const ThemeRoutes = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/", element: <Navigate to="/starter" /> },
      { path: "/starter", exact: true, element: <Starter /> },
      { path: "/about", exact: true, element: <About /> },
      { path: "/alerts", exact: true, element: <Alerts /> },
      { path: "/badges", exact: true, element: <Badges /> },
      { path: "/buttons", exact: true, element: <Buttons /> },
      { path: "/cards", exact: true, element: <Cards /> },
      { path: "/grid", exact: true, element: <Grid /> },
      { path: "/table", exact: true, element: <Tables /> },
      { path: "/forms", exact: true, element: <Forms /> },
      { path: "/breadcrumbs", exact: true, element: <Breadcrumbs /> },
    ],
  },
];

export default ThemeRoutes;
