import React from 'react';
import HideShowInput from './HideShowInput';
const SupperInput = () => {
    const role = "user"

    return (
        <>
            {/* <div className='form-group'>
                <label >Name:</label>
                <input type="text"
                    className='form-control' />
            </div>
            <br />
            <div className='form-group'>
                <label>Email:</label>
                <input type="text"
                    className='form-control' />
            </div> */}

            <HideShowInput role={role} name={"name"}>
                <div>
                    <label >Name:</label>
                    <input type="text"
                        className='form-control' />
                </div>
                <br />
            </HideShowInput>

            <HideShowInput role={role} name={"email"}>
                <div>
                    <label >Email:</label>
                    <input type="text"
                        className='form-control' />
                </div>
                <br />
            </HideShowInput>

            <HideShowInput role={role} name={"address"}>
                <div>
                    <label >Address:</label>
                    <input type="text"
                        className='form-control' />
                </div>
                <br />
            </HideShowInput>
        </>
    );
};

export default SupperInput;