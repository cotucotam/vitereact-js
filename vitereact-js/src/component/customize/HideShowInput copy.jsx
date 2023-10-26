import React, { useEffect, useState } from 'react';

const HideShowInput = (props) => {
    console.log("check props", props)
    const { name, role } = props
    console.log("check name, role", name, role)
    const [IsShow, setIsShow] = useState(false)
    const arrUser = ["name", "email"]
    const arrLeader = ["name", "email", "address"]
    useEffect(() => {
        if (role === "user" && arrUser.includes(name)) {
            setIsShow(true)
        }
        if (role === "leader" && arrLeader.includes(name)) {
            setIsShow(true)
        }
    }, [])
    return (
        <>
            {IsShow && props.children}
        </>
    );
};

export default HideShowInput;