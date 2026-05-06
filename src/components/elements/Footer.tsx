import React from 'react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="w-full bg-muted/40 border-t border-border mt-auto">
            <div className="max-w-5xl mx-auto px-4 py-8 md:py-12 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex flex-col items-center md:items-start">
                    <h3 className="text-lg font-semibold bg-gradient-to-r from-gray-900 to-gray-500 bg-clip-text text-transparent dark:from-gray-100 dark:to-gray-500">Jan Florek</h3>
                    <p className="text-sm text-muted-foreground mt-1 text-center md:text-left">
                        Web Developer based in Poland.
                    </p>
                </div>
                
                <nav className="flex items-center gap-6">
                    <Link href="/cv" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                        CV
                    </Link>
                    <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                        Kontakt
                    </Link>
                    <a href="https://github.com/WavyWare" target="_blank" rel="noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                        GitHub
                    </a>
                </nav>

                <div className="text-xs text-muted-foreground">
                    &copy; {new Date().getFullYear()} Jan Florek. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
