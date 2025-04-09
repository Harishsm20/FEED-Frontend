// React Router Components import
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

// Import Pages
import { HomeLayout } from "../layouts";
import { BlogPost, CreatePost, HomePage, Login, Profile, Signup } from "../pages";
import { PostCard } from "../components";

const Router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      
      <Route path="/" element={<HomeLayout />} >
      {/* Default path */}
        <Route path="" element={<HomePage />} />
        <Route path="/dashboard" element={<HomePage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/post" element={<BlogPost />} />
        <Route path="/postCard" element={<PostCard />} />

      </Route>
      </>
    )
);

export default Router;