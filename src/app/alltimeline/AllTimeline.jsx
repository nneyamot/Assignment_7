import { BsCameraReelsFill } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import { MdTextsms } from "react-icons/md";

const AllTimeline = ({ call }) => {
    const { nameOfFriend, type, next_due_date } = call;
  
    let icons='';
    if(type.toLowerCase().trim()==='call'){
        icons=<FiPhoneCall />;
    }
    else if(type.toLowerCase().trim()==='text'){
        icons=<MdTextsms />

    }
    else{
        icons=<BsCameraReelsFill />

    }
    


    return (
        <div className="p-5 flex items-center gap-3 shadow ">
            {
                icons
            }
            <div>
                <h1> <span className="text-xl font-bold">{type}</span> with {nameOfFriend}</h1>
                <p>{next_due_date}</p>
            </div>


        </div>
    );
};

export default AllTimeline;