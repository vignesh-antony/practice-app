import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PostState, PostType } from "../types/postTypes";

const initialState: PostState = {
    posts: [],
    isFetching: false,
};

export const fetchPosts = createAsyncThunk<PostType[]>(
    "post/fetchPosts",
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/posts"
            );
            if (!response.ok) {
                throw new Error("Error while fetching posts");
            }
            return response.json();
        } catch (error) {
            return rejectWithValue("Error while fetching posts");
        }
    }
);

const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.pending, (state) => {
            state.isFetching = true;
        });
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.isFetching = false;
            state.posts = action.payload;
        });
        builder.addCase(fetchPosts.rejected, (state) => {
            state.isFetching = false;
        });
    },
});

export default postSlice.reducer;
