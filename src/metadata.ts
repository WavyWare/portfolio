import type {Metadata} from 'next';
import {getTranslations} from 'next-intl/server';
import {Locale} from "./i18n/routing";

export const baseUrl = 'https://florek.dev';

type PageMetadataInput = {
    locale: Locale,
    namespace: string,
    pathName?: string,
    ogImageUrl?: string,
};

interface ogImageObject {
    url: string;
    width: number;
    height: number;
}

export async function getPageMetadata({
                                            locale,
                                            namespace,
                                            pathName = namespace,
                                            ogImageUrl,
                                      }: PageMetadataInput): Promise<Metadata> {
    const t = await getTranslations(`Metadata.${namespace}`);

    const canonical = `${baseUrl}/${locale}${pathName === '/' ? '' : pathName}`;

    let ogImage : ogImageObject;
    if (!ogImageUrl) {
        ogImage = { url: `/og/${namespace}-${locale}-og.png`, width: 500, height: 500 };
    } else {
        ogImage = { url : `/og/${ogImageUrl}`, width: 500, height: 500 };
    }

    return {
        title: t('title'),
        description: t('description'),
        alternates: {
            canonical,
            languages: {
                pl: `${baseUrl}${pathName === '/' ? '' : pathName}`,
                en: `${baseUrl}/en${pathName === '/' ? '' : pathName}`,
                'x-default': `${baseUrl}/en${pathName === '/' ? '' : pathName}`
            }
        },
        openGraph: {
            title: t('title'),
            description: t('description'),
            url: canonical,
            locale,
            images: [ogImage]
        },
        twitter: {
            title: t('title'),
            description: t('description'),
            images: [ogImage]
        }
    };
}

export type ParamsProps = {
    params: Promise<{locale: Locale}>
}