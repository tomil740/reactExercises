import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Box1 from './components/Box1';
import './main.css';


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Box1></Box1>
  </StrictMode>
);
