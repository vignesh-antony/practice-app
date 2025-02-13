export interface Task {
    taskId: string;
    userEmail: string;
    createdAt: Date;
}

export interface Bucket {
    bucketId: string;
    tasks: Task[];
}

export interface BucketActionPayload {
    bucketId?: string;
    taskId?: string;
    searchEmail?: string;
}

export interface BucketAction {
    type: string;
    payload?: BucketActionPayload | undefined;
}
