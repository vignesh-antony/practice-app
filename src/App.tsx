import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import AppRoutes from "./routes/AppRoutes";
import { Provider } from "react-redux";
import { store } from "./store";

const router = createBrowserRouter(AppRoutes);

function App() {
    return (
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    );
}

export default App;
