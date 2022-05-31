import { useForm } from "../../hooks/useForm"
import { FormEvent } from 'react';
import { useAppDispatch } from '../../redux/hooks/redux-hooks';
import { loginUserAction } from '../../redux/store/user-actions';
import { User } from "../../redux/models/redux-models";


export const Login = () => {

    const dispatch = useAppDispatch();

    const { formValues, handleInputChange } = useForm({
        email: '',
        password: ''
    });

    const handleLogin = (e: FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        const user: User = {
            email,
            password
        }
        dispatch(loginUserAction(user));
    };

    const { email, password } = formValues;

    return (
        <>
            <form className="form container mt-5">
                <h2 style={{
                    textAlign: 'center',
                }}>Login</h2>
                <div className="form-outline mb-4 mt-5">
                    <input 
                        type="email" 
                        id="form2Example1" 
                        className="form-control"
                        value={ email } 
                        name="email"
                        onChange={ ({ target }) => handleInputChange(target.value, 'email') }
                    />
                    <label className="form-label" htmlFor="form2Example1">Email address</label>
                </div>


                <div className="form-outline mb-4">
                    <input 
                        type="password" 
                        id="form2Example2" 
                        className="form-control" 
                        name="password"
                        value={ password }
                        onChange={ ({ target }) => handleInputChange(target.value, 'password') }
                    />
                    <label className="form-label" htmlFor="form2Example2">Password</label>
                </div>


                <div className="row mb-4">
                    <div className="col d-flex justify-content-center">
                    
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="form2Example31" />
                        <label className="form-check-label" htmlFor="form2Example31"> Remember me </label>
                    </div>
                    </div>

                    <div className="col">
                    
                    <a href="#!">Forgot password?</a>
                    </div>
                </div>

                <input 
                    type="submit" 
                    className="btn btn-primary btn-block mb-4"
                    onClick={ handleLogin }
                    value="Sign in"
                />

                <div className="text-center">
                    <p>Not a member? <a href="#!">Register</a></p>
                    
                </div>
            </form>
        </>
    )
}
