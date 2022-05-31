
import { useEffect } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';

import { TodoForm } from '../components/todo/TodoForm';
import { Login } from '../components/ui/Login';
import { Register } from '../components/ui/Register';
import { useAppSelector, useAppDispatch } from '../redux/hooks/redux-hooks';
import { User } from '../redux/models/redux-models';
import { loginUserAction } from '../redux/store/user-actions';


export const AppRouter = () => {

    const { email, id } = useAppSelector(state => state.user);
    const dispatch = useAppDispatch();

    useEffect(() => {
        
        if (localStorage.getItem('user')){
            const user: User = JSON.parse(localStorage.getItem('user') || '{}')
            console.log(user)
            dispatch(loginUserAction(user));
        }


    }, []);

    return (
        <Router>
            <Routes>
                <Route path="/login" element={ <Login /> } />
                <Route path="/" element={ <TodoForm /> } />
                <Route path="/register" element={ <Register /> } />
            </Routes>
        </Router>
    )
}
