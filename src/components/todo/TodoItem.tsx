
import { Todo } from '../../redux/models/redux-models'
import { useAppDispatch } from '../../redux/hooks/redux-hooks';
import { todoSlice } from '../../redux/store/todo-slice';

export const TodoItem = ({ id, userId, text, title }: Todo) => {

    const dispatch = useAppDispatch();

    const handleDelete = () => {
        const { deleteTodo } = todoSlice.actions;
        dispatch(deleteTodo(id));
    }

     

    return (
        <div>
            <h2>Titulo: { title }</h2>
            <p>ID: { id }</p>
            <p>Usuario: { userId }</p>
            <p>Texto: { text }</p>
    
            <button
                onClick={ handleDelete }
                className="btn btn-outline-danger"
            >
                Eliminar nota
            </button>
        </div>
    )
}
