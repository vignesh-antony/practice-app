import { Task } from "../types/taskTypes";

const TaskItem = ({
    task,
    onDeleteTask,
}: {
    task: Task;
    onDeleteTask: (taskId: string) => void;
}) => {
    return (
        <tr>
            <td style={{ padding: 8 }}>{task?.taskId}</td>
            <td style={{ padding: 8 }}>{task?.userEmail}</td>
            <td style={{ padding: 8 }}>{task?.createdAt?.toString() ?? ""}</td>
            <td style={{ padding: 8 }}>
                <button
                    style={{ padding: "4px 8px", cursor: "pointer" }}
                    onClick={() => onDeleteTask(task?.taskId)}
                >
                    Delete
                </button>
            </td>
        </tr>
    );
};

export default TaskItem;
