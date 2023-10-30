import { useCallback, useState, useMemo } from "react";
import AddTodo from './AddTodo'
import { useFetch } from "./hookUtil";
import React from 'react';

const TodoLIst = (props) => {
    // const { data } = useFetch("https://jsonplaceholder.typicode.com/posts")
    // console.log(data)
    // console.log(response)
    const [count, setCount] = useState("")
    const [todos, setTodos] = useState([{ name: "Default Todo..." },])


    // const addNewTodo = useCallback((todo) => {
    //     setTodos([...todos, todo])
    // })

    const addNewTodo = useCallback((todo) => {
        setTodos((todos) => [...todos, todo])//(todos) => [...todos, todo] truy cap gia tri qua khu cua todos
    }, [])

    const handleCount = () => {
        setCount(Math.floor(Math.random() * 10))
    }
    // const supperVar = useMemo(() => {
    //     let result = 0
    //     for (let i = 0; i < 1; i++) {
    //         result += i
    //     }
    //     return result
    // })
    return (
        <>
            {todos && todos.length > 0 &&
                todos.map((todo, index) => {
                    return (
                        <div key={`todo-${index}`}>{todo.name}</div>
                    )

                })
            }
            <br />
            <AddTodo addNewTodo={addNewTodo} />
            <div>
                <button onClick={() => handleCount()}>
                    count random...
                </button>
                My total are: {count}
            </div>
        </>
    );
};

export default TodoLIst;
