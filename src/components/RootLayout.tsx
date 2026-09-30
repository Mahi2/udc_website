import { useState, useEffect } from "react";
import { Outlet, useLocation } from "@tanstack/react-router";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function RootLayout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <motion.header
        initial={false}
        animate={{
          backgroundColor: isScrolled ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0)",
          boxShadow: isScrolled
            ? "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
            : "none",
          height: isScrolled ? "64px" : "80px",
        }}
        transition={{
          duration: 0.4,
          ease: [0.4, 0, 0.2, 1],
        }}
        className="fixed w-full top-0 z-50"
      >
        <Navbar isScrolled={isScrolled} />
      </motion.header>
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
