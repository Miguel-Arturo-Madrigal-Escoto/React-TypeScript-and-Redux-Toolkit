import { AsyncThunk, AsyncThunkPayloadCreator, configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "./todo-slice";
import { userSlice } from "./user-slice";

const store = configureStore({
    reducer: {
        todos: todoSlice.reducer,
        user: userSlice.reducer
    }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;


export default store;