import Chart from "@/Components/Chart";

const StatesPage = () => {
    return (
        <div className="space-y-10 mt-10">
            <h1 className="text-5xl font-extrabold ">Friendship Analytics</h1>
            <div className="shadow p-5 ">
                <h1 className="text-[#244D3F] text-xl ">By Interaction Type</h1>
                <div className="flex justify-center">
                <Chart></Chart>
                </div>
            </div>
        </div>
    );
};

export default StatesPage;