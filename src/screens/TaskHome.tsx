import React, { useReducer, useState } from "react";
import { Bucket, BucketAction } from "../types/taskTypes";
import BucketContainer from "../components/BucketContainer";

const INITIAL_BUCKET_LIST: Bucket[] = [
    {
        bucketId: "1",
        tasks: [
            {
                taskId: "task-1",
                userEmail: "sample@gmail.com",
                createdAt: new Date("2025-01-01"),
            },
        ],
    },
    {
        bucketId: "2",
        tasks: [
            {
                taskId: "task-201",
                userEmail: "vignesh@gmail.com",
                createdAt: new Date("2025-01-03"),
            },
            {
                taskId: "task-202",
                userEmail: "vigneshantony@gmail.com",
                createdAt: new Date("2025-01-02"),
            },
        ],
    },
];

const bucketListReducer = (state: Bucket[], action: BucketAction) => {
    switch (action?.type) {
        case "DELETE_TASK": {
            return state.map((bucket) => {
                const updatedTasks = bucket.tasks.filter(
                    (task) => task.taskId !== action?.payload?.taskId
                );
                return updatedTasks.length === bucket.tasks.length
                    ? bucket
                    : { ...bucket, tasks: updatedTasks };
            });
        }
        case "SORT_TASKS_BY_CREATION": {
            return state.map((bucket) => ({
                ...bucket,
                tasks: [...bucket.tasks].sort(
                    (a, b) => a.createdAt.getTime() - b.createdAt.getTime()
                ),
            }));
        }
        default: {
            return state;
        }
    }
};

const TaskHome = () => {
    const [bucketList, dispatch] = useReducer(
        bucketListReducer,
        INITIAL_BUCKET_LIST
    );

    const [searchInput, setSearchInput] = useState("");

    const handleOnInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event?.target;
        setSearchInput(value);
    };

    const handleCreationSort = () => {
        dispatch({ type: "SORT_TASKS_BY_CREATION" });
    };

    return (
        <div
            style={{
                padding: 12,
                display: "flex",
                rowGap: 12,
                flexDirection: "column",
            }}
        >
            <h3>JIRA Tasks Application</h3>
            <div style={{ display: "flex", columnGap: 12 }}>
                <div style={{ flex: 1 }}>
                    <input
                        type="search"
                        value={searchInput}
                        onChange={handleOnInput}
                        placeholder="Search users"
                        style={{ padding: 12, width: "100%" }}
                    />
                </div>
                <button onClick={handleCreationSort} style={{ padding: 12 }}>
                    Sort by creation date
                </button>
            </div>
            {bucketList.map((bucket) => (
                <BucketContainer
                    key={bucket?.bucketId}
                    bucket={bucket}
                    dispatch={dispatch}
                    searchInput={searchInput}
                />
            ))}
        </div>
    );
};

export default TaskHome;
