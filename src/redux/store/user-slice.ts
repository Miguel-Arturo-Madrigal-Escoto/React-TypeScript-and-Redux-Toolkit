import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo, TodoAll, User } from '../models/redux-models';


const userState: User = {
    id: null,
    email: ''
};

export const userSlice = createSlice({
    name: 'user',
    initialState: userState,
    reducers: {
        login: (state, action: PayloadAction<User>) => {
            return {
                ...state,
                id: action.payload.id,
                email: action.payload.email
            }
        }
    }
});

export const { login } = userSlice.actions;


