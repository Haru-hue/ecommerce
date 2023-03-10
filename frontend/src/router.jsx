import { createBrowserRouter } from "react-router-dom";

import Root from "./routes/Root";
import Homepage from "./pages/Homepage";
import Components from "./pages/Components";
import { Register } from "./pages/Modal";
import ProductPage from "./views/ProductPage";
import UserProfile from "./views/UserProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "products",
        element: <ProductPage />,
      },
      {
        path: "/user/register",
        element: <Register/>
      },
      {
        path: "profiles/:userId",
        element: <UserProfile />,
      },
    ],
  },
  {
    path: "/components",
    element: <Components />,
  },
]);

export default router;
