export interface Todo {
    id:  string | null;
    userId: string | null;
    title: string;
    text: string;
}

export interface TodoAll {
    todos:   Todo[];
    current: Todo;
}

export interface User {
    id?:      string | null;
    email:    string;
    password?: string;
}