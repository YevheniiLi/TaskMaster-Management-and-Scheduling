import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Task } from './task.model';

interface TaskState {
    tasks: Task[];
}

const initialState: TaskState ={
    tasks: []
};

const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<Task>) => {
            state.tasks.push(action.payload);
        }
    }
})

export const { addTask } = taskSlice.actions;
export default taskSlice.reducer;