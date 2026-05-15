"use client";
import { useContext } from "react";
import { friendContext } from "../context/FriendProvider";
import AllTimeline from "../alltimeline/AllTimeline";

const TimeLinePage = () => {

    const {calls,text,video,all}=useContext(friendContext);
    // console.log(calls.length, calls)
    // console.log(text.length , text);
    // console.log(video.length , video);
      //console.log(info)
      console.log(all.length)
      console.log(all);
      console.log(typeof(all))
        return (
        <div className="m-12 space-y-5">
            <h1 className="text-5xl font-extrabold ">Timeline </h1>
            <h1>size of all : {all.length}</h1>
            <div className="flex justify-between items-center shadow p-5 w-100">
                <h1>Filter Timeline</h1>
                <div>dropdown</div>
            </div>


            <div className="space-y-6">
                
                {
                   all.map((call,idx) =><AllTimeline key={idx} call={call}></AllTimeline>)
                }

            </div>
        </div>
    );
};

export default TimeLinePage;