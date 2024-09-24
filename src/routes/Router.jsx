// React Router Components import
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { HomeLayout } from "../layouts";
import { HomePage, Login } from "../pages";
const Router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path="/" element={<HomeLayout />} >
        <Route path="" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
      </Route>
      </>
    )
);

export default Router;