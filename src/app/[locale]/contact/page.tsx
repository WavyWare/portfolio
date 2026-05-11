import React from "react";
import {useTranslations} from "next-intl";
import {Link} from "@/i18n/navigation";
import {RiMailLine, RiTelegram2Line} from "react-icons/ri";
import {LuLinkedin} from "react-icons/lu";
import {RxDiscordLogo} from "react-icons/rx";

export default function ContactPage() {
    const t = useTranslations("Contact");
    return (
        <div className="w-full max-w-2xl mx-auto flex flex-col pt-12 md:pt-20 mb-20 px-4">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground font-serif mb-6 text-center">
                {t("title")}
            </h1>
            <div className="w-16 h-px bg-border mx-auto mb-10"></div>
            <p className="text-muted-foreground text-center mb-10 leading-relaxed text-base md:text-lg font-medium max-w-lg mx-auto">
                {t("cta")}
            </p>
            <div className="w-full border-t border-l border-border grid grid-cols-3">
                <Link href={"mailto:wavyware1@proton.me"} className="flex flex-col items-center gap-4 p-8 border-r border-b border-border bg-transparent hover:bg-muted/10 transition-colors col-span-3">
                    <RiMailLine className="w-6 h-6 text-muted-foreground/60" color={"#66f"} />
                    <span className="text-base font-semibold tracking-wide">wavyware1@proton.me</span>
                </Link>
                <Link href={"https://t.me/wavyware"} className="flex flex-col items-center gap-4 p-8 border-r border-b border-border bg-transparent hover:bg-muted/10 transition-colors">
                    <RiTelegram2Line className="w-6 h-6 text-muted-foreground/60" color={"#26A5E4"}/>
                    <span className="text-base font-semibold tracking-wide">@wavyware</span>
                </Link>
                <Link href={"https://www.linkedin.com/in/jan-florek-76b4072ab/"} className="flex flex-col items-center gap-4 p-8 border-r border-b border-border bg-transparent hover:bg-muted/10 transition-colors">
                    <LuLinkedin className="w-6 h-6 text-muted-foreground/60" color={"#0077B5"}/>
                    <span className="text-base font-semibold tracking-wide">Jan Florek</span>
                </Link>
                <Link href={"https://discordapp.com/users/560419681073233924"} className="flex flex-col items-center gap-4 p-8 border-r border-b border-border bg-transparent hover:bg-muted/10 transition-colors">
                    <RxDiscordLogo className="w-6 h-6 text-muted-foreground/60" color={"#5865F2"}/>
                    <span className="text-base font-semibold tracking-wide">@wavyware</span>
                </Link>
            </div>
            <div className="mt-12 text-center text-xs text-muted-foreground font-medium uppercase tracking-widest">
                {t("responseTime")}
            </div>
        </div>
    );
}
