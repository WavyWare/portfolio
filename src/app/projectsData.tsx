import {ProjectEntry} from "@/components/elements/portfolio/Projects";

export const projectsData: ProjectEntry[] = [
    {
        title: "Backend dla systemu notatek",
        description: "Backend napisany w DrizzleORM, Typescript, Express, JWT.",
        image: "/backend.png",
        links: {
            github: "https://github.com/WavyWare/note-backend",
        }
    },
    {
        title: "Kalkulator inwestycyjny",
        description: "Zaawansowany kalkulator inwestycyjny pozwalający na tworzenie scenariuszy wpłat i wypłat, porównywanie scenariuszy inwestycyjnych i eksport prognoz.",
        image: "/calculator.png",
        links: {
            github: "https://github.com/WavyWare/investment-calculator",
            demo: "https://wavyware.github.io/investment-calculator/"
        }
    },
    {
        title: "Stalowy Szlak - Gra promocyjna dla HSW",
        description: "Gra wykonana podczas hackathonu w ZST Leżajsk o lokalnym przemyśle zbrojnym",
        image: "/stalowy.png",
        links: {
            github: "https://github.com/kadzbe/stalowy-szlak",
            demo: "https://kadzbe.github.io/stalowy-szlak/"
        }
    },
    {
        title: "Symulacyjny program do antycheatu",
        description: "Inspiracje zaczerpnąłem od youtubera @PrimerBlobs. Program ten polega na tym, że bazujac na prawdopodobieństwie oceniamy czy dany blob oszukuje. Ten program został stworzony w typescript korzystając z OOP",
        image: "/blob.png",
        links: {
            github: "https://github.com/WavyWare/blob-anticheat",
        }
    },

];