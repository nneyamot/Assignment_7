"use client";
import { createContext, useState } from "react";


export const friendContext=createContext();

const FriendProvider = ({children}) => {

    const [calls , setCalls]=useState([]);
    const [text , setText]=useState([]);
    const [video, setVideo]=useState([]);
    const [all , setAll]=useState([]);


    const info={
        calls,
        setCalls,
        text,
        setText,
        video,
        setVideo,
        all,
        setAll
    };

    return (
        <div>
            <friendContext.Provider value={info}>
                {children}
            </friendContext.Provider>
        </div>
    );
};

export default FriendProvider;