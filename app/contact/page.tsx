import type { Metadata } from "next";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
    title: "Contact — Timothy Vieri Chandra",
};

export default function ContactPage() {
    return <Contact />;
}