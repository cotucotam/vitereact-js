import React, { useRef, forwardRef } from 'react';
import ChildComponent from './ChildComponent';
import { emitter } from './Emitter';
const Parent = (props) => {
    const parentFunc = () => {
        alert("me")
    }
    const parentFunc2 = (message) => {
        alert(message)
    }
    // const callMyChild = () => {
    //     emitter.emit("test")
    // }


    // const callMyChild = () => {
    //     emitter.emit("test", 'cotam dang lam paren - child')
    // }
    const childRef = useRef(null)
    const callMyChild = () => {
        childRef.current.fireChildFunction()
    }
    return (
        <div className='parent'>
            we are the parents
            <div>
                <button onClick={() => callMyChild()}>Call child now</button>

            </div>
            <br />
            <ChildComponent
                ref={childRef}
                parentFunc={parentFunc}
                parentFunc2={parentFunc2} />
        </div>
    );
};

export default Parent;