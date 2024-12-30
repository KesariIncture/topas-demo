import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Dashboard from "./pages/Dashboard";
import App from "./App"
import Landing from "./pages/Landing"
 
const BASE_PATH = "/topas-demo";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter basename={BASE_PATH}>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Landing />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  </BrowserRouter>
);