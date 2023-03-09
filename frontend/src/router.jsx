import { createBrowserRouter } from "react-router-dom";

import Root from "./routes/Root";
import Homepage from "./pages/Homepage";
import Components from "./pages/Components";
import Modal from "./pages/SignInModal";
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
        path: "login",
        element: <Modal />,
      },
      {
        path: "products",
        element: <ProductPage />,
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
