import FriendDetails from "@/Components/FriendDetails";
import Image from "next/image";
import { BiSolidPhoneCall } from "react-icons/bi";
import { BsArchiveFill } from "react-icons/bs";
import { FaVideo } from "react-icons/fa";
import { MdDeleteOutline, MdSnooze, MdTextsms } from "react-icons/md";

const ShowDetails = async ({ params }) => {
    const { showId } = await params;

    const promiseFriend = await fetch('http://localhost:3000/friends.json')
    const friends = await promiseFriend.json();

    const friendDetails = friends.find(friend => friend.id === parseInt(showId));


    return (
        <div>
            {
                <FriendDetails friendDetails={friendDetails}></FriendDetails>
            }
        </div>

    );
};

export default ShowDetails;