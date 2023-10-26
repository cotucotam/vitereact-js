import React from 'react';
import { useState, useRef } from 'react';
import '../my.css'

const SuperForm2 = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [isValidName, setIsValidName] = useState(true)
    const [isValidEmail, setIsValidEmail] = useState(true)

    const nameRef = useRef(null)
    const emailRef = useRef(null)

    const handleOnClick = () => {
        setIsValidEmail(true)
        setIsValidName(true)
        if (!name) {
            setIsValidName(false)
            // document.getElementById("nameId").focus()
            nameRef.current.focus()
            console.log(nameRef, nameRef.current)
            return
        }
        if (!email) {
            setIsValidEmail(false)
            // document.getElementById("emailId").focus()
            emailRef.current.focus()
            return
        }
        alert("success")
    }
    return (
        <div className='supper-form'>
            <span>Your Name:</span>
            <input type="text"
                // id='nameId'
                ref={nameRef}
                value={name}
                className={isValidName === true ? "" : "invalid"}
                onChange={(event) => setName(event.target.value)} />

            <span>Your Email:</span>
            <input type="text"
                // id='emailId'
                ref={emailRef}
                value={email}
                className={isValidEmail === true ? "" : "invalid"}
                onChange={(event) => setEmail(event.target.value)} />

            <div>
                <button onClick={() => handleOnClick()}>Submit</button>
            </div>
        </div>
    );
};

export default SuperForm2;