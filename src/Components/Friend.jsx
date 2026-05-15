import Image from "next/image";
import Link from "next/link";

const Friend = ({ friend }) => {

    const { name, picture, tags, status,id } = friend;

    let statesColor = '';

    if (status.toLowerCase().trim() === "almost due") {
        statesColor = 'btn bg-[#EFAD44] text-white';
    }
    else if (status.toLowerCase().trim() === 'overdue') {
        statesColor = "btn bg-[#EF4444] text-white";
    }
    else {
        statesColor = "btn bg-[#244D3F] text-white";
    }
// {`/showId/${id}`}
    return (
        <Link href={`/home/${friend.id}`}>
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
                <h1 className="text-[#64748B]">62d ago</h1>
                <button className="btn bg-[#CBFADB]">{tags[0]}</button> <br />

                {/* `btn bg-[#EFAD44] text-white` */}
                <button className={statesColor}>{status}</button>


            </div>
        </Link >

    );
};

export default Friend;