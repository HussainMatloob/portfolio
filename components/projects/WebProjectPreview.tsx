"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Props = {
    screenshots: string[];
    title: string;
};

export default function WebProjectPreview({
    screenshots,
    title,
}: Props) {

    const [current, setCurrent] = useState(0);

    useEffect(() => {

        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % screenshots.length);
        }, 3000);

        return () => clearInterval(timer);

    }, [screenshots.length]);

    return (
        <div
            className="
        flex
        w-full
        justify-center
        p-2
        sm:p-4
        lg:p-6
    "
        >
            {/* Browser */}

            <div
                className="
        relative
        flex
        w-full
        max-w-[700px]
        flex-col
        overflow-hidden
        rounded-2xl
        border
        border-white/10
        bg-[#0B1220]
        shadow-[0_20px_60px_rgba(0,0,0,0.4)]
        h-[220px]
        sm:h-[320px]
        md:h-[420px]
        lg:h-[500px]
    "
            >

                {/* Browser Header */}

                <div
                    className="
                    flex
                    items-center
                    justify-between
                    border-b
                    border-white/10
                    px-5
                    py-3"
                >
                    <div className="flex gap-2">
                        <div className="h-3 w-3 rounded-full bg-red-400" />
                        <div className="h-3 w-3 rounded-full bg-yellow-400" />
                        <div className="h-3 w-3 rounded-full bg-green-400" />
                    </div>

                    <div className="max-w-[55%] truncate rounded-full bg-white/5 px-3 py-1 text-[10px] sm:px-5 sm:text-xs text-gray-400">
                        snookerpartner.com
                    </div>

                    <div className="w-10" />
                </div>

                {/* Screenshot */}

                <div className="relative h-[calc(100%-56px)]">
                    <Image
                        src={screenshots[current]}
                        alt={title}
                        fill
                        quality={100}
                        priority
                        unoptimized
                        className="object-contain"
                    />
                </div>

            </div>

        </div>
    );
}