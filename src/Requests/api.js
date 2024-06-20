import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk('fetchTodo', async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1'); // Replace with your API endpoint
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();

    } catch (error) {
        throw Error('Failed to fetch data');
    }
});