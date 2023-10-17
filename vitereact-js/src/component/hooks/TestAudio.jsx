import { useRef } from "react";
import Music from "./Music";

import React from 'react';

const TestAudio = () => {
    const audioRef = useRef(null)
    const hanlePlay = () => {
        console.log("play")
        audioRef.current.play()
    }
    const hanlePause = () => {
        console.log("pause")
        audioRef.current.pause()
    }
    return (
        <div>
            <Music ref={audioRef} />
            <button onClick={() => hanlePlay()}>play</button>
            <button onClick={() => hanlePause()}>pause</button>
        </div>

    );
};

export default TestAudio;