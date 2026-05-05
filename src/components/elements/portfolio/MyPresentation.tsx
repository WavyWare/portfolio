import Image from "next/image";
import Link from "next/link";
import { FileText, Mail } from "lucide-react";

const GithubIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.34 6-1.53 6-6.76a5.5 5.5 0 0 0-1.5-3.89 5 5 0 0 0-.15-3.83s-1.18-.38-3.9 1.47a13.38 13.38 0 0 0-7 0c-2.72-1.85-3.9-1.47-3.9-1.47a5 5 0 0 0-.15 3.83A5.5 5.5 0 0 0 3 8.35c0 5.22 3 6.42 6 6.76a4.8 4.8 0 0 0-1 3.24v4" />
    </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
    </svg>
);

export const MyPresentation = () => {
    return (
        <section className="w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12 py-12 md:py-20">
            <div className="flex flex-col items-center md:items-start justify-center flex-1 space-y-6 md:space-y-8 text-center md:text-left">
                <div className="space-y-3">
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground font-serif">
                        Jan Florek
                    </h1>
                    <h2 className="text-xl md:text-2xl font-medium text-blue-600 dark:text-blue-400 font-serif tracking-widest uppercase">
                        Web Developer
                    </h2>
                </div>
                <div className="text-lg md:text-xl leading-relaxed max-w-lg text-muted-foreground font-medium">
                    <p>Uczeń 3 klasy technikum programistycznego. Tworze front-end i back-end aplikacji webowych.</p>
                </div>
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2">
                    <a href="https://www.linkedin.com/in/jan-florek-76b4072ab/" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-border hover:bg-muted transition-colors text-sm font-medium shadow-sm">
                        <LinkedinIcon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                        LinkedIn
                    </a>
                    <a href="https://github.com/WavyWare" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-border hover:bg-muted transition-colors text-sm font-medium shadow-sm">
                        <GithubIcon className="w-4 h-4" />
                        GitHub
                    </a>
                    <Link href="/cv" className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-foreground text-background hover:bg-foreground/90 transition-colors text-sm font-medium shadow-sm">
                        <FileText className="w-4 h-4" />
                        Zobacz CV
                    </Link>
                </div>
            </div>
            <div className="flex-1 flex justify-center items-center w-full mb-8 md:mb-0">
                <div className="relative p-2">
                    <Image
                        src="/example.png"
                        className="relative rounded-2xl shadow-md object-cover grayscale hover:grayscale-0 transition-all duration-700 max-w-[260px] md:max-w-[350px] border border-border/50"
                        alt="Jan Florek photo"
                        width={350}
                        height={350}
                        priority
                    />
                </div>
            </div>
        </section>
    );
}