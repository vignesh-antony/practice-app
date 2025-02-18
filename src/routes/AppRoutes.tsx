import { RouteObject } from "react-router";
import HomePage from "../screens/HomePage";
import TaskHome from "../screens/TaskHome";
import StarRatingPage from "../screens/StarRatingPage";
import InfiniteScroll from "../screens/InfiniteScroll";
import CityHighlight from "../screens/CityHighlight";
import Todo from "../screens/Todo";

const AppRoutes: RouteObject[] = [
    {
        index: true,
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
];

export default AppRoutes;
