import React from 'react';
import Image from 'next/image';
import {useTranslations} from "next-intl";

export interface TimelineEntry {
    title: string;
    subtitle: string;
    date: string;
    description: string[];
    image?: string;
}

interface TimelineProps {
    data: TimelineEntry[];
    title: string;
}

export function Timeline({ data, title }: TimelineProps) {
    const t = useTranslations("Timelines")
    if (!data || data.length === 0) return null;

    return (
        <section className="w-full py-8 space-y-6">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-foreground font-sans">
                {title}
            </h2>
            <div className="relative border-l border-border/80 ml-2 md:ml-3 mt-6">
                {data.map((item, idx) => (
                    <div key={idx} className="relative pl-6 md:pl-10 group pb-10 last:pb-0">
                        <div className="absolute w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full left-[-4.5px] top-2 shadow-[0_0_0_4px_var(--background)]" />
                        <div className="pt-0.5">
                            <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 tracking-widest uppercase mb-2 block">
                                {item.date}
                            </span>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-3">
                                {item.image && (
                                    <div className="shrink-0 bg-transparent border border-border/40 p-1 rounded-lg">
                                        <Image src={item.image} alt={item.title} width={36} height={36} className="rounded-md object-contain" />
                                    </div>
                                )}
                                <div>
                                    <h3 className="text-xl md:text-2xl font-bold tracking-tight text-foreground leading-snug">{item.title}</h3>
                                    <h4 className="text-sm md:text-base font-sans text-muted-foreground italic mt-0.5">{item.subtitle}</h4>
                                </div>
                            </div>
                            <ul className="space-y-1.5 text-muted-foreground text-sm md:text-base pl-5 list-disc mt-3 marker:text-muted-foreground/50">
                                {item.description.map((desc, i) => (
                                    <li key={i} className="leading-relaxed pl-1">
                                        {t(desc)}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
