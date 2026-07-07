import AboutContent from "./AboutContent";
import AboutCards from "./AboutCards";

export default function About() {
    return (
        <section
            id="about"
            className="mx-auto max-w-7xl px-6 py-24"
        >
            <div className="grid gap-16 lg:grid-cols-2">

                <AboutContent />

                <AboutCards />

            </div>
        </section>
    );
}