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
    min-h-[560px]
    items-center
    justify-center
    bg-gradient-to-br
    from-[#0F172A]
    via-[#111827]
    to-[#1E293B]
    p-8"
        >
            {/* Browser */}

            <div
                className="
    relative
    flex
    h-[520px]
    w-full
    max-w-5xl
    flex-col
    overflow-hidden
    rounded-2xl
    border
    border-white/10
    bg-[#0B1220]
    shadow-[0_40px_120px_rgba(0,0,0,0.5)]"
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

                    <div className="rounded-full bg-white/5 px-5 py-1 text-xs text-gray-400">
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