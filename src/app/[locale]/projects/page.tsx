import { Projects } from "@/components/elements/portfolio/Projects";

import {projectsData} from "@/app/[locale]/projectsData";
import {useTranslations} from "next-intl";

export default function ProjectsPage() {
    const t = useTranslations("Projects")
    return (
        <div className="w-full flex flex-col pt-12 mb-20">
            <Projects data={projectsData} title={t("allProjects")} />
        </div>
    );
}
