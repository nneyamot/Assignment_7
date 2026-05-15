
// import friends from "/public/friends.json";

import Friend from "@/Components/Friend";


const YourFriends = async () => {
    const promiseFriend = await fetch('http://localhost:3000/friends.json')
    const friends = await promiseFriend.json();



    return (
        <div className="mt-15">
            <h1 className="text-5xl">Your friends</h1>
            <div className="grid grid-cols-3 gap-5 mt-7">
                {
                    friends.map(friend => <Friend key={friend.id} friend={friend}></Friend>)
                }
            </div>


        </div>
    );
};

export default YourFriends;