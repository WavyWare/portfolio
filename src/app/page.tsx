import { MyPresentation } from "@/components/elements/portfolio/MyPresentation";
import { Timeline, TimelineEntry } from "@/components/elements/portfolio/Timeline";
import { Projects } from "@/components/elements/portfolio/Projects";
import { TechEntry, Technologies } from "@/components/elements/portfolio/Technologies";
import {Code2, Coffee, Database, GitBranch, Layout, Monitor, Server} from "lucide-react";
import { projectsData } from "@/app/projectsData";
import {
    SiArchlinux,
    SiGit,
    SiGodotengine,
    SiJavascript,
    SiNodedotjs,
    SiPostgresql,
    SiReact, SiShopify,
    SiTypescript, SiWoocommerce, SiWordpress, SiWordpressHex
} from "@icons-pack/react-simple-icons";

export default function Home() {
    const educationData: TimelineEntry[] = [
        {
            title: "Zespół Szkół im. ks. Stanisława Staszica w Tarnobrzegu",
            subtitle: "Technik programista",
            date: "2023 - Obecnie",
            image: "/zsgornik.webp",
            description: [
                "Rozwój umiejętności w zakresie tworzenia aplikacji webowych, desktopowych i mobilnych.",
                "Nauka baz danych, algorytmiki i struktur danych."
            ]
        }
    ];

    const experienceData: TimelineEntry[] = [
        {
            title: "Wasys.pl",
            subtitle: "Intern Web Developer",
            date: "kwiecień 2026 - Obecnie",
            image: "/wasys.png",
            description: [
                "Budowa portfolio",
                "Nauka Wordpressa i technologii e-commerce",
                "Nauka poprawnej komunikacji z klientem"
            ]
        }
    ];

    const competitionsData: TimelineEntry[] = [
        {
            title: "Hackaton Nasa Space Apps Challenge Stalowa Wola",
            subtitle: "Uczestnik",
            date: "Październik 2025",
            image: "/nasa.png",
            description: [
                "Budowa aplikacji dotyczącej egzoplanet, gdzie użytkownicy mogli dowiadywać się faktów na ich temat"
            ]
        },
        {
            title: "Hackaton Nasa Space Apps Challenge Stalowa Wola",
            subtitle: "#1 Zwycięsca",
            date: "Październik 2026",
            image: "/nasa.png",
            description: [
                "Stworzenie aplikacji pomagającej urbanistom optymalizować prace za pomocą zdjęć satelitarnych i analizie AI"
            ]
        },
        {
            title: "Techquest ZST Leżajsk 2026",
            subtitle: "#10 miejsce",
            date: "Marzec 2026",
            image: "/techquest.png",
            description: [
                "Stworzenie gry promocyjnej dla HSW przedstawiającej historie ich marki"
            ]
        }

    ];

    const techData: TechEntry[] = [
        { title: "React", icon: <SiReact color={"#61DAFB"} className="w-8 h-8" /> },
        { title: "TypeScript", icon: <SiTypescript color={"#3178C6s"} className="w-8 h-8" /> },
        { title: "Node.js", icon: <SiNodedotjs color={"#5FA04E"} className="w-8 h-8" /> },
        { title: "PostgreSQL", icon: <SiPostgresql color={"#4169E1"} className="w-8 h-8" /> },
        { title: "Git", icon: <SiGit color={"#F05032"} className="w-8 h-8" /> },
        { title: "Godot", icon: <SiGodotengine color={"#478CBF"} className="w-8 h-8" /> },
        { title: "Java", icon: <Coffee className="w-8 h-8" /> },
        { title: "Wordpress", icon: <SiWordpress color={"#21759B"} className="w-8 h-8" /> },
        { title: "WooCommerce", icon: <SiWoocommerce color={"#96588A"} className="w-8 h-8" /> },
        { title: "Shopify", icon: <SiShopify color={"#7AB55C"} className="w-8 h-8" /> },
        { title: "Linux", icon: <SiArchlinux color={"#1793D1"} className="w-8 h-8" /> },
    ];

    return (
        <div className="w-full flex flex-col gap-8 md:gap-16 mb-16">
            <MyPresentation />
            <Timeline data={educationData} title="Edukacja" />
            <Timeline data={experienceData} title="Doświadczenie" />
            <Timeline data={competitionsData} title="Konkursy" />
            <Projects data={projectsData} limit={2} title="Moje Projekty" />
            <Technologies data={techData} />
        </div>
    );
}
