"use client";

import { useEffect, useState } from "react";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

export default function Home() {
    const [isClient, setIsClient] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsClient(true);
        if (window.innerWidth < 768) {
            alert("Use a laptop for a better experience!");
        }

        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    if (!isClient || isLoading) {
        return (
            <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
                <img src="/loader.gif" alt="Loading..." className="w-40 h-40" />
            </div>
        );
    }

    return (
        <main className="flex min-h-screen bg-[#ffffff]">
            <Navbar />
            <div className="flex-1 ml-64 md:ml-0"> 
                <div className="container mx-auto px-12 py-6">
                    <HeroSection />
                </div>
            </div>
        </main>
    );
}
