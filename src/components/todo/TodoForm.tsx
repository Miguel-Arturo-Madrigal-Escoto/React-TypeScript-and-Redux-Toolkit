import { FormEvent } from 'react';
import { useForm } from "../../hooks/useForm"
import { nanoid } from 'nanoid'
import { useAppSelector, useAppDispatch } from '../../redux/hooks/redux-hooks';
import { todoSlice } from '../../redux/store/todo-slice';
import { Todo } from '../../redux/models/redux-models';
import { TodoItem } from './TodoItem';
import { insertTodoDBAction } from '../../redux/store/todo-actions';


export const TodoForm = () => {
    
    const { todos, current } = useAppSelector(state => state.todos);
    const dispatch = useAppDispatch();
    const { addTodo, searchTodo } = todoSlice.actions;

    const { formValues, handleInputChange} = useForm({
        title: '',
        text: '',
        searchID: ''
    });

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const todo: Todo = {
            id: nanoid(),
            userId: nanoid(),
            text,
            title
        }
        //dispatch(addTodo(todo));
        dispatch(insertTodoDBAction(todo));
    }

    const handleSearch= (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(searchTodo(searchID));
    }

    const { title, text, searchID } = formValues;

    return (
        <>
            <form onSubmit={ handleSubmit } className="container mt-5">
                <h2>Register a todo</h2>
                <label htmlFor="">Titulo&nbsp;</label>
                <input type="text" value={ title } onChange={ ({ target }) => handleInputChange(target.value, 'title') } className="form-control" /><br />
                <label htmlFor="">Notas&nbsp;</label>
                <input type="text" value={ text } onChange={ ({ target }) => handleInputChange(target.value, 'text') } className="form-control" /><br />
                <input type="submit" value="Agregar" className="btn btn-outline-info" />
                <hr />
            </form>
            
            <div className="container">
                {
                    (todos) && (
                        todos.map(todo  => (
                            <TodoItem key={ todo.id } {...todo} />
                        ))
                    )
                }
                <hr />
            </div>
            <form onSubmit={ handleSearch } className="container">
                <br /><br />
                <h2>Buscar un Todo</h2>
                <label htmlFor="">Buscar&nbsp;</label>
                <input type="text" value={ searchID } onChange={ ({ target }) => handleInputChange(target.value, 'searchID') } className="form-control" /><br />
                <input type="submit" value="Buscar" className="btn btn-primary" />
                <hr />
            </form>
            <div className="container">
                <br />
                <br />
                <h2>Resultado de la búsqueda: </h2>
                
                {
                    (current.id) ? (
                        <div>         
                            <TodoItem key={ current.id } {...current} />
                        </div>
                    ) : <>
                            <br />
                            <h5>No todo Found </h5>
                        </>
                }
            </div>
    
        </>
    ) 
}
