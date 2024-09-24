// Routes Components & routes
import { RouterProvider } from "react-router-dom";
import Router from "./routes/Router";
import './App.css'

const App = () => {
  return (
    <RouterProvider router={Router} />
  );
};

export default App;