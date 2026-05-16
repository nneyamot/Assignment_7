"use client";
import { useContext, useState } from "react";
import { friendContext } from "../context/FriendProvider";
import AllTimeline from "../alltimeline/AllTimeline";
import { FaAngleDown } from "react-icons/fa";

const TimeLinePage = () => {

    // const {collection,setCollection}=useState([]);



    const { calls, text, video, all, setAll } = useContext(friendContext);
    const collection = [...calls,...text,...video];
    const handleCallsSelection = (items) => {
        setAll(items)
    }

    return (
        <div className="m-12 space-y-5">
            <h1 className="text-5xl font-extrabold ">Timeline </h1>
            {/* <h1>size of all : {all.length}</h1> */}
            <div className="flex justify-between items-center shadow p-5 w-120">
                <h1>Filter Timeline</h1>
                <details className="dropdown">
                    <summary className="btn m-1"><FaAngleDown />
                    </summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li><button onClick={() => handleCallsSelection(collection)} className="btn">All</button></li>
                        <li><button onClick={() => handleCallsSelection(calls)} className="btn">Calls</button></li>
                        <li><button onClick={() => handleCallsSelection(text)} className="btn">Text</button></li>
                        <li><button onClick={() => handleCallsSelection(video)} className="btn">Video</button></li>

                    </ul>
                </details>
            </div>


            <div className="space-y-6">

                {
                    all.map((call, idx) => <AllTimeline key={idx} call={call}></AllTimeline>)


                }

            </div>
        </div>
    );
};

export default TimeLinePage;