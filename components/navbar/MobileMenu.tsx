"use client";

import { HiOutlineX } from "react-icons/hi";
import { navLinks } from "./navLinks";

type Props = {
    open: boolean;
    onClose: () => void;
    activeSection: string;
    setActiveSection: React.Dispatch<React.SetStateAction<string>>;
    isAutoScrolling: React.MutableRefObject<boolean>;
    targetSection: React.MutableRefObject<string>;
};

export default function MobileMenu({
    open,
    onClose,
    activeSection,
    setActiveSection,
    isAutoScrolling,
    targetSection,
}: Props) {

    return (

        <div
            className={`fixed inset-0 z-[60] transition-all duration-300 ${open
                ? "visible bg-black/60"
                : "invisible bg-black/0"
                }`}
        >

            {/* Drawer */}

            <div
                className={`absolute right-0 top-0 h-full w-72 bg-[#030712] p-8 transition-transform duration-300 ${open
                    ? "translate-x-0"
                    : "translate-x-full"
                    }`}
            >

                <div className="mb-12 flex items-center justify-between">

                    <h2 className="text-xl font-bold">
                        Menu
                    </h2>

                    <button onClick={onClose}>
                        <HiOutlineX size={30} />
                    </button>

                </div>

                <nav className="flex flex-col gap-6">

                    {navLinks.map((item) => {
                        const active = activeSection === item.href.replace("#", "");

                        return (
                            <a
                                key={item.title}
                                href={item.href}
                                onClick={(e) => {
                                    e.preventDefault();

                                    const id = item.href.replace("#", "");

                                    setActiveSection(id);

                                    isAutoScrolling.current = true;
                                    targetSection.current = id;

                                    document.getElementById(id)?.scrollIntoView({
                                        behavior: "smooth",
                                        block: "start",
                                    });

                                    onClose();
                                }}
                                className={`rounded-lg px-3 py-2 text-lg transition ${active
                                    ? "bg-blue-600 text-white"
                                    : "text-gray-300 hover:text-blue-400"
                                    }`}
                            >
                                {item.title}
                            </a>
                        );
                    })}

                </nav>

                <div className="mt-12 flex flex-col gap-4">

                    <a
                        href="/resume/MyResume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-xl border border-white/10 px-5 py-3 text-center"
                    >
                        Resume
                    </a>

                    <a
                        href="#contact"
                        onClick={(e) => {
                            e.preventDefault();

                            setActiveSection("contact");

                            isAutoScrolling.current = true;
                            targetSection.current = "contact";

                            document.getElementById("contact")?.scrollIntoView({
                                behavior: "smooth",
                                block: "start",
                            });

                            onClose();
                        }}
                        className="rounded-xl bg-blue-600 px-5 py-3 text-center font-semibold"
                    >
                        Hire Me
                    </a>

                </div>

            </div>

        </div>

    );
}