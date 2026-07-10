import ContactContent from "./ContactContent";
import ContactInfo from "./ContactInfo";

export default function Contact() {
    return (
        <section
            id="contact"
            className="mx-auto max-w-7xl px-5 pt-14 pb-8 sm:px-6 lg:pt-28 lg:pb-10"
        >
            <div className="mt-8 border-t border-white/10 pt-6">

                <span className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-500">
                    Contact
                </span>

                <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
                    Let's Build Something Great Together
                </h2>

                <p className="mt-6 max-w-3xl text-base leading-7 text-gray-400 sm:text-lg sm:leading-8">
                    Looking for a Full-Stack Flutter developer to build scalable mobile apps, Flutter Web applications, or secure backend APIs? Let's discuss your project and bring your ideas to life.
                </p>

            </div>

            <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-16">

                <ContactContent />

                <ContactInfo />

            </div>

            {/* Bottom */}

            <div className="mt-16 border-t border-white/10 pt-8">
                <div className="flex flex-col items-center gap-2 text-center text-sm text-gray-500 md:flex-row md:justify-between">
                    <p>© 2026 Hussain Matloob. All rights reserved.</p>

                    <p>Built with Next.js • React • TypeScript • Tailwind CSS</p>
                </div>
            </div>

        </section>
    );

}