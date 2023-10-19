import React from 'react';

const ChildComponent = (props) => {
    const callYourParent = () => {
        props.parentFunc()
    }
    const callYourParent2 = () => {
        props.parentFunc2("cotam")
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