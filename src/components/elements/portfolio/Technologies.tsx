import React, { JSX } from 'react';

export interface TechEntry {
    title: string;
    icon: JSX.Element;
}

interface TechnologiesProps {
    data: TechEntry[],
    title: string,
}

export function Technologies({ data, title }: TechnologiesProps) {
    if (!data || data.length === 0) return null;

    return (
        <section className="w-full py-12 space-y-2">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-foreground font-serif">
                {title}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-0 border-t border-l border-border mt-4">
                {data.map((tech, idx) => (
                    <div 
                        key={idx} 
                        className="group flex flex-col items-center justify-center p-8 border-b border-r border-border hover:bg-muted/30 transition-colors duration-200 cursor-default"
                    >
                        <div className="text-muted-foreground opacity-60 group-hover:opacity-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-all duration-300 mb-4 scale-110">
                            {tech.icon}
                        </div>
                        <span className="font-medium text-xs uppercase tracking-widest text-center text-foreground/80 group-hover:text-foreground transition-colors duration-300">
                            {tech.title}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}
