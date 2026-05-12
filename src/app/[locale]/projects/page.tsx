import { Projects } from "@/components/elements/portfolio/Projects";
import {projectsData} from "@/app/[locale]/projectsData";
import {useTranslations} from "next-intl";
import type {Metadata} from "next";
import {getPageMetadata, ParamsProps} from "@/metadata";

export async function generateMetadata({params}: ParamsProps): Promise<Metadata> {
    const {locale} = await params;

    return getPageMetadata({namespace: "projects", locale});
}

export default function ProjectsPage() {
    const t = useTranslations("Projects")
    return (
        <div className="w-full flex flex-col pt-12 mb-20">
            <Projects data={projectsData} title={t("allProjects")} />
        </div>
    );
}
