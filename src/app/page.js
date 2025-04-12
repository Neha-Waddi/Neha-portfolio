"use client";

import { useEffect, useState } from "react";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

export default function Home() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        if (window.innerWidth < 768) {
            alert("Use a laptop for a better experience!");
        }
    }, []);

    if (!isClient) return null;

    return (
        <main className="flex min-h-screen bg-[#ffffff]">
            <Navbar />
            <div className="flex-1 ml-64 md:ml-0"> {/* Adjust margin to account for navbar width */}
                <div className="container mx-auto px-12 py-6">
                    <HeroSection />
                </div>
            </div>
        </main>
    );
}