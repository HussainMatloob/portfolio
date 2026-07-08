import {
    FaCheckCircle
} from "react-icons/fa";

const points = [
    "Flutter Mobile Development",
    "Flutter Web Applications",
    "Firebase & Supabase",
    "REST API Integration",
    "App Deployment",
    "Long-term Support",
];

export default function ContactContent() {
    return (
        <div>

            <h3 className="text-3xl font-bold">
                Why Work With Me?
            </h3>

            <p className="mt-6 text-lg leading-8 text-gray-400">
                I develop production-ready Flutter applications with clean
                architecture, scalable code, and modern UI. My goal is to build
                reliable software that provides long-term value for your business.
            </p>

            <div className="mt-10 space-y-5">

                {points.map((item) => (
                    <div
                        key={item}
                        className="flex items-center gap-4"
                    >
                        <FaCheckCircle
                            className="text-blue-500"
                        />

                        <span className="text-gray-300">
                            {item}
                        </span>

                    </div>
                ))}

            </div>

        </div>
    );
}