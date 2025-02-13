import HomePage from "../screens/HomePage";
import TaskHome from "../screens/TaskHome";

const AppRoutes = [
    {
        index: true,
        element: <HomePage />,
    },
    {
        path: "task-app",
        element: <TaskHome />,
    },
];

export default AppRoutes;
