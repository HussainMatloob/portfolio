"use client";

import {
    FaMobileAlt,
    FaCode,
    FaServer,
    FaGlobeAsia,
} from "react-icons/fa";

const cards = [
    {
        icon: <FaMobileAlt size={28} />,
        title: "Production Apps",
        value: "8+ Applications",
    },
    {
        icon: <FaCode size={28} />,
        title: "Experience",
        value: "2.5+ Years",
    },
    {
        icon: <FaServer size={28} />,
        title: "Backend APIs",
        value: "Laravel & MySQL",
    },
    {
        icon: <FaGlobeAsia size={28} />,
        title: "Availability",
        value: "Worldwide Remote",
    },
];

export default function AboutCards() {
    return (
        <div className="grid gap-6 sm:grid-cols-2">

            {cards.map((card) => (
                <div
                    key={card.title}
                    className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/40 hover:bg-blue-500/5"
                >

                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-400 transition-all duration-300 group-hover:bg-blue-500 group-hover:text-white">
                        {card.icon}
                    </div>

                    <h3 className="text-xl font-semibold text-white">
                        {card.title}
                    </h3>

                    <p className="mt-3 text-gray-400">
                        {card.value}
                    </p>

                </div>
            ))}

        </div>
    );
}