"use client";

import { friendContext } from "@/app/context/FriendProvider";
import { useContext } from "react";
import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    Tooltip,
    Legend,
} from "recharts";



const COLORS = ["#7C3AED", "#14532D", "#22C55E"];


const Chart = () => {

    const {calls,text,video}=useContext(friendContext);
   
    const data = [
    { name: "Text", value: text.length },
    { name: "Call", value: calls.length },
    { name: "Video", value: video.length },
];

    return (
        <div className="w-[320px] h-[320px]">
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={data}
                        innerRadius={70}
                        outerRadius={100}
                        paddingAngle={5}
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell
                                key={index}
                                fill={COLORS[index]}
                            />
                        ))}
                    </Pie>

                    <Tooltip />

                    <Legend
                        verticalAlign="bottom"
                        align="center"
                    />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Chart;