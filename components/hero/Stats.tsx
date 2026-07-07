"use client";

import CountUp from "react-countup";

const stats = [
    {
        number: 2.5,
        suffix: "+",
        title: "Years Experience",
    },
    {
        number: 10,
        suffix: "+",
        title: "Production Apps",
    },
    {
        number: 20,
        suffix: "+",
        title: "Technologies",
    },
];

export default function Stats() {
    return (
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8">

            {stats.map((item) => (
                <div key={item.title}>

                    <h2 className="text-4xl font-bold text-white">

                        <CountUp
                            end={item.number}
                            duration={3}
                            decimals={item.number % 1 ? 1 : 0}
                        />

                        {item.suffix}

                    </h2>

                    <p className="mt-2 text-gray-400">
                        {item.title}
                    </p>

                </div>
            ))}

        </div>
    );
}