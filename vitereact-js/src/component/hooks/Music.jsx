import TestAudioMp3 from "./TestAudio.mp3"
import { forwardRef } from "react"
const Music = forwardRef((props, ref) => {
    return (
        <audio src={TestAudioMp3} ref={ref}></audio>
    )
})
export default Music
// export default forwardRef(Music)