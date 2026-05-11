import { MyPresentation } from "@/components/elements/portfolio/MyPresentation";
import { Timeline, TimelineEntry } from "@/components/elements/portfolio/Timeline";
import { Projects } from "@/components/elements/portfolio/Projects";
import { TechEntry, Technologies } from "@/components/elements/portfolio/Technologies";
import { projectsData } from "@/app/[locale]/projectsData";
import {
    SiArchlinux, SiDocker,
    SiGit,
    SiGodotengine,
    SiNodedotjs, SiPhp,
    SiPostgresql, SiPython,
    SiReact, SiShopify, SiTailwindcss,
    SiTypescript, SiWoocommerce, SiWordpress
} from "react-icons/si";
import {useTranslations} from "next-intl";
import {RiJavaLine} from "react-icons/ri";
const educationData: TimelineEntry[] = [
    {
        title: "Zespół Szkół im. ks. Stanisława Staszica w Tarnobrzegu",
        subtitle: "gornik_subtitle",
        date: "gornik_date",
        image: "/zsgornik.webp",
        description: [
            "gornik_desc1",
            "gornik_desc2"
        ]
    }
];
const experienceData: TimelineEntry[] = [
    {
        title: "Wasys.pl",
        subtitle: "Intern Web Developer",
        date: "wasys_date",
        image: "/wasys.png",
        description: [
            "wasys_desc1",
            "wasys_desc2",
            "wasys_desc3",
        ]
    }
];
const competitionsData: TimelineEntry[] = [
    {
        title: "Hackaton Nasa Space Apps Challenge Stalowa Wola",
        subtitle: "nasa_2025_subtitle",
        date: "nasa_2025_date",
        image: "/nasa.png",
        description: [
            "nasa_2025_desc1"
        ]
    },
    {
        title: "Hackaton Nasa Space Apps Challenge Stalowa Wola",
        subtitle: "nasa_2026_subtitle",
        date: "nasa_2026_date",
        image: "/nasa.png",
        description: ["nasa_2025_desc1"]
    },
    {
        title: "Techquest ZST Leżajsk 2026",
        subtitle: "techquest_2026_subtitle",
        date: "techquest_2026_date",
        image: "/techquest.png",
        description: ["techquest_2026_desc1"]
    }

];
const techData: TechEntry[] = [
    { title: "React", icon: <SiReact color={"#61DAFB"} className="w-8 h-8" /> },
    { title: "TypeScript", icon: <SiTypescript color={"#3178C6"} className="w-8 h-8" /> },
    { title: "Tailwind.css", icon: <SiTailwindcss color={"#06B6D4"} className="w-8 h-8" /> },
    { title: "Node.js", icon: <SiNodedotjs color={"#5FA04E"} className="w-8 h-8" /> },
    { title: "PostgreSQL", icon: <SiPostgresql color={"#4169E1"} className="w-8 h-8" /> },
    { title: "Git", icon: <SiGit color={"#F05032"} className="w-8 h-8" /> },
    { title: "Godot", icon: <SiGodotengine color={"#478CBF"} className="w-8 h-8" /> },
    { title: "Docker", icon: <SiDocker color={"#2496ED"} className="w-8 h-8" /> },
    { title: "Java", icon: <RiJavaLine className="w-8 h-8" /> },
    { title: "Wordpress", icon: <SiWordpress color={"#21759B"} className="w-8 h-8" /> },
    { title: "WooCommerce", icon: <SiWoocommerce color={"#96588A"} className="w-8 h-8" /> },
    { title: "Shopify", icon: <SiShopify color={"#7AB55C"} className="w-8 h-8" /> },
    { title: "Linux", icon: <SiArchlinux color={"#1793D1"} className="w-8 h-8" /> },
    { title: "PHP", icon: <SiPhp color={"#777BB4"} className="w-8 h-8" /> },
    { title: "Python", icon: <SiPython color={"#3776AB"} className="w-8 h-8" /> },
];

export default function Home() {
    const timelinesTranslation = useTranslations("Timelines");
    const t = useTranslations("MainPage");
    return (
        <div className="w-full flex flex-col gap-8 md:gap-16 mb-16">
            <MyPresentation />
            <Timeline data={educationData.map((i) => {
                return {
                    title: i.title,
                    subtitle: timelinesTranslation(i.subtitle),
                    date: timelinesTranslation(i.date),
                    description: i.description,
                    image: i.image,
                };
            })} title={t("education")} />
            <Timeline data={experienceData.map((i) => {
                return {
                    title: i.title,
                    subtitle: i.subtitle,
                    date: timelinesTranslation(i.date),
                    description: i.description,
                    image: i.image,
                };
            })} title={t("experience")} />
            <Timeline data={competitionsData.map((i) => {
                return {
                    title: i.title,
                    subtitle: timelinesTranslation(i.subtitle),
                    date: timelinesTranslation(i.date),
                    description: i.description,
                    image: i.image,
                };
            })} title="Konkursy" />
            <Projects data={projectsData} limit={2} title={t("projects")} />
            <Technologies data={techData} title={t("technologies")}/>
        </div>
    );
}
