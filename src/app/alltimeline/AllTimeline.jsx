import { FiPhoneCall } from "react-icons/fi";

const AllTimeline = ({ call }) => {
    const { nameOfFriend, type, next_due_date } = call;
  
    


    return (
        <div className="p-5 flex items-center gap-3 shadow ">
            <FiPhoneCall />
            <div>
                <h1> <span className="text-xl font-bold">{type}</span> with {nameOfFriend}</h1>
                <p>{next_due_date}</p>
            </div>


        </div>
    );
};

export default AllTimeline;