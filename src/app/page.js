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
    <main className="flex min-h-screen flex-col bg-[#ffffff]"> 
      <Navbar />
      <div className="container mx-auto px-12 py-6">
        <HeroSection />
      </div>
    </main>
  );
}
