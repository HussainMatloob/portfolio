"use client";

import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

export default function Hero() {
    return (
        <section
            id="home"
            className="relative mx-auto flex min-h-[100svh] max-w-7xl items-center px-6 pt-24"
        >
            <div className="grid w-full items-center gap-12 lg:gap-16 lg:grid-cols-2">

                <HeroContent />

                <HeroImage />

            </div>
        </section>
    );
}