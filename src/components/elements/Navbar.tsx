"use client";

import React, { JSX } from "react";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import LanguageToggle from "@/components/ui/LanguageToggle";
import {GrOverview} from "react-icons/gr";
import {LuPresentation} from "react-icons/lu";
import {IoMdContacts, IoMdInformationCircleOutline} from "react-icons/io";
import {TbFileCv} from "react-icons/tb";

function Navbar() {
    const t = useTranslations("Navbar");
    const pathname = usePathname();

    interface NavElem {
        href: string;
        title: string;
        icon: JSX.Element;
    }

    const navElements: NavElem[] = [
        { href: "/", title: "Portfolio", icon: <GrOverview className="w-4 h-4 shrink-0" /> },
        { href: "/projects", title: t("projects"), icon: <LuPresentation className="w-4 h-4 shrink-0" /> },
        { href: "/about-me", title: t("aboutMe"), icon: <IoMdInformationCircleOutline className="w-4 h-4 shrink-0" /> },
        { href: "/cv", title: "CV", icon: <TbFileCv className="w-4 h-4 shrink-0" /> },
        { href: "/contact", title: t("contact"), icon: <IoMdContacts className="w-4 h-4 shrink-0" /> }
    ];

    return (
        <div className="w-full flex justify-center py-6 z-50 px-4">
            <nav className="flex flex-col sm:flex-row items-center gap-4 bg-background/90 backdrop-blur-md rounded-3xl sm:rounded-full border shadow-sm px-4 py-2 sm:py-1 max-w-4xl w-full sm:w-auto">
                <ul className="flex flex-wrap justify-center items-center gap-1 sm:gap-2">
                    {navElements.map((navElem, key) => {
                        const isActive = pathname === navElem.href;

                        return (
                            <li key={key} className="shrink-0">
                                <Link
                                    href={navElem.href}
                                    aria-current={isActive ? "page" : undefined}
                                    className={cn(
                                        "flex items-center gap-1.5 md:gap-2 rounded-full transition-all duration-200 px-3 md:px-4 py-2 text-sm font-medium",
                                        isActive
                                            ? "bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300"
                                            : "text-muted-foreground hover:bg-muted hover:text-foreground"
                                    )}
                                >
                                    {navElem.icon}
                                    <span>{navElem.title}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>

                <div className="hidden sm:block w-px h-6 bg-border mx-2" />
                <div className="flex sm:hidden w-full h-px bg-border my-1" />

                <LanguageToggle className={"rounded-full"}/>
            </nav>
        </div>
    );
}

export default Navbar;