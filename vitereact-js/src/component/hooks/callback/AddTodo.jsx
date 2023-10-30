import React, { memo, useState } from 'react';

const AddTodo = (props) => {
    const { addNewTodo } = props
    const [todoName, setTodoName] = useState("")
    console.log("render component add new todo")
    return (
        <div className='add-new-todo'>
            <input
                type={"text"}
                value={todoName}
                onChange={(event) => setTodoName(event.target.value)}
            >
            </input>
            <button onClick={() => addNewTodo({ name: todoName })}>Add</button>
        </div>
    );
};

export default memo(AddTodo);