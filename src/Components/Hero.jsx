import { FiPlus } from "react-icons/fi";

const HeroPage = () => {
    return (
        <div className="text-center mt-12 mb-12 space-y-5">
            <h1 className="text-3xl font-bold text-[#1F2937]">Friends to keep close in your life</h1>
            <p className="text-[#64748B]">Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
                relationships that matter most.</p>
            <div className="flex justify-center items-center">
                <button className="btn flex justify-center  items-center gap-3 bg-green-900 text-white"><FiPlus />Add a Friend</button>

            </div>


        </div>
    );
};

export default HeroPage;