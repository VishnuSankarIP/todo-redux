
import { createSlice } from "@reduxjs/toolkit";

const addSlice = createSlice({
    name: 'add',
    initialState: { todoList: [] }, 
    reducers: {
        addTodoItem: (state, action) => {
            const newTodo = {
                id: Math.random(),
                content: action.payload.newText 
            };
            state.todoList.push(newTodo); 
        },
        deleteTodoItem:(state,action)=>{
          
            return state.todoList.filter(item=>item.id!=action.payload).id
        }

    }
});

export const { addTodoItem ,deleteTodoItem} = addSlice.actions;
export default addSlice.reducer;


