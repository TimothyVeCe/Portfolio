import type { Metadata } from "next";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";

export const metadata: Metadata = {
    title: "About — Timothy Vieri Chandra",
};

export default function AboutPage() {
    return (
        <>
            <About />
            <Skills />
            <Experience />
        </>
    );
}