'use client';

import {useLocale} from 'next-intl';
import {usePathname, useRouter} from '@/i18n/navigation';
import {ToggleGroup, ToggleGroupItem} from '@/components/ui/toggle-group';

type Props = {
    className?: string;
};

export default function LanguageToggle({className}: Props) {
    const locale = useLocale();
    const pathname = usePathname();
    const router = useRouter();

    function handleChange(nextLocale: string) {
        if (!nextLocale || nextLocale === locale) return;
        router.replace(pathname, {locale: nextLocale});
    }

    return (
        <ToggleGroup
            type="single"
            variant="outline"
            value={locale}
            onValueChange={handleChange}
            className={className}
            defaultValue={locale}
        >
            <ToggleGroupItem value="pl" aria-label="Polish">
                PL
            </ToggleGroupItem>
            <ToggleGroupItem value="en" aria-label="English">
                EN
            </ToggleGroupItem>
        </ToggleGroup>
    );
}