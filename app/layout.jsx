import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Company Name",
    description: "Template for a web, created with next.js",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <main className="md:flex">
                    <Navbar />
                    {children}
                </main>
            </body>
        </html>
    );
}
