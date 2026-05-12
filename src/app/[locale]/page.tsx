import { MyPresentation } from "@/components/elements/portfolio/MyPresentation";
import { Timeline } from "@/components/elements/portfolio/Timeline";
import { Projects } from "@/components/elements/portfolio/Projects";
import { Technologies } from "@/components/elements/portfolio/Technologies";
import { projectsData } from "@/app/[locale]/projectsData";
import {useTranslations} from "next-intl";
import type { Metadata } from 'next'
import {baseUrl, getPageMetadata, ParamsProps} from "@/metadata";
import {competitionsData, educationData, experienceData, techData} from "./TimelineEntries";

export async function generateMetadata({params}: ParamsProps): Promise<Metadata> {
    const {locale} = await params;

    return getPageMetadata({namespace: "home", locale, pathName: "/", ogImageUrl: "main-og.png"});
}

export default function Home() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Jan Florek',
        jobTitle: 'Full-Stack Developer',
        url: baseUrl,
        sameAs: [
            'https://github.com/WavyWare',
            'https://www.linkedin.com/in/jan-florek-76b4072ab/',
        ],
        knowsAbout: ['React', 'Next.js', 'Node.js', 'TypeScript', 'Express', 'WordPress', 'WooCommerce', 'Linux', 'Docker', 'Java', 'Tailwind.css'],
    }
    const timelinesTranslation = useTranslations("Timelines");
    const t = useTranslations("MainPage");
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
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
        </>
    );
}
