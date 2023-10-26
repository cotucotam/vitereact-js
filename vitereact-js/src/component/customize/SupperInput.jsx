import React, { useState } from 'react';
import HideShowInput from './HideShowInput';
const SupperInput = () => {
    const role = "leader"
    const test = {}
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    // console.log(test.test.test)
    return (
        <>

            <HideShowInput role={role} name={"name"} valueInput={name}>
                <div>
                    <label >Name:</label>
                    <input type="text"
                        className='form-control'
                        value={name}
                        onChange={(event) => setName(event.target.value)} />
                </div>
                <br />
            </HideShowInput>

            <HideShowInput role={role} name={"email"} valueInput={email}>
                <div>
                    <label >Email:</label>
                    <input type="text"
                        className='form-control'
                        value={email}
                        onChange={(event) => setEmail(event.target.value)} />
                </div>
                <br />
            </HideShowInput>

            <HideShowInput role={role} name={"address"} valueInput={address}>
                <div>
                    <label >Address:</label>
                    <input type="text"
                        className='form-control'
                        value={address}
                        onChange={(event) => setAddress(event.target.value)} />
                </div>
                <br />
            </HideShowInput>
            <HideShowInput role={role} name={"email"} valueInput={email}>
                <div>
                    <label >Name:</label>
                    <input type="text"
                        className='form-control'
                        value={name}
                        onChange={(event) => setName(event.target.value)} />
                </div>
                <br />
            </HideShowInput>

            <HideShowInput role={role} name={"email"}>
                <div>
                    <label >Email:</label>
                    <input type="text"
                        className='form-control'
                        value={email}
                        onChange={(event) => setEmail(event.target.value)} />
                </div>
                <br />
            </HideShowInput>

            <HideShowInput role={role} name={"address"}>
                <div>
                    <label >Address:</label>
                    <input type="text"
                        className='form-control'
                        value={address}
                        onChange={(event) => setAddress(event.target.value)} />
                </div>
                <br />
            </HideShowInput>   <HideShowInput role={role} name={"email"} valueInput={email}>
                <div>
                    <label >Name:</label>
                    <input type="text"
                        className='form-control'
                        value={name}
                        onChange={(event) => setName(event.target.value)} />
                </div>
                <br />
            </HideShowInput>

            <HideShowInput role={role} name={"email"}>
                <div>
                    <label >Email:</label>
                    <input type="text"
                        className='form-control'
                        value={email}
                        onChange={(event) => setEmail(event.target.value)} />
                </div>
                <br />
            </HideShowInput>

            <HideShowInput role={role} name={"address"}>
                <div>
                    <label >Address:</label>
                    <input type="text"
                        className='form-control'
                        value={address}
                        onChange={(event) => setAddress(event.target.value)} />
                </div>
                <br />
            </HideShowInput>   <HideShowInput role={role} name={"email"} valueInput={email}>
                <div>
                    <label >Name:</label>
                    <input type="text"
                        className='form-control'
                        value={name}
                        onChange={(event) => setName(event.target.value)} />
                </div>
                <br />
            </HideShowInput>

            <HideShowInput role={role} name={"email"}>
                <div>
                    <label >Email:</label>
                    <input type="text"
                        className='form-control'
                        value={email}
                        onChange={(event) => setEmail(event.target.value)} />
                </div>
                <br />
            </HideShowInput>

            <HideShowInput role={role} name={"address"}>
                <div>
                    <label >Address:</label>
                    <input type="text"
                        className='form-control'
                        value={address}
                        onChange={(event) => setAddress(event.target.value)} />
                </div>
                <br />
            </HideShowInput>   <HideShowInput role={role} name={"email"} valueInput={email}>
                <div>
                    <label >Name:</label>
                    <input type="text"
                        className='form-control'
                        value={name}
                        onChange={(event) => setName(event.target.value)} />
                </div>
                <br />
            </HideShowInput>

            <HideShowInput role={role} name={"email"}>
                <div>
                    <label >Email:</label>
                    <input type="text"
                        className='form-control'
                        value={email}
                        onChange={(event) => setEmail(event.target.value)} />
                </div>
                <br />
            </HideShowInput>

            <HideShowInput role={role} name={"address"}>
                <div>
                    <label >Address:</label>
                    <input type="text"
                        className='form-control'
                        value={address}
                        onChange={(event) => setAddress(event.target.value)} />
                </div>
                <br />
            </HideShowInput>   <HideShowInput role={role} name={"email"} valueInput={email}>
                <div>
                    <label >Name:</label>
                    <input type="text"
                        className='form-control'
                        value={name}
                        onChange={(event) => setName(event.target.value)} />
                </div>
                <br />
            </HideShowInput>

            <HideShowInput role={role} name={"email"}>
                <div>
                    <label >Email:</label>
                    <input type="text"
                        className='form-control'
                        value={email}
                        onChange={(event) => setEmail(event.target.value)} />
                </div>
                <br />
            </HideShowInput>

            <HideShowInput role={role} name={"address"}>
                <div>
                    <label >Address:</label>
                    <input type="text"
                        className='form-control'
                        value={address}
                        onChange={(event) => setAddress(event.target.value)} />
                </div>
                <br />
            </HideShowInput>   <HideShowInput role={role} name={"email"} valueInput={email}>
                <div>
                    <label >Name:</label>
                    <input type="text"
                        className='form-control'
                        value={name}
                        onChange={(event) => setName(event.target.value)} />
                </div>
                <br />
            </HideShowInput>

            <HideShowInput role={role} name={"email"}>
                <div>
                    <label >Email:</label>
                    <input type="text"
                        className='form-control'
                        value={email}
                        onChange={(event) => setEmail(event.target.value)} />
                </div>
                <br />
            </HideShowInput>

            <HideShowInput role={role} name={"address"}>
                <div>
                    <label >Address:</label>
                    <input type="text"
                        className='form-control'
                        value={address}
                        onChange={(event) => setAddress(event.target.value)} />
                </div>
                <br />
            </HideShowInput>   <HideShowInput role={role} name={"email"} valueInput={email}>
                <div>
                    <label >Name:</label>
                    <input type="text"
                        className='form-control'
                        value={name}
                        onChange={(event) => setName(event.target.value)} />
                </div>
                <br />
            </HideShowInput>

            <HideShowInput role={role} name={"email"}>
                <div>
                    <label >Email:</label>
                    <input type="text"
                        className='form-control'
                        value={email}
                        onChange={(event) => setEmail(event.target.value)} />
                </div>
                <br />
            </HideShowInput>

            <HideShowInput role={role} name={"address"}>
                <div>
                    <label >Address:</label>
                    <input type="text"
                        className='form-control'
                        value={address}
                        onChange={(event) => setAddress(event.target.value)} />
                </div>
                <br />
            </HideShowInput>   <HideShowInput role={role} name={"email"} valueInput={email}>
                <div>
                    <label >Name:</label>
                    <input type="text"
                        className='form-control'
                        value={name}
                        onChange={(event) => setName(event.target.value)} />
                </div>
                <br />
            </HideShowInput>

            <HideShowInput role={role} name={"email"}>
                <div>
                    <label >Email:</label>
                    <input type="text"
                        className='form-control'
                        value={email}
                        onChange={(event) => setEmail(event.target.value)} />
                </div>
                <br />
            </HideShowInput>

            <HideShowInput role={role} name={"address"}>
                <div>
                    <label >Address:</label>
                    <input type="text"
                        className='form-control'
                        value={address}
                        onChange={(event) => setAddress(event.target.value)} />
                </div>
                <br />
            </HideShowInput>   <HideShowInput role={role} name={"email"} valueInput={email}>
                <div>
                    <label >Name:</label>
                    <input type="text"
                        className='form-control'
                        value={name}
                        onChange={(event) => setName(event.target.value)} />
                </div>
                <br />
            </HideShowInput>

            <HideShowInput role={role} name={"email"}>
                <div>
                    <label >Email:</label>
                    <input type="text"
                        className='form-control'
                        value={email}
                        onChange={(event) => setEmail(event.target.value)} />
                </div>
                <br />
            </HideShowInput>

            <HideShowInput role={role} name={"address"}>
                <div>
                    <label >Address:</label>
                    <input type="text"
                        className='form-control'
                        value={address}
                        onChange={(event) => setAddress(event.target.value)} />
                </div>
                <br />
            </HideShowInput>   <HideShowInput role={role} name={"email"} valueInput={email}>
                <div>
                    <label >Name:</label>
                    <input type="text"
                        className='form-control'
                        value={name}
                        onChange={(event) => setName(event.target.value)} />
                </div>
                <br />
            </HideShowInput>

            <HideShowInput role={role} name={"email"}>
                <div>
                    <label >Email:</label>
                    <input type="text"
                        className='form-control'
                        value={email}
                        onChange={(event) => setEmail(event.target.value)} />
                </div>
                <br />
            </HideShowInput>

            <HideShowInput role={role} name={"address"}>
                <div>
                    <label >Address:</label>
                    <input type="text"
                        className='form-control'
                        value={address}
                        onChange={(event) => setAddress(event.target.value)} />
                </div>
                <br />
            </HideShowInput>   <HideShowInput role={role} name={"email"} valueInput={email}>
                <div>
                    <label >Name:</label>
                    <input type="text"
                        className='form-control'
                        value={name}
                        onChange={(event) => setName(event.target.value)} />
                </div>
                <br />
            </HideShowInput>

            <HideShowInput role={role} name={"email"}>
                <div>
                    <label >Email:</label>
                    <input type="text"
                        className='form-control'
                        value={email}
                        onChange={(event) => setEmail(event.target.value)} />
                </div>
                <br />
            </HideShowInput>

            <HideShowInput role={role} name={"address"}>
                <div>
                    <label >Address:</label>
                    <input type="text"
                        className='form-control'
                        value={address}
                        onChange={(event) => setAddress(event.target.value)} />
                </div>
                <br />
            </HideShowInput>   <HideShowInput role={role} name={"email"} valueInput={email}>
                <div>
                    <label >Name:</label>
                    <input type="text"
                        className='form-control'
                        value={name}
                        onChange={(event) => setName(event.target.value)} />
                </div>
                <br />
            </HideShowInput>

            <HideShowInput role={role} name={"email"}>
                <div>
                    <label >Email:</label>
                    <input type="text"
                        className='form-control'
                        value={email}
                        onChange={(event) => setEmail(event.target.value)} />
                </div>
                <br />
            </HideShowInput>

            <HideShowInput role={role} name={"address"}>
                <div>
                    <label >Address:</label>
                    <input type="text"
                        className='form-control'
                        value={address}
                        onChange={(event) => setAddress(event.target.value)} />
                </div>
                <br />
            </HideShowInput>   <HideShowInput role={role} name={"email"} valueInput={email}>
                <div>
                    <label >Name:</label>
                    <input type="text"
                        className='form-control'
                        value={name}
                        onChange={(event) => setName(event.target.value)} />
                </div>
                <br />
            </HideShowInput>

            <HideShowInput role={role} name={"email"}>
                <div>
                    <label >Email:</label>
                    <input type="text"
                        className='form-control'
                        value={email}
                        onChange={(event) => setEmail(event.target.value)} />
                </div>
                <br />
            </HideShowInput>

            <HideShowInput role={role} name={"address"}>
                <div>
                    <label >Address:</label>
                    <input type="text"
                        className='form-control'
                        value={address}
                        onChange={(event) => setAddress(event.target.value)} />
                </div>
                <br />
            </HideShowInput>   <HideShowInput role={role} name={"email"} valueInput={email}>
                <div>
                    <label >Name:</label>
                    <input type="text"
                        className='form-control'
                        value={name}
                        onChange={(event) => setName(event.target.value)} />
                </div>
                <br />
            </HideShowInput>

            <HideShowInput role={role} name={"email"}>
                <div>
                    <label >Email:</label>
                    <input type="text"
                        className='form-control'
                        value={email}
                        onChange={(event) => setEmail(event.target.value)} />
                </div>
                <br />
            </HideShowInput>

            <HideShowInput role={role} name={"address"}>
                <div>
                    <label >Address:</label>
                    <input type="text"
                        className='form-control'
                        value={address}
                        onChange={(event) => setAddress(event.target.value)} />
                </div>
                <br />
            </HideShowInput>   <HideShowInput role={role} name={"email"} valueInput={email}>
                <div>
                    <label >Name:</label>
                    <input type="text"
                        className='form-control'
                        value={name}
                        onChange={(event) => setName(event.target.value)} />
                </div>
                <br />
            </HideShowInput>

            <HideShowInput role={role} name={"email"}>
                <div>
                    <label >Email:</label>
                    <input type="text"
                        className='form-control'
                        value={email}
                        onChange={(event) => setEmail(event.target.value)} />
                </div>
                <br />
            </HideShowInput>

            <HideShowInput role={role} name={"address"}>
                <div>
                    <label >Address:</label>
                    <input type="text"
                        className='form-control'
                        value={address}
                        onChange={(event) => setAddress(event.target.value)} />
                </div>
                <br />
            </HideShowInput>   <HideShowInput role={role} name={"email"} valueInput={email}>
                <div>
                    <label >Name:</label>
                    <input type="text"
                        className='form-control'
                        value={name}
                        onChange={(event) => setName(event.target.value)} />
                </div>
                <br />
            </HideShowInput>

            <HideShowInput role={role} name={"email"}>
                <div>
                    <label >Email:</label>
                    <input type="text"
                        className='form-control'
                        value={email}
                        onChange={(event) => setEmail(event.target.value)} />
                </div>
                <br />
            </HideShowInput>

            <HideShowInput role={role} name={"address"}>
                <div>
                    <label >Address:</label>
                    <input type="text"
                        className='form-control'
                        value={address}
                        onChange={(event) => setAddress(event.target.value)} />
                </div>
                <br />
            </HideShowInput>   <HideShowInput role={role} name={"email"} valueInput={email}>
                <div>
                    <label >Name:</label>
                    <input type="text"
                        className='form-control'
                        value={name}
                        onChange={(event) => setName(event.target.value)} />
                </div>
                <br />
            </HideShowInput>

            <HideShowInput role={role} name={"email"}>
                <div>
                    <label >Email:</label>
                    <input type="text"
                        className='form-control'
                        value={email}
                        onChange={(event) => setEmail(event.target.value)} />
                </div>
                <br />
            </HideShowInput>

            <HideShowInput role={role} name={"address"}>
                <div>
                    <label >Address:</label>
                    <input type="text"
                        className='form-control'
                        value={address}
                        onChange={(event) => setAddress(event.target.value)} />
                </div>
                <br />
            </HideShowInput>   <HideShowInput role={role} name={"email"} valueInput={email}>
                <div>
                    <label >Name:</label>
                    <input type="text"
                        className='form-control'
                        value={name}
                        onChange={(event) => setName(event.target.value)} />
                </div>
                <br />
            </HideShowInput>

            <HideShowInput role={role} name={"email"}>
                <div>
                    <label >Email:</label>
                    <input type="text"
                        className='form-control'
                        value={email}
                        onChange={(event) => setEmail(event.target.value)} />
                </div>
                <br />
            </HideShowInput>

            <HideShowInput role={role} name={"address"}>
                <div>
                    <label >Address:</label>
                    <input type="text"
                        className='form-control'
                        value={address}
                        onChange={(event) => setAddress(event.target.value)} />
                </div>
                <br />
            </HideShowInput>   <HideShowInput role={role} name={"email"} valueInput={email}>
                <div>
                    <label >Name:</label>
                    <input type="text"
                        className='form-control'
                        value={name}
                        onChange={(event) => setName(event.target.value)} />
                </div>
                <br />
            </HideShowInput>

            <HideShowInput role={role} name={"email"}>
                <div>
                    <label >Email:</label>
                    <input type="text"
                        className='form-control'
                        value={email}
                        onChange={(event) => setEmail(event.target.value)} />
                </div>
                <br />
            </HideShowInput>

            <HideShowInput role={role} name={"address"}>
                <div>
                    <label >Address:</label>
                    <input type="text"
                        className='form-control'
                        value={address}
                        onChange={(event) => setAddress(event.target.value)} />
                </div>
                <br />
            </HideShowInput>   <HideShowInput role={role} name={"email"} valueInput={email}>
                <div>
                    <label >Name:</label>
                    <input type="text"
                        className='form-control'
                        value={name}
                        onChange={(event) => setName(event.target.value)} />
                </div>
                <br />
            </HideShowInput>

            <HideShowInput role={role} name={"email"}>
                <div>
                    <label >Email:</label>
                    <input type="text"
                        className='form-control'
                        value={email}
                        onChange={(event) => setEmail(event.target.value)} />
                </div>
                <br />
            </HideShowInput>

            <HideShowInput role={role} name={"address"}>
                <div>
                    <label >Address:</label>
                    <input type="text"
                        className='form-control'
                        value={address}
                        onChange={(event) => setAddress(event.target.value)} />
                </div>
                <br />
            </HideShowInput>   <HideShowInput role={role} name={"email"} valueInput={email}>
                <div>
                    <label >Name:</label>
                    <input type="text"
                        className='form-control'
                        value={name}
                        onChange={(event) => setName(event.target.value)} />
                </div>
                <br />
            </HideShowInput>

            <HideShowInput role={role} name={"email"}>
                <div>
                    <label >Email:</label>
                    <input type="text"
                        className='form-control'
                        value={email}
                        onChange={(event) => setEmail(event.target.value)} />
                </div>
                <br />
            </HideShowInput>

            <HideShowInput role={role} name={"address"}>
                <div>
                    <label >Address:</label>
                    <input type="text"
                        className='form-control'
                        value={address}
                        onChange={(event) => setAddress(event.target.value)} />
                </div>
                <br />
            </HideShowInput>   <HideShowInput role={role} name={"email"} valueInput={email}>
                <div>
                    <label >Name:</label>
                    <input type="text"
                        className='form-control'
                        value={name}
                        onChange={(event) => setName(event.target.value)} />
                </div>
                <br />
            </HideShowInput>

            <HideShowInput role={role} name={"email"}>
                <div>
                    <label >Email:</label>
                    <input type="text"
                        className='form-control'
                        value={email}
                        onChange={(event) => setEmail(event.target.value)} />
                </div>
                <br />
            </HideShowInput>

            <HideShowInput role={role} name={"address"}>
                <div>
                    <label >Address:</label>
                    <input type="text"
                        className='form-control'
                        value={address}
                        onChange={(event) => setAddress(event.target.value)} />
                </div>
                <br />
            </HideShowInput>   <HideShowInput role={role} name={"email"} valueInput={email}>
                <div>
                    <label >Name:</label>
                    <input type="text"
                        className='form-control'
                        value={name}
                        onChange={(event) => setName(event.target.value)} />
                </div>
                <br />
            </HideShowInput>

            <HideShowInput role={role} name={"email"}>
                <div>
                    <label >Email:</label>
                    <input type="text"
                        className='form-control'
                        value={email}
                        onChange={(event) => setEmail(event.target.value)} />
                </div>
                <br />
            </HideShowInput>

            <HideShowInput role={role} name={"address"}>
                <div>
                    <label >Address:</label>
                    <input type="text"
                        className='form-control'
                        value={address}
                        onChange={(event) => setAddress(event.target.value)} />
                </div>
                <br />
            </HideShowInput>   <HideShowInput role={role} name={"email"} valueInput={email}>
                <div>
                    <label >Name:</label>
                    <input type="text"
                        className='form-control'
                        value={name}
                        onChange={(event) => setName(event.target.value)} />
                </div>
                <br />
            </HideShowInput>

            <HideShowInput role={role} name={"email"}>
                <div>
                    <label >Email:</label>
                    <input type="text"
                        className='form-control'
                        value={email}
                        onChange={(event) => setEmail(event.target.value)} />
                </div>
                <br />
            </HideShowInput>

            <HideShowInput role={role} name={"address"}>
                <div>
                    <label >Address:</label>
                    <input type="text"
                        className='form-control'
                        value={address}
                        onChange={(event) => setAddress(event.target.value)} />
                </div>
                <br />
            </HideShowInput>   <HideShowInput role={role} name={"email"} valueInput={email}>
                <div>
                    <label >Name:</label>
                    <input type="text"
                        className='form-control'
                        value={name}
                        onChange={(event) => setName(event.target.value)} />
                </div>
                <br />
            </HideShowInput>

            <HideShowInput role={role} name={"email"}>
                <div>
                    <label >Email:</label>
                    <input type="text"
                        className='form-control'
                        value={email}
                        onChange={(event) => setEmail(event.target.value)} />
                </div>
                <br />
            </HideShowInput>

            <HideShowInput role={role} name={"address"}>
                <div>
                    <label >Address:</label>
                    <input type="text"
                        className='form-control'
                        value={address}
                        onChange={(event) => setAddress(event.target.value)} />
                </div>
                <br />
            </HideShowInput>   <HideShowInput role={role} name={"email"} valueInput={email}>
                <div>
                    <label >Name:</label>
                    <input type="text"
                        className='form-control'
                        value={name}
                        onChange={(event) => setName(event.target.value)} />
                </div>
                <br />
            </HideShowInput>

            <HideShowInput role={role} name={"email"}>
                <div>
                    <label >Email:</label>
                    <input type="text"
                        className='form-control'
                        value={email}
                        onChange={(event) => setEmail(event.target.value)} />
                </div>
                <br />
            </HideShowInput>

            <HideShowInput role={role} name={"address"}>
                <div>
                    <label >Address:</label>
                    <input type="text"
                        className='form-control'
                        value={address}
                        onChange={(event) => setAddress(event.target.value)} />
                </div>
                <br />
            </HideShowInput>   <HideShowInput role={role} name={"email"} valueInput={email}>
                <div>
                    <label >Name:</label>
                    <input type="text"
                        className='form-control'
                        value={name}
                        onChange={(event) => setName(event.target.value)} />
                </div>
                <br />
            </HideShowInput>

            <HideShowInput role={role} name={"email"}>
                <div>
                    <label >Email:</label>
                    <input type="text"
                        className='form-control'
                        value={email}
                        onChange={(event) => setEmail(event.target.value)} />
                </div>
                <br />
            </HideShowInput>

            <HideShowInput role={role} name={"address"}>
                <div>
                    <label >Address:</label>
                    <input type="text"
                        className='form-control'
                        value={address}
                        onChange={(event) => setAddress(event.target.value)} />
                </div>
                <br />
            </HideShowInput>   <HideShowInput role={role} name={"email"} valueInput={email}>
                <div>
                    <label >Name:</label>
                    <input type="text"
                        className='form-control'
                        value={name}
                        onChange={(event) => setName(event.target.value)} />
                </div>
                <br />
            </HideShowInput>

            <HideShowInput role={role} name={"email"}>
                <div>
                    <label >Email:</label>
                    <input type="text"
                        className='form-control'
                        value={email}
                        onChange={(event) => setEmail(event.target.value)} />
                </div>
                <br />
            </HideShowInput>

            <HideShowInput role={role} name={"address"}>
                <div>
                    <label >Address:</label>
                    <input type="text"
                        className='form-control'
                        value={address}
                        onChange={(event) => setAddress(event.target.value)} />
                </div>
                <br />
            </HideShowInput>   <HideShowInput role={role} name={"email"} valueInput={email}>
                <div>
                    <label >Name:</label>
                    <input type="text"
                        className='form-control'
                        value={name}
                        onChange={(event) => setName(event.target.value)} />
                </div>
                <br />
            </HideShowInput>

            <HideShowInput role={role} name={"email"}>
                <div>
                    <label >Email:</label>
                    <input type="text"
                        className='form-control'
                        value={email}
                        onChange={(event) => setEmail(event.target.value)} />
                </div>
                <br />
            </HideShowInput>

            <HideShowInput role={role} name={"address"}>
                <div>
                    <label >Address:</label>
                    <input type="text"
                        className='form-control'
                        value={address}
                        onChange={(event) => setAddress(event.target.value)} />
                </div>
                <br />
            </HideShowInput>   <HideShowInput role={role} name={"email"} valueInput={email}>
                <div>
                    <label >Name:</label>
                    <input type="text"
                        className='form-control'
                        value={name}
                        onChange={(event) => setName(event.target.value)} />
                </div>
                <br />
            </HideShowInput>

            <HideShowInput role={role} name={"email"}>
                <div>
                    <label >Email:</label>
                    <input type="text"
                        className='form-control'
                        value={email}
                        onChange={(event) => setEmail(event.target.value)} />
                </div>
                <br />
            </HideShowInput>

            <HideShowInput role={role} name={"address"}>
                <div>
                    <label >Address:</label>
                    <input type="text"
                        className='form-control'
                        value={address}
                        onChange={(event) => setAddress(event.target.value)} />
                </div>
                <br />
            </HideShowInput>   <HideShowInput role={role} name={"email"} valueInput={email}>
                <div>
                    <label >Name:</label>
                    <input type="text"
                        className='form-control'
                        value={name}
                        onChange={(event) => setName(event.target.value)} />
                </div>
                <br />
            </HideShowInput>

            <HideShowInput role={role} name={"email"}>
                <div>
                    <label >Email:</label>
                    <input type="text"
                        className='form-control'
                        value={email}
                        onChange={(event) => setEmail(event.target.value)} />
                </div>
                <br />
            </HideShowInput>

            <HideShowInput role={role} name={"address"}>
                <div>
                    <label >Address:</label>
                    <input type="text"
                        className='form-control'
                        value={address}
                        onChange={(event) => setAddress(event.target.value)} />
                </div>
                <br />
            </HideShowInput>   <HideShowInput role={role} name={"email"} valueInput={email}>
                <div>
                    <label >Name:</label>
                    <input type="text"
                        className='form-control'
                        value={name}
                        onChange={(event) => setName(event.target.value)} />
                </div>
                <br />
            </HideShowInput>

            <HideShowInput role={role} name={"email"}>
                <div>
                    <label >Email:</label>
                    <input type="text"
                        className='form-control'
                        value={email}
                        onChange={(event) => setEmail(event.target.value)} />
                </div>
                <br />
            </HideShowInput>

            <HideShowInput role={role} name={"address"}>
                <div>
                    <label >Address:</label>
                    <input type="text"
                        className='form-control'
                        value={address}
                        onChange={(event) => setAddress(event.target.value)} />
                </div>
                <br />
            </HideShowInput>   <HideShowInput role={role} name={"email"} valueInput={email}>
                <div>
                    <label >Name:</label>
                    <input type="text"
                        className='form-control'
                        value={name}
                        onChange={(event) => setName(event.target.value)} />
                </div>
                <br />
            </HideShowInput>

            <HideShowInput role={role} name={"email"}>
                <div>
                    <label >Email:</label>
                    <input type="text"
                        className='form-control'
                        value={email}
                        onChange={(event) => setEmail(event.target.value)} />
                </div>
                <br />
            </HideShowInput>

            <HideShowInput role={role} name={"address"}>
                <div>
                    <label >Address:</label>
                    <input type="text"
                        className='form-control'
                        value={address}
                        onChange={(event) => setAddress(event.target.value)} />
                </div>
                <br />
            </HideShowInput>   <HideShowInput role={role} name={"email"} valueInput={email}>
                <div>
                    <label >Name:</label>
                    <input type="text"
                        className='form-control'
                        value={name}
                        onChange={(event) => setName(event.target.value)} />
                </div>
                <br />
            </HideShowInput>

            <HideShowInput role={role} name={"email"}>
                <div>
                    <label >Email:</label>
                    <input type="text"
                        className='form-control'
                        value={email}
                        onChange={(event) => setEmail(event.target.value)} />
                </div>
                <br />
            </HideShowInput>

            <HideShowInput role={role} name={"address"}>
                <div>
                    <label >Address:</label>
                    <input type="text"
                        className='form-control'
                        value={address}
                        onChange={(event) => setAddress(event.target.value)} />
                </div>
                <br />
            </HideShowInput>   <HideShowInput role={role} name={"email"} valueInput={email}>
                <div>
                    <label >Name:</label>
                    <input type="text"
                        className='form-control'
                        value={name}
                        onChange={(event) => setName(event.target.value)} />
                </div>
                <br />
            </HideShowInput>

            <HideShowInput role={role} name={"email"}>
                <div>
                    <label >Email:</label>
                    <input type="text"
                        className='form-control'
                        value={email}
                        onChange={(event) => setEmail(event.target.value)} />
                </div>
                <br />
            </HideShowInput>

            <HideShowInput role={role} name={"address"}>
                <div>
                    <label >Address:</label>
                    <input type="text"
                        className='form-control'
                        value={address}
                        onChange={(event) => setAddress(event.target.value)} />
                </div>
                <br />
            </HideShowInput>   <HideShowInput role={role} name={"email"} valueInput={email}>
                <div>
                    <label >Name:</label>
                    <input type="text"
                        className='form-control'
                        value={name}
                        onChange={(event) => setName(event.target.value)} />
                </div>
                <br />
            </HideShowInput>

            <HideShowInput role={role} name={"email"}>
                <div>
                    <label >Email:</label>
                    <input type="text"
                        className='form-control'
                        value={email}
                        onChange={(event) => setEmail(event.target.value)} />
                </div>
                <br />
            </HideShowInput>

            <HideShowInput role={role} name={"address"}>
                <div>
                    <label >Address:</label>
                    <input type="text"
                        className='form-control'
                        value={address}
                        onChange={(event) => setAddress(event.target.value)} />
                </div>
                <br />
            </HideShowInput>
        </>
    );
};

export default SupperInput;