import React, { useMemo } from "react";
import { Task } from "../types/taskTypes";
import TaskItem from "./TaskItem";

const TaskList = ({
    tasks,
    onDeleteTask,
    searchInput,
}: {
    searchInput?: string;
    tasks: Task[];
    onDeleteTask: (taskId: string) => void;
}) => {
    const filteredTasks = useMemo(
        () =>
            searchInput
                ? tasks.filter((task) =>
                      task.userEmail
                          ?.toLowerCase()
                          ?.includes(searchInput?.toLowerCase())
                  )
                : tasks,
        [tasks, searchInput]
    );

    if (!filteredTasks?.length) return <p>No tasks found!</p>;

    return (
        <table
            style={{
                width: "100%",
                borderCollapse: "collapse",
                border: "1px solid black",
            }}
        >
            <thead style={{ background: "#CCCCCC" }}>
                <tr style={{ textAlign: "left" }}>
                    <th style={{ padding: 8, borderBottom: "1px solid black" }}>
                        Task Id
                    </th>
                    <th style={{ padding: 8, borderBottom: "1px solid black" }}>
                        User Email
                    </th>
                    <th style={{ padding: 8, borderBottom: "1px solid black" }}>
                        Created At
                    </th>
                    <th style={{ padding: 8, borderBottom: "1px solid black" }}>
                        Action
                    </th>
                </tr>
            </thead>
            <tbody>
                {filteredTasks.map((task) => (
                    <TaskItem
                        key={task?.taskId}
                        task={task}
                        onDeleteTask={onDeleteTask}
                    />
                ))}
            </tbody>
        </table>
    );
};

export default TaskList;
