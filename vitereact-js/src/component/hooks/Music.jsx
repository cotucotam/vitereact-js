import TestAudioMp3 from "./TestAudio.mp3"
import React, { forwardRef } from "react"
const Music = forwardRef((props, ref) => {
    const role = "user"
    return (
        // <audio src={TestAudioMp3} ref={ref}></audio>
        // Fragment tao block cho component ko can phai co div
        // <React.Fragment>
        //     <div>
        //         aaaa
        //     </div>
        //     <div>
        //         bbbb
        //     </div>
        // </React.Fragment>

        // cu phap moi cua fragment
        <>
            {role === "user" ?
                <>
                    <div>"I am a user" </div>
                    <div>hello</div>
                </>

                :
                <>
                    <div>"I am not a user" </div>
                    <div>hello</div>
                </>


            }
        </>


    )
})
export default Music
// export default forwardRef(Music)