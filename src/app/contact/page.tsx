import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="w-full max-w-2xl mx-auto flex flex-col pt-12 md:pt-20 mb-20 px-4">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground font-serif mb-6 text-center">
                Kontakt
            </h1>
            <div className="w-16 h-px bg-border mx-auto mb-10"></div>
            <p className="text-muted-foreground text-center mb-10 leading-relaxed text-base md:text-lg font-medium max-w-lg mx-auto">
                Masz projekt do zrealizowania lub po prostu chcesz porozmawiać o technologiach i kodzie?
                Napisz! Zawsze jestem otwarty na nowe wyzwania i ciekawe współprace.
            </p>
            <div className="w-full border-t border-l border-border grid grid-cols-1 md:grid-cols-2">
                <div className="flex flex-col items-center gap-4 p-8 border-r border-b border-border bg-transparent hover:bg-muted/10 transition-colors md:col-span-2">
                    <Mail className="w-6 h-6 text-muted-foreground/60" strokeWidth={1.5} />
                    <span className="text-base font-semibold tracking-wide">wavyware1@proton.me</span>
                </div>
                <div className="flex flex-col items-center gap-4 p-8 border-r border-b border-border bg-transparent hover:bg-muted/10 transition-colors">
                    <Phone className="w-6 h-6 text-muted-foreground/60" strokeWidth={1.5} />
                    <span className="text-base font-semibold tracking-wide">jeszcze nie ma</span>
                </div>
                <div className="flex flex-col items-center gap-4 p-8 border-r border-b border-border bg-transparent hover:bg-muted/10 transition-colors">
                    <MapPin className="w-6 h-6 text-muted-foreground/60" strokeWidth={1.5} />
                    <span className="text-base font-semibold tracking-wide">Polska</span>
                </div>
            </div>
            <div className="mt-12 text-center text-xs text-muted-foreground font-medium uppercase tracking-widest">
                Odpowiadam zwykle w ciągu 24 godzin
            </div>
        </div>
    );
}
