import { useCallback, useState, useMemo } from "react";
import AddTodo from './AddTodo'
import { useFetch } from "./hookUtil";
import React from 'react';

const TodoLIst = (props) => {
    const { data } = useFetch("https://jsonplaceholder.typicode.com/posts")
    console.log(data)
    // console.log(response)
    // const [count, setCount] = useState("")
    // const [todos, setTodos] = useState([{ name: "Default Todo..." },])


    // addNewTodo = useCallback((todo) => {
    //     setTodos([...todos, todo])
    // })
    // const handleCount = () => {
    //     setCount(Math.floor(Math.random() * 10))
    // }
    // const supperVar = useMemo(() => {
    //     let result = 0
    //     for (let i = 0; i < 1; i++) {
    //         result += i
    //     }
    //     return result
    // })
    return (
        <div>

        </div>
    );
};

export default TodoLIst;