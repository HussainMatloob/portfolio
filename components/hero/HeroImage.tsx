"use client";

import Image from "next/image";
import { personal } from "@/data/personal";
import FloatingCards from "./FloatingCards";

export default function HeroImage() {
    return (
        <div className="flex justify-center">

            <div className="relative flex h-[320px] w-[320px] items-center justify-center sm:h-[400px] sm:w-[400px] lg:h-[600px] lg:w-[650px]">

                {/* Glow */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/30 via-cyan-500/20 to-purple-500/30 blur-3xl"></div>

                <FloatingCards />

                {/* Ring */}
                <div className="relative flex h-[260px] w-[260px] items-center justify-center rounded-full border border-blue-500/20 bg-white/5 backdrop-blur-md sm:h-[340px] sm:w-[340px] lg:h-[500px] lg:w-[500px]">

                    <div className="relative h-[220px] w-[220px] overflow-hidden rounded-full border border-white/10 sm:h-[280px] sm:w-[280px] lg:h-[420px] lg:w-[420px]">

                        <Image
                            src="/images/profile.png"
                            alt={personal.name}
                            fill
                            priority
                            className="object-cover"
                        />

                    </div>

                </div>

            </div>

        </div>
    );
}