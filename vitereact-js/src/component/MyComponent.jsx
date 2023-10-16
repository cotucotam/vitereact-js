// rsc
import React from "react";
import './my.css'
const MyComponent = (props) => {
    return (
        <div className="my-component">
            Hello my Component {props.count}
        </div>
    )
}
export default MyComponent;
