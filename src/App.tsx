import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import AppRoutes from "./routes/AppRoutes";

const router = createBrowserRouter(AppRoutes);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
