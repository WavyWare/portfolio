import React from 'react';
import Image from 'next/image';
import {Link} from '@/i18n/navigation';
import { GitBranch, ExternalLink } from 'lucide-react';
import {useTranslations} from "next-intl";


export interface ProjectEntry {
    title: string;
    description: string;
    image: string;
    links?: {
        github?: string;
        demo?: string;
    }
}

interface ProjectsProps {
    data: ProjectEntry[];
    limit?: number;
    title: string;
}

export function Projects({ data, limit, title }: ProjectsProps) {
    const t = useTranslations("ProjectEntries");
    const projectsT = useTranslations("Projects")
    data = data.map((entry) => {
        return {
            title: t(entry.title),
            description: t(entry.description),
            image: entry.image,
            links: entry.links
        }
    })
    if (!data || data.length === 0) return null;
    const displayData = limit ? data.slice(0, limit) : data;

    return (
        <section className="w-full py-12 space-y-8">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-foreground font-serif border-b border-border pb-4">
                {title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-4">
                {displayData.map((project, idx) => (
                    <div key={idx} className="group flex flex-col gap-5">
                        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-border/80 bg-muted/20 shrink-0">
                            <Image 
                                src={project.image} 
                                alt={project.title} 
                                fill
                                sizes={"cover"}
                                className="object-cover transition-all duration-500 group-hover:scale-105"
                            />
                        </div>
                        <div className="flex flex-col flex-grow">
                            <div className="flex items-start justify-between gap-4 mb-3">
                                <h3 className="text-2xl font-bold tracking-tight font-serif leading-tight">{project.title}</h3>
                                {project.links && (
                                    <div className="flex gap-2 shrink-0 pt-1">
                                        {project.links.github && (
                                            <a href={project.links.github} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors p-1" title="GitHub">
                                                <GitBranch className="w-4 h-4" />
                                            </a>
                                        )}
                                        {project.links.demo && (
                                            <a href={project.links.demo} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors p-1" title="Live Demo">
                                                <ExternalLink className="w-4 h-4" />
                                            </a>
                                        )}
                                    </div>
                                )}
                            </div>
                            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                                {project.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            {limit && data.length > limit && (
                <div className="flex justify-center pt-10">
                    <Link href="/projects" className="px-6 py-2 rounded-full border border-border text-sm font-medium hover:bg-muted transition-colors">
                        {projectsT("showAll")}
                    </Link>
                </div>
            )}
        </section>
    );
}
