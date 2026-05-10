"use client";
import { useTimeline } from "@/context/TimelineContext";
import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";


const COLORS = {
    Text: "#7C3AED",
    Call: "#1B4332",
    Video: "#22C55E"
};

function CustomLegend({ payload }) {
    return (
        <div className="flex items-center justify-center gap-5 mt-4">
            {payload.map((entry) => (
                <div key={entry.value} className="flex items-center gap-1.5">
                    <span
                        className="w-2.5 h-2.5 rounded-full inline-block"
                        style={{ backgroundColor: entry.color }}
                    />
                    <span className="text-xs text-gray-600">{entry.value}</span>
                </div>
            ))}
        </div>
    );
}


function CustomTooltip({ active, payload }) {
    if (active && payload && payload.length) {
        const { name, value } = payload[0];
        return (
            <div className="bg-white border border-gray-200 rounded-lg px-3 py-2 shadow-md text-xs">
                <p className="font-semibold text-gray-700">{name}</p>
                <p className="text-gray-500">{value} interaction{value !== 1 ? "s" : ""}</p>
            </div>
        );
    }
    return null;
}

export default function StatsPage() {
    const { entries } = useTimeline();


    const counts = { Call: 0, Text: 0, Video: 0 };
    entries.forEach((e) => {
        if (counts[e.type] !== undefined) counts[e.type]++;
    });

    const chartData = Object.entries(counts)
        .filter(([, value]) => value > 0)
        .map(([name, value]) => ({ name, value }));

    const total = entries.length;

    return (
        <div className="min-h-screen bg-gray-50 px-4 sm:px-8 py-8">
            <div className="max-w-2xl mx-auto">

                {/* ── heading ── */}
                <h1 className="text-4xl font-bold text-gray-900 mb-1">
                    Friendship Analytics
                </h1>
    
                <div className="w-8 h-0.5 bg-pink-400 mb-6" />

               <div className="bg-white rounded-2xl border border-gray-100 shadow-sm px-6 pt-5 pb-6">

                    <p className="text-lg font-bold text-gray-900 mb-4">By Interaction Type</p>

                    {total === 0 ? (
                        /* empty state */
                        <div className="flex flex-col items-center justify-center py-16 text-center">
                            <div className="w-32 h-32 rounded-full border-8 border-gray-100 mb-4" />
                            <p className="text-gray-400 text-sm">No interactions yet.</p>
                            <p className="text-gray-300 text-xs mt-1">
                                Log a Call, Text or Video on a friend&apos;s page to see your chart.
                            </p>
                        </div>
                    ) : (
                        <ResponsiveContainer width="100%" height={300}>
                            <PieChart>
                                <Pie
                                    data={chartData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={80}  
                                    outerRadius={120}
                                    paddingAngle={4}
                                    dataKey="value"
                                    stroke="none"
                                >
                                    {chartData.map((entry) => (
                                        <Cell
                                            key={entry.name}
                                            fill={COLORS[entry.name] ?? "#94a3b8"}
                                        />
                                    ))}
                                </Pie>
                                <Tooltip content={<CustomTooltip />} />
                                <Legend content={<CustomLegend />} />
                            </PieChart>
                        </ResponsiveContainer>
                    )}

                </div>
            </div>
        </div>
    );
}