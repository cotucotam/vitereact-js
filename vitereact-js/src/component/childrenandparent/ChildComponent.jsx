import React, { useEffect, forwardRef, useImperativeHandle } from 'react';
import { emitter } from './Emitter';

const ChildComponent = (props, ref) => {
    // useEffect(() => {
    //     emitter.on("test", () => {
    //         fireChildFunction()
    //     })
    // }, [])
    // const fireChildFunction = () => {
    //     props.parentFunc2()
    // }
    // useEffect(() => {
    //     emitter.on("test", (data) => {
    //         fireChildFunction(data)
    //     })
    // }, [])

    // const fireChildFunction = (data) => {
    //     props.parentFunc2(data)
    // }

    const callYourParent = () => {
        props.parentFunc()
    }
    const callYourParent2 = () => {
        props.parentFunc2("cotam dang lam child - parent")
    }
    useImperativeHandle(ref, () => ({
        fireChildFunction() {
            alert("cotam dang lam parent - child")
        }

    }))
    return (
        <div className='child'>
            I am a children
            <div>
                <button onClick={() => callYourParent2()}>Call a parrent</button>
            </div>
        </div>
    );
};

export default forwardRef(ChildComponent);