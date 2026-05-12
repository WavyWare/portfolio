import Image from "next/image";
import {useTranslations} from "next-intl";
import {getPageMetadata, ParamsProps} from "@/metadata";
import type {Metadata} from "next";

export async function generateMetadata({params}: ParamsProps): Promise<Metadata> {
    const {locale} = await params;

    return getPageMetadata({namespace: "about", locale, pathName: "/about-me"});
}

export default function AboutMePage() {
    const t = useTranslations("AboutMe");
    return (
        <div className="w-full flex justify-center pt-12 md:pt-20 mb-20 px-4">
            <section className="flex flex-col md:flex-row items-center gap-12 md:gap-16 max-w-5xl">
                <div className="flex-1 space-y-6">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground font-serif">
                        {t("title")}
                    </h1>
                    <div className="w-16 h-px bg-border"></div>
                    <div className="text-base md:text-lg text-muted-foreground leading-relaxed space-y-5 font-medium">
                        {t("description").split("\n").map(
                            (line, i) => (
                                <p key={i}>
                                    {line}
                                </p>
                            ))
                        }
                    </div>
                </div>
                <div className="flex-1 flex justify-center w-full">
                    <div className="relative p-2 w-full max-w-87.5">
                        <Image 
                            src="/example.png" 
                            width={350} 
                            height={450} 
                            alt="O mnie" 
                            className="w-full object-cover grayscale hover:grayscale-0 rounded-none border border-border/60 shadow-md transition-all duration-700 aspect-3/4"
                            priority
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}
