import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import LayoutPage from "../pages/Layout";

import HomePage from "../pages";

import ErrorHandler from "@/components/error/ErrorHandler";
import PageNotFound from "@/pages/PageNotFound";
import CartPage from "@/pages/CartPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<LayoutPage />} errorElement={<ErrorHandler />}>
        <Route index element={<HomePage />} />
        <Route path="cart" element={<CartPage />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </>
  )
);
export default router;
