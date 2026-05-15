
const CollectionOfThings = () => {
    return (
        <div className="grid grid-cols-4 gap-3">
            <div className="text-center shadow-xl p-5 shadow-stone-400">
                <h1 className="text-3xl font-bold text-green-700 mb-3">10</h1>
                <p className="text-[#64748B]">Total Friends</p>
            </div>
            <div className="text-center shadow-xl p-5 shadow-stone-400">
                <h1 className="text-3xl font-bold text-green-700 mb-3">3</h1>
                <p className="text-[#64748B]">On Track</p>
            </div>
            <div className="text-center shadow-xl p-5 shadow-stone-400">
                <h1 className="text-3xl font-bold text-green-700 mb-3">6</h1>
                <p className="text-[#64748B]">Need Attention</p>
            </div>
            <div className="text-center shadow-xl p-5 shadow-stone-400">
                <h1 className="text-3xl font-bold text-green-700 mb-3">10</h1>
                <p className="text-[#64748B]">Interactions This Month</p>
            </div>

        </div>
    );
};

export default CollectionOfThings;