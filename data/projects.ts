export type Project = {
    id: number;

    featured: boolean;

    title: string;

    category:
    | "Featured"
    | "Production App"
    | "Professional Contribution"
    | "Business Management SaaS";

    role: string;

    shortDescription: string;

    description?: string;

    technologies: string[];

    image: string;

    screenshots: string[];

    website?: string;

    playStore?: string;

    apk?: string;

    github?: string;
};


export const projects: Project[] = [
    {
        id: 1,

        featured: true,

        title: "Snooker Partner",

        shortDescription:
            "A production-ready Flutter Web SaaS platform that helps snooker clubs manage tables, billing, memberships, employees, expenses, inventory, reports, and day-to-day operations.",

        description:
            "Snooker Partner is a complete business management platform developed with Flutter Web for snooker clubs. The system includes secure authentication, real-time table management, session tracking, billing, customer management, expense tracking, inventory management, reporting, employee management, and role-based access control. It is designed to replace manual workflows with an efficient, scalable, and easy-to-use digital solution.",

        role:
            "Founder • Full Stack Flutter Developer",

        technologies: [
            "Flutter Web",
            "Firebase",
            "GetX",
            "GoRouter",
            "Responsive Design"
        ],

        image: "/images/projects/snooker/1.JPG",

        screenshots: [
            "/images/projects/snooker/1.JPG",
            "/images/projects/snooker/2.JPG",
            "/images/projects/snooker/3.JPG"
        ],

        website: "https://snookerpartner.com",

        playStore: "",

        github: "",

        category: "Business Management SaaS"
    },
    {
        id: 2,

        featured: false,

        title: "SafeTap",

        category: "Production App",

        role: "Flutter Developer",

        shortDescription:
            "A personal safety application providing emergency alerts, live location sharing, and real-time notifications.",

        technologies: [
            "Flutter",
            "Bloc",
            "Supabase",
            "Firebase",
            "Google Maps",
            "FCM",
            "AdMob"
        ],

        image: "/images/projects/safeTap/1.png",

        screenshots: [
            "/images/projects/safeTap/1.png",
            "/images/projects/safeTap/2.png",
            "/images/projects/safeTap/3.png"
        ],

        playStore:
            "https://play.google.com/store/apps/details?id=com.safetap.secure",

        website: "",

        github: ""
    },

    {
        id: 3,

        featured: false,

        title: "Storage Cleaner",

        category: "Production App",

        role: "Founder • Flutter Developer",

        shortDescription:
            "A powerful storage management application that scans, analyzes, and removes unnecessary files to optimize device performance.",

        technologies: [
            "Flutter",
            "GetX",
            "File System",
            "Isolates",
            "AdMob"
        ],

        image: "/images/projects/storageCleaner/1.png",

        screenshots: [
            "/images/projects/storageCleaner/1.png"
        ],

        playStore:
            "https://play.google.com/store/apps/details?id=com.hmtech.filescanner",

        website: "",

        apk: "",

        github: ""
    },
    {
        id: 4,

        featured: false,

        title: "Love Connection",

        category: "Production App",

        role: "Flutter Developer",

        shortDescription:
            "A modern matchmaking platform that enables profile discovery, connection requests, and secure communication.",

        technologies: [
            "Flutter",
            "GetX",
            "REST API",
            "Authentication"
        ],

        image: "/images/projects/loveconnection/1.png",

        screenshots: [
            "/images/projects/loveconnection/1.png"
        ],

        playStore:
            "https://play.google.com/store/apps/details?id=com.loveconnection.app",

        website: "",

        apk: "",

        github: ""
    },
    {
        id: 5,

        featured: false,

        title: "Ground Booking System",

        category: "Professional Contribution",

        role: "Flutter Developer",

        shortDescription:
            "A complete sports facility booking platform featuring separate applications for customers and business partners.",

        technologies: [
            "Flutter",
            "Firebase",
            "GetX"
        ],

        image: "/images/projects/groundSystem/1.png",

        screenshots: [
            "/images/projects/groundSystem/1.png",
            "/images/projects/groundSystem/2.png",
            "/images/projects/groundSystem/3.png"
        ],

        playStore:
            "https://play.google.com/store/apps/details?id=com.techanion.groundbooking",

        website: "",

        apk: "",

        github: ""
    },
    {
        id: 6,

        featured: false,

        title: "WedPlan360",

        category: "Professional Contribution",

        role: "Flutter Developer",

        shortDescription:
            "A comprehensive wedding planning platform for managing events, budgets, vendors, and guest experiences.",

        technologies: [
            "Flutter",
            "GetX",
            "REST API",
            "Localization",
            "Push Notifications"
        ],

        image: "/images/projects/wedPlane360/1.png",

        screenshots: [
            "/images/projects/wedPlane360/1.png",
            "/images/projects/wedPlane360/2.png",
            "/images/projects/wedPlane360/3.png"
        ],

        playStore: "",

        website: "",

        apk:
            "https://drive.google.com/file/d/1i30Fs1av_E-cPNxZVkhyPm6-oiOEuv9L/view?usp=sharing",

        github: ""
    },
    {
        id: 7,

        featured: false,

        title: "GFCM Trading",

        category: "Professional Contribution",

        role: "Flutter Developer",

        shortDescription:
            "A real-time trading application featuring secure authentication, live market data, and interactive financial dashboards.",

        technologies: [
            "Flutter",
            "REST API",
            "WebSockets",
            "GetX"
        ],

        image: "/images/projects/gfcmTrading/1.png",

        screenshots: [
            "/images/projects/gfcmTrading/1.png",
            "/images/projects/gfcmTrading/2.png",
            "/images/projects/gfcmTrading/3.png"
        ],

        playStore: "",

        website: "",

        apk:
            "https://drive.google.com/file/d/1KV40ru5GXeZignP5WD18KAbXdUDvTBgR/view?usp=sharing",

        github: ""
    },
    {
        id: 8,

        featured: false,

        title: "eSquadifi",

        category: "Professional Contribution",

        role: "Flutter Developer",

        shortDescription:
            "A social gaming platform that connects players through communities, messaging, and interactive features.",

        technologies: [
            "Flutter",
            "Firebase",
            "GetX"
        ],

        image: "/images/projects/eSquadify/1.png",

        screenshots: [
            "/images/projects/eSquadify/1.png",
            "/images/projects/eSquadify/2.png",
            "/images/projects/eSquadify/3.png"
        ],

        playStore: "",

        website: "",

        apk:
            "https://drive.google.com/file/d/1Xn4LLW8m-3vvoBDUtpJqvjeqtFqbL9Qe/view?usp=sharing",

        github: ""
    },
    {
        id: 9,

        featured: false,

        title: "Food Delivery System",

        category: "Professional Contribution",

        role: "Flutter Developer",

        shortDescription:
            "A multi-role food ordering and delivery platform supporting customers, delivery riders, and administrators.",

        technologies: [
            "Flutter",
            "Firebase",
            "Google Maps",
            "GetX"
        ],

        image: "/images/projects/foodApp/1.JPG",

        screenshots: [
            "/images/projects/foodApp/1.JPG"
        ],

        playStore: "",

        website: "",

        apk:
            "https://drive.google.com/file/d/1gUUIP39iQqkiwSdbznwm6bKgctVtoAjU/view?usp=sharing",

        github: ""
    },
];