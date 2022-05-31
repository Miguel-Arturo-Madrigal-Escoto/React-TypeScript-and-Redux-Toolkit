import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosBase } from "../../axios/axios-base";
import { User } from '../models/redux-models';
import { login } from "./user-slice";

export interface UserCreateResponse {
    ok:   boolean;
    body: Body;
}

export interface Body {
    _id:      string;
    email:    string;
    password: string;
    __v:      number;
}

// Generated by https://quicktype.io

export interface UserLoginResponse {
    ok:   boolean;
    body: Body;
}

export interface Body {
    _id:      string;
    email:    string;
    password: string;
    __v:      number;
}


export const createUserAction = createAsyncThunk(
    'user/create',
    async (user: User, { dispatch, getState }) => {
        try {
            const resp = await axiosBase.post<UserCreateResponse>('user/create', user, {
                headers: {
                    "Content-Type": "application/json"
                }
            });

            const { body } = resp.data;
            user.id = body._id;
            localStorage.setItem('user', JSON.stringify({ id: user.id, email: user.email }))
            dispatch(login(user));

        } catch (error) {
            console.log(error)
        }
    }
)


export const loginUserAction = createAsyncThunk(
    'user/login',
    async (user: User, { dispatch, getState }) => {

        try {
            const resp = await axiosBase.post<UserLoginResponse>('user/login', user, {
                headers: {
                    "Content-type": "application/json"
                }
            })
    
            const { body } = resp.data;
            user.id = body._id;

            localStorage.setItem('user', JSON.stringify({ id: user.id, email: user.email }))
    
            dispatch(login(user));
        } catch (error) {
            console.log('error el hacer login')
        }
        

    }
)
