import { FileText, Download } from "lucide-react";

export default function CVPage() {
    return (
        <div className="w-full max-w-2xl mx-auto flex flex-col pt-12 md:pt-20 mb-20 items-center text-center px-4">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground font-serif mb-6">
                Curriculum Vitae
            </h1>
            <div className="w-16 h-px bg-border mb-8"></div>
            <p className="text-muted-foreground text-base max-w-lg mx-auto mb-10 leading-relaxed font-medium">
                Poniżej znajduje się moje aktualne Curriculum Vitae. Możesz je pobrać w klasycznym formacie PDF, wydrukować lub zapisać na potrzeby rekrutacji.
            </p>
            <div className="w-full bg-transparent p-12 border border-border flex flex-col items-center justify-center min-h-[45vh] hover:bg-muted/10 transition-colors duration-300">
                <FileText className="w-12 h-12 text-muted-foreground/40 mb-6" strokeWidth={1} />
                <p className="text-muted-foreground mb-8 text-sm tracking-wide uppercase font-semibold">Podgląd PDF będzie dostępny wkrótce</p>
                <button className="flex items-center gap-2 bg-foreground text-background px-8 py-3 rounded-full font-medium hover:bg-foreground/90 transition-all shadow-sm">
                    <Download className="w-4 h-4" />
                    Pobierz dokument (PDF)
                </button>
            </div>
            <div className="mt-8 text-xs text-muted-foreground font-medium uppercase tracking-widest">
                Ostatnia aktualizacja: Maj 2026
            </div>
        </div>
    );
}
