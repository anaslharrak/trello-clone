import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { Column, Task } from "../globalTypes";

const initialState = 
    [ {
        id: 1,
        title: 'Column 1',
        tasks: [
            {
                id: 1,
                title: 'Task 1',
                description: 'Description 1',
                completed: false
            }
        ]
    }]

export const listSlice = createSlice({ 
    name: 'lists', 
    initialState, 
    reducers: { 
        addNewList: (state, action: PayloadAction<Column>) => {
            const { id, title, tasks } = action.payload
            state.push({ id, title, tasks })
        },
        changeTitleList: (state, action: PayloadAction<Column>) => {
            const { id, title } = action.payload

            const list = state.find(list => list.id === id)
            if (list) {
                list.title = title
            }
        },
        addNewTask: (state, action: PayloadAction<{ id: number, task: Task }>) => {
            const { id, task } = action.payload
            const list = state.find(list => list.id === id)
            if (list) {
                list.tasks.push(task)
            }
        }

    } 
});

export const { addNewList, changeTitleList, addNewTask } = listSlice.actions;
export default listSlice.reducer;