import { Experience } from "@/data/experience";
import { FaCheck } from "react-icons/fa";

type Props = {
    experience: Experience;
    index: number;
};

export default function ExperienceCard({
    experience,
    index,
}: Props) {
    return (
        <div
            className={`
                relative flex
                ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"}
            `}
        >
            {/* Timeline Dot */}

            <div
                className="
                    absolute
                    left-4
                    top-12
                    z-20
                    h-5
                    w-5
                    -translate-x-1/2
                    rounded-full
                    border-4
                    border-[#030712]
                    bg-blue-500
                    transition-all
                    duration-300
                    hover:scale-125
                    md:left-1/2
                "
            />

            {/* Card */}

            <div
                className="
                    ml-12
                    w-full
                    rounded-3xl
                    border
                    border-white/10
                    bg-white/5
                    p-8
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    hover:-translate-y-2
                    hover:border-blue-500/40
                    hover:shadow-[0_20px_60px_rgba(59,130,246,0.15)]
                    md:ml-0
                    md:w-[45%]
                "
            >
                {/* Number */}

                <div className="text-5xl font-black text-white/5">
                    {String(index + 1).padStart(2, "0")}
                </div>

                {/* Position */}

                <h3 className="mt-2 text-2xl font-bold">
                    {experience.position}
                </h3>

                {/* Company */}

                <p className="mt-2 text-lg font-semibold text-blue-400">
                    {experience.company}
                </p>

                {/* Duration */}

                <p className="mt-2 text-sm tracking-wide text-gray-500">
                    {experience.duration}
                </p>

                {/* Divider */}

                <div className="my-6 h-px bg-white/10" />

                {/* Description */}

                <p className="leading-8 text-gray-400">
                    {experience.description}
                </p>

                {/* Achievements */}

                <div className="mt-8 space-y-4">

                    <h4 className="font-semibold text-white">
                        Key Contributions
                    </h4>

                    {experience.achievements.map((item) => (
                        <div
                            key={item}
                            className="flex items-start gap-3"
                        >
                            <div
                                className="
                                    mt-1
                                    flex
                                    h-6
                                    w-6
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-blue-500/15
                                "
                            >
                                <FaCheck
                                    size={10}
                                    className="text-blue-400"
                                />
                            </div>

                            <p className="flex-1 text-gray-300">
                                {item}
                            </p>

                        </div>
                    ))}

                </div>

            </div>

        </div>
    );
}