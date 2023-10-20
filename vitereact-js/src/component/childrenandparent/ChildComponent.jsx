import React, { useEffect } from 'react';
import { emitter } from './Emitter';

const ChildComponent = (props) => {
    useEffect(() => {
        emitter.on("test", () => {
            fireChildFunction()
        })
    }, [])

    const fireChildFunction = () => {
        props.parentFunc2("cotam dang lam paren - child")
    }
    const callYourParent = () => {
        props.parentFunc()
    }
    const callYourParent2 = () => {
        props.parentFunc2("cotam dang lam child - parent")
    }
    return (
        <div className='child'>
            I am a children
            <div>
                <button onClick={() => callYourParent2()}>Call a parrent</button>
            </div>
        </div>
    );
};

export default ChildComponent;