import { experiences } from "@/data/experience";
import ExperienceCard from "./ExperienceCard";

export default function ExperienceTimeline() {
    return (
        <div className="relative mx-auto mt-20 max-w-6xl">

            {/* Timeline */}

            <div
                className="
                    absolute
                    left-4
                    top-0
                    h-full
                    w-[2px]
                    bg-gradient-to-b
                    from-blue-500
                    via-white/10
                    to-blue-500
                    md:left-1/2
                    md:-translate-x-1/2
                "
            />

            <div className="space-y-16">

                {experiences.map((experience, index) => (
                    <ExperienceCard
                        key={experience.company}
                        experience={experience}
                        index={index}
                    />
                ))}

            </div>

        </div>
    );
}