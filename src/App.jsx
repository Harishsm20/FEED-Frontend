// App.jsx
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from '../theme'; // your custom theme
import { RouterProvider } from "react-router-dom";
import Router from "./routes/Router";
import './App.css';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Optional: resets default styles and applies base theme */}
      <RouterProvider router={Router} />
    </ThemeProvider>
  );
};

export default App;