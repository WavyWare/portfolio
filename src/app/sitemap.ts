import { MetadataRoute } from 'next'
import {baseUrl} from "@/metadata";
import {routing} from "@/i18n/routing"

const locales = routing.locales;

const pages = [
    { pl: '/', en: '/en' },
    { pl: '/about-me', en: '/en/about-me' },
    { pl: '/projects', en: '/en/projects' },
    { pl: '/cv', en: '/en/cv' },
    { pl: '/contacts', en: '/en/contact' },
]

export default function sitemap(): MetadataRoute.Sitemap {
    const entries: MetadataRoute.Sitemap = []

    for (const page of pages) {
        for (const locale of locales) {
            const slug = page[locale]
            entries.push({
                url: `${baseUrl}/${locale}${slug === '/' ? '' : slug}`,
                lastModified: new Date(),
                changeFrequency: 'monthly',
                priority: slug === '/' ? 1 : 0.8,
                alternates: {
                    languages: {
                        pl: `${baseUrl}/pl${page.pl === '/' ? '' : page.pl}`,
                        en: `${baseUrl}/en${page.en === '/' ? '' : page.en}`,
                    },
                },
            })
        }
    }

    return entries
}