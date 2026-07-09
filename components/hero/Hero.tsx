"use client";

import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

export default function Hero() {
    return (
        <section
            id="home"
            className="relative mx-auto flex min-h-[100svh] max-w-7xl px-4 pt-24 sm:px-6 lg:px-8"
        >
            <div className="mx-auto grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
                <HeroContent />
                <HeroImage />
            </div>
        </section>
    );
}