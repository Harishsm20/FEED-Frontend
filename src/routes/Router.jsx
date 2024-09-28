// React Router Components import
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

// Import Pages
import { HomeLayout } from "../layouts";
import { CreatePost, HomePage, Login, Profile, Signup } from "../pages";

const Router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path="/" element={<HomeLayout />} >
      {/* Default path */}
        <Route path="" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/create-post" element={<CreatePost />} />

      </Route>
      </>
    )
);

export default Router;