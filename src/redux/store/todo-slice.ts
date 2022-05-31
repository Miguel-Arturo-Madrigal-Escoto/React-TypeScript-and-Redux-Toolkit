import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo, TodoAll } from '../models/redux-models';

const todoState: TodoAll = {
    todos: [],
    current: {
        id: null,
        userId: null,
        title: '',
        text: ''
    }
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState: todoState,
    reducers: {
        setTodos: (state, action: PayloadAction<TodoAll>) => {
            // action.payload: TodoAll
            return {
                ...state,
                todos: action.payload.todos
            }
        },
        addTodo: (state, action: PayloadAction<Todo>) => {
            // action.payload: Todo
            return {
                ...state,
                todos: [
                    ...state.todos,
                    action.payload
                ]
            }
        },
        deleteTodo: (state, action: PayloadAction<string|null>) => {
            return {
                ...state,
                todos: state.todos.filter(
                    todo => todo.id !== action.payload
                )
            }
        },
        searchTodo: (state, action: PayloadAction<string|null>) => {
            return {
                ...state,
                current: state.todos.filter(
                    todo => todo.id === action.payload
                )[0] || {
                    id: null,
                    userId: null,
                    title: '',
                    text: ''
                }
            }
        },
    }
});

export const { addTodo, deleteTodo, searchTodo, setTodos } = todoSlice.actions;


