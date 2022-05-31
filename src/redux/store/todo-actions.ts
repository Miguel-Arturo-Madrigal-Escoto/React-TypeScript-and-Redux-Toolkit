import { createAsyncThunk, isAsyncThunkAction } from '@reduxjs/toolkit';
import { Todo } from '../models/redux-models';
import { RootState } from './store';
import { addTodo } from './todo-slice';


export const insertTodoDBAction = createAsyncThunk(
    'todo/insertTodoDB',
    async (todo: Todo, { dispatch, getState }) => {
        const { todos: { current, todos } } = getState() as RootState
        dispatch(addTodo(todo));   
    }
);