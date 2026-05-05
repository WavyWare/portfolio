import { Projects } from "@/components/elements/portfolio/Projects";

import {projectsData} from "@/app/projectsData";

export default function ProjectsPage() {
    return (
        <div className="w-full flex flex-col pt-12 mb-20">
            <Projects data={projectsData} title="Wszystkie Projekty" />
        </div>
    );
}
