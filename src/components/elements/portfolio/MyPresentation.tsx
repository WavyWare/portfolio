import Image from "next/image";
import {Link} from '@/i18n/navigation';
import {useTranslations} from "next-intl";
import {LuGithub, LuLinkedin, LuFileText} from "react-icons/lu";

export const MyPresentation = () => {
    const t = useTranslations('MyPresentation');
    return (
        <section className="w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12 py-12 md:py-20">
            <div className="flex flex-col items-center md:items-start justify-center flex-1 space-y-6 md:space-y-8 text-center md:text-left">
                <div className="space-y-3">
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground font-sans">
                        Jan Florek
                    </h1>
                    <h2 className="text-xl md:text-2xl font-medium text-blue-600 dark:text-blue-400 font-sans tracking-widest uppercase">
                        Web Developer
                    </h2>
                </div>
                <div className="text-lg md:text-xl leading-relaxed max-w-lg text-muted-foreground font-medium">
                    <p>{t("description")}</p>
                </div>
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2">
                    <a href="https://www.linkedin.com/in/jan-florek-76b4072ab/" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-border hover:bg-muted transition-colors text-sm font-medium shadow-sm">
                        <LuLinkedin className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                        LinkedIn
                    </a>
                    <a href="https://github.com/WavyWare" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-border hover:bg-muted transition-colors text-sm font-medium shadow-sm">
                        <LuGithub className="w-4 h-4" />
                        GitHub
                    </a>
                    <Link href="/cv" className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-foreground text-background hover:bg-foreground/90 transition-colors text-sm font-medium shadow-sm">
                        <LuFileText className="w-4 h-4" />
                        {t("showCv")}
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