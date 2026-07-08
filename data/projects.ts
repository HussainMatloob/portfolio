export type ProjectLink = {
    title: string;
    url: string;
    type: "website" | "playstore" | "apk";
};
export type Project = {
    id: number;
    featured: boolean;
    title: string;
    category: "Featured" | "Production App" | "Professional Contribution" | "Business Management SaaS";
    role: string;
    shortDescription: string;
    description?: string;
    technologies: string[];
    image: string;
    device: "web" | "mobile";
    screenshots: string[];
    links: ProjectLink[];
};


export const projects: Project[] = [
    {
        id: 1,

        featured: true,

        title: "Snooker Partner",
        device: "web",
        shortDescription:
            "Production-ready Flutter Web SaaS platform for snooker clubs, featuring table management, billing, memberships, employee management, inventory tracking, business reports, and daily operations.",

        description:
            "Snooker Partner is a production-ready business management platform built with Flutter Web specifically for snooker clubs. It streamlines daily operations through secure authentication, real-time table allocation and game tracking, membership management, employee attendance and salary management, inventory control, sales and expense tracking, and detailed profit & loss reporting. The platform also includes role-based access control, providing club owners and operators with a secure and efficient workflow.",

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
            "/images/projects/snooker/1.png",
            "/images/projects/snooker/2.png",
            "/images/projects/snooker/3.png"
        ],

        links: [
            {
                title: "Live Website",
                type: "website",
                url: "https://www.snookerpartner.com"
            }
        ],



        category: "Business Management SaaS"
    },
    {
        id: 2,

        featured: false,
        device: "mobile",
        title: "SafeTap",

        category: "Production App",

        role: "Founder • Flutter Developer",

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

        links: [
            {
                title: "Play Store",
                type: "playstore",
                url: "https://play.google.com/store/apps/details?id=com.safetap.secure",
            }
        ],



    },

    {
        id: 3,

        featured: false,
        device: "mobile",
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
            "/images/projects/storageCleaner/1.png",
            "/images/projects/storageCleaner/2.png",
            "/images/projects/storageCleaner/3.png"
        ],
        links: [
            {
                title: "Play Store",
                type: "playstore",
                url: "https://play.google.com/store/apps/details?id=com.hmtech.filescanner",
            }
        ],






    },
    {
        id: 4,

        featured: false,
        device: "mobile",
        title: "Love Connection",

        category: "Production App",

        role: "Flutter Developer",

        shortDescription:
            "A modern marriage matchmaking platform that helps users discover compatible profiles, send connection requests, and build meaningful relationships through a secure and intuitive experience.",

        technologies: [
            "Flutter",
            "GetX",
            "REST API",
            "Authentication"
        ],

        image: "/images/projects/loveconnection/1.png",

        screenshots: [
            "/images/projects/loveconnection/1.png",
            "/images/projects/loveconnection/2.png",
            "/images/projects/loveconnection/3.png"
        ],
        links: [
            {
                title: "Play Store",
                type: "playstore",
                url: "https://play.google.com/store/apps/details?id=com.loveconnection.app",

            }
        ],





    },
    {
        id: 5,

        featured: false,
        device: "mobile",
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
            "/images/projects/groundSystem/6.png",
            "/images/projects/groundSystem/10.png"
        ],

        links: [
            {
                title: "User App",
                type: "playstore",
                url: "https://play.google.com/store/apps/details?id=com.techanion.groundbooking"
            },
            {
                title: "Partner App",
                type: "playstore",
                url: "https://play.google.com/store/apps/details?id=com.techanion.bookingpartner"
            }
        ],


    },
    {
        id: 6,

        featured: false,
        device: "mobile",
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
            "/images/projects/wedPlane360/5.png"
        ],


        links: [
            {
                title: "Download APK",
                type: "apk",
                url: "https://drive.google.com/file/d/1i30Fs1av_E-cPNxZVkhyPm6-oiOEuv9L/view?usp=sharing",
            }
        ],



    },
    {
        id: 7,

        featured: false,
        device: "mobile",
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
            "/images/projects/gfcmTrading/2.png",
            "/images/projects/gfcmTrading/11.png",
            "/images/projects/gfcmTrading/3.png"
        ],


        links: [
            {
                title: "Download APK",
                type: "apk",
                url: "https://drive.google.com/file/d/1KV40ru5GXeZignP5WD18KAbXdUDvTBgR/view?usp=sharing",
            }
        ],



    },
    {
        id: 8,

        featured: false,
        device: "mobile",
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
            "/images/projects/eSquadify/5.png",
            "/images/projects/eSquadify/2.png"
        ],




        links: [
            {
                title: "Download APK",
                type: "apk",
                url: "https://drive.google.com/file/d/1Xn4LLW8m-3vvoBDUtpJqvjeqtFqbL9Qe/view?usp=sharing",
            }
        ],


    },
    {
        id: 9,

        featured: false,
        device: "mobile",
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
            "/images/projects/foodApp/1.png",
            "/images/projects/foodApp/4.png",
            "/images/projects/foodApp/3.png"
        ],





        links: [
            {
                title: "Customer App",
                type: "apk",
                url: "https://drive.google.com/file/d/1gUUIP39iQqkiwSdbznwm6bKgctVtoAjU/view?usp=sharing"
            },
            {
                title: "Delivery Rider",
                type: "apk",
                url: "https://drive.google.com/file/d/1N1ZD6Q85PWiHspFY1xjetrMVvJaM4FV4/view?usp=sharing"
            }
        ],


    },
];