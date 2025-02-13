import React from "react";
import { Bucket, BucketAction } from "../types/taskTypes";
import TaskList from "./TaskList";

const BucketContainer = ({
    bucket,
    dispatch,
    searchInput,
}: {
    bucket: Bucket;
    dispatch: React.Dispatch<BucketAction>;
    searchInput?: string;
}) => {
    const handleOnDeleteTask = (taskId: string) => {
        dispatch({
            type: "DELETE_TASK",
            payload: { taskId, bucketId: bucket?.bucketId },
        });
    };
    return (
        <div
            style={{
                padding: 12,
                border: "1px solid black",
                display: "flex",
                flexDirection: "column",
                rowGap: 12,
            }}
        >
            <h4>Bucket Identifier: {bucket?.bucketId || ""}</h4>
            <hr />
            <TaskList
                tasks={bucket?.tasks}
                onDeleteTask={handleOnDeleteTask}
                searchInput={searchInput}
            />
        </div>
    );
};

export default BucketContainer;
