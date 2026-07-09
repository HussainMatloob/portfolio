"use client";

import { useEffect, useRef, useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { navLinks } from "./navLinks";
import MobileMenu from "./MobileMenu";


export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const isAutoScrolling = useRef(false);
    const targetSection = useRef("");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            if (isAutoScrolling.current) {
                const target = document.getElementById(targetSection.current);

                if (target && Math.abs(target.getBoundingClientRect().top) < 8) {
                    isAutoScrolling.current = false;
                }

                return;
            }

            const sections = document.querySelectorAll<HTMLElement>("section[id]");

            const scrollPosition = window.scrollY + 120;

            let current = "home";

            sections.forEach((section) => {
                if (
                    scrollPosition >= section.offsetTop &&
                    scrollPosition < section.offsetTop + section.offsetHeight
                ) {
                    current = section.id;
                }
            });

            setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header
                className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${scrolled
                    ? "border-b border-white/10 bg-[#030712]/80 backdrop-blur-xl"
                    : "bg-transparent"
                    }`}
            >
                <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

                    {/* Logo */}

                    <a
                        href="#home"
                        className="text-2xl font-bold tracking-wide"
                    >
                        Hussain
                        <span className="text-blue-500">.</span>
                    </a>

                    {/* Desktop Menu */}

                    <nav className="hidden items-center gap-3 lg:flex">

                        {navLinks.map((item) => {

                            const active =
                                activeSection ===
                                item.href.replace("#", "");

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

                                    }}
                                    className={`
                                        rounded-full
                                        px-4
                                        py-2
                                        text-sm
                                        font-medium
                                        transition-all
                                        duration-300
                                        ${active
                                            ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                                            : "text-gray-300 hover:text-blue-400"
                                        }
                                    `}
                                >
                                    {item.title}
                                </a>
                            );

                        })}

                    </nav>

                    {/* Desktop Buttons */}

                    <div className="hidden items-center gap-3 lg:flex">

                        <a
                            href="/resume/MyResume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-xl border border-white/10 px-5 py-2 text-sm transition hover:border-blue-500"
                        >
                            Resume
                        </a>

                        <a
                            href="#contact"
                            onClick={(e) => {
                                e.preventDefault();

                                const id = "contact";

                                setActiveSection(id);

                                isAutoScrolling.current = true;
                                targetSection.current = id;

                                document.getElementById(id)?.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start",
                                });
                            }}
                            className="rounded-xl bg-blue-600 px-5 py-2 text-sm font-semibold transition hover:bg-blue-700"
                        >
                            Hire Me
                        </a>

                    </div>

                    {/* Mobile */}

                    <button
                        onClick={() => setMenuOpen(true)}
                        className="lg:hidden"
                    >
                        <HiOutlineMenuAlt3 size={30} />
                    </button>

                </div>
            </header>

            <MobileMenu
                open={menuOpen}
                onClose={() => setMenuOpen(false)}
                activeSection={activeSection}
                setActiveSection={setActiveSection}
                isAutoScrolling={isAutoScrolling}
                targetSection={targetSection}
            />
        </>
    );
}