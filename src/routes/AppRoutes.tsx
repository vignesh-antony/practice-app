import { RouteObject } from "react-router";
import HomePage from "../screens/HomePage";
import TaskHome from "../screens/TaskHome";
import StarRatingPage from "../screens/StarRatingPage";
import InfiniteScroll from "../screens/InfiniteScroll";
import CityHighlight from "../screens/CityHighlight";
import Todo from "../screens/Todo";
import RouterPage from "../screens/RouterPage";
import OTPContainer from "../screens/OTPContainer";
import FolderStructure from "../screens/FolderStructure";

const AppRoutes: RouteObject[] = [
    {
        index: true,
        element: <RouterPage />,
    },
    {
        path: "home",
        element: <HomePage />,
    },
    {
        path: "task-app",
        element: <TaskHome />,
    },
    {
        path: "star-rating",
        element: <StarRatingPage />,
    },
    {
        path: "infinite-scroll",
        element: <InfiniteScroll />,
    },
    {
        path: "city-highlight",
        element: <CityHighlight />,
    },
    {
        path: "todo-app",
        element: <Todo />,
    },
    {
        path: "one-time-password",
        element: <OTPContainer />,
    },
    {
        path: "folder-structure",
        element: <FolderStructure />,
    },
];

export default AppRoutes;
