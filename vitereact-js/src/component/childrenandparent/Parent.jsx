import React from 'react';
import ChildComponent from './ChildComponent';
import { emitter } from './Emitter';
const Parent = (props) => {
    const parentFunc = () => {
        alert("me")
    }
    const parentFunc2 = (message) => {
        alert(message)
    }
    const callMyChild = () => {
        emitter.emit("test")
    }
    return (
        <div className='parent'>
            we are the parents
            <div>
                <button onClick={() => callMyChild()}>Call child now</button>
            </div>
            <br />
            <ChildComponent
                parentFunc={parentFunc}
                parentFunc2={parentFunc2} />
        </div>
    );
};

export default Parent;