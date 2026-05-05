import Image from "next/image";

export default function AboutMePage() {
    return (
        <div className="w-full flex justify-center pt-12 md:pt-20 mb-20 px-4">
            <section className="flex flex-col md:flex-row items-center gap-12 md:gap-16 max-w-5xl">
                <div className="flex-1 space-y-6">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground font-serif">
                        O mnie
                    </h1>
                    <div className="w-16 h-px bg-border"></div>
                    <div className="text-base md:text-lg text-muted-foreground leading-relaxed space-y-5 font-medium">
                        <p>
                            Cześć! Jestem Jan, uczeń 3 klasy technikum programistycznego z pasją do projektowania i
                            tworzenia nowoczesnych aplikacji webowych. Poza tym tworze też elektronike bazowaną na mikrokontrolerach i mikrokomputerach.
                        </p>
                        <p>
                            Tworze oprogramowanie bazując na najnowszej technologii na rynku. Główne technologie to Typescript, Next.js, Tailwind.css, Express.js i DrizzleORM. Na codzień korzystam z Linux Arch
                        </p>
                    </div>
                </div>
                <div className="flex-1 flex justify-center w-full">
                    <div className="relative p-2 w-full max-w-[350px]">
                        <Image 
                            src="/example.png" 
                            width={350} 
                            height={450} 
                            alt="O mnie" 
                            className="w-full object-cover grayscale hover:grayscale-0 rounded-none border border-border/60 shadow-md transition-all duration-700 aspect-[3/4]"
                            priority
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}
