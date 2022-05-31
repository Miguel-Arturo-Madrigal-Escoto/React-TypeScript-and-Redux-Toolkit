import { Provider } from "react-redux"
import { TodoForm } from "./components/todo/TodoForm"
import store from './redux/store/store';
import { AppRouter } from './Routes/AppRouter';


export const App = () => {
    return (
        <Provider store={ store }>
            <AppRouter />
        </Provider>
    )
}
