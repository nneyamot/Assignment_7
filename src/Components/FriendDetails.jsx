'use client'
import { friendContext } from "@/app/context/FriendProvider";
import Image from "next/image";
import { useContext } from "react";
import { BiSolidPhoneCall } from "react-icons/bi";
import { BsArchiveFill } from "react-icons/bs";
import { FaVideo } from "react-icons/fa";
import { MdDeleteOutline, MdSnooze, MdTextsms } from "react-icons/md";

const FriendDetails = ({ friendDetails }) => {
    const { name, picture, status, tags, email, days_since_contact, bio, next_due_date } = friendDetails;

    const { calls, setCalls, text, setText, video, setVideo, all, setAll  } = useContext(friendContext);


    //    handle calls function 

    const handleCalls = () => {
        const meetingType = {
            'type': 'call',
            'nameOfFriend': name,
            'next_due_date': next_due_date,
        }
        setCalls([...calls, meetingType])
        setAll([...calls,meetingType])
    }

    // console.log(calls)

    // handle text function 

    const handleText = () => {
        const meetingType = {
            'type': 'text',
            'nameOfFriend': name,
            'next_due_date': next_due_date,
        }
        setText([...text, meetingType]);
        setAll([...text,meetingType])
    }
    // console.log(text);

    // handle video function 

    const handleVideo = () => {
        const meetingType = {
            'type': 'video',
            'nameOfFriend': name,
            'next_due_date': next_due_date,
        }
        setVideo([...video, meetingType])
        setAll([...text,meetingType])
    }

    return (
        <div className="grid grid-cols-2 gap-6  m-10 shadow-2xl p-5">
            {/* left side div  */}

            <div className="grid grid-cols-1 space-y-3">
                <div className="shadow-2xl   text-center space-y-3 p-6">

                    <div className="flex justify-center items-center">
                        <Image
                            width='100'
                            height='100'
                            src={picture}
                            alt='picture'
                            className="rounded-full"

                        ></Image>
                    </div>
                    <h1 className="text-xl font-bold">{name}</h1>
                    <button className="btn bg-[#CBFADB]">{tags[0]}</button> <br />

                    {/* `btn bg-[#EFAD44] text-white` */}
                    <button >{status}</button>
                    <p>{bio}</p>
                    <p>Preferred:{email}</p>

                </div>
                <button className="btn"> <MdSnooze />
                    Snooze 2 Weeks</button>
                <button className="btn"><BsArchiveFill />
                    Archive</button>
                <button className="btn text-red-500"><MdDeleteOutline />
                    Delete</button>


            </div>

            {/* right side div  */}

            <div className="space-y-5 shadow-2xl p-10 grid grid-cols-1">
                {/* 1xt 3div  */}
                <div className="grid grid-cols-3 gap-3 text-[#64748B]">
                    <div className="shadow-2xl p-2 text-center">
                        <h1 className="text-[#244D3F] text-xl font-bold">62</h1>
                        <p>Days Since Contact</p>
                    </div>
                    <div className="shadow-2xl p-2 text-center">
                        <h1 className="text-[#244D3F] text-xl font-bold"> 30</h1>
                        <p>Goal (Days)</p>
                    </div>
                    <div className="shadow-2xl p-2 text-center">
                        <h1 className="text-[#244D3F] text-xl font-bold">Feb 27, 2026</h1>
                        <p> Next Due</p>
                    </div>
                </div>
                {/* 2nd div  */}
                <div className="shadow-2xl p-5 space-y-3">
                    <div className="flex justify-between items-center">
                        <h3 className="text-[#244D3F] font-bold text-xl">Relationship Goal</h3>
                        <button className="btn">Edit</button>

                    </div>
                    <p>Connect every <span className="font-bold text-xl text-[#244D3F]"> 30 days</span></p>
                </div>
                {/* 3rd div  */}
                <div className=" space-y-3 shadow-2xl p-5">
                    <h1 className="text-2xl font-bold text-[#244D3F]">Quick Check-In</h1>
                    <div className="flex justify-between items-center">
                        <div className="text-center space-y-3 shadow p-3">
                            <div className="flex justify-center items-center">
                                <BiSolidPhoneCall />
                            </div>
                            <button onClick={handleCalls} className="btn">Call</button>
                        </div>
                        <div className="text-center space-y-3 shadow p-3">
                            <div className="flex justify-center items-center">
                                <MdTextsms />
                            </div>
                            <button onClick={handleText} className="btn">Text</button>
                        </div>

                        <div className=" text-center space-y-3 shadow p-3">

                            <div className="flex justify-center items-center">
                                <FaVideo />
                            </div>
                            <button onClick={handleVideo} className="btn ">Video</button>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default FriendDetails;