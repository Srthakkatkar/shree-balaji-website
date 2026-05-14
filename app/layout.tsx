import type { Metadata } from "next";
import "./globals.css";
import { LangProvider } from "@/context/LangContext";

export const metadata: Metadata = {
  title: "श्री बालाजी मोटर ट्रेनिंग स्कूल | इचलकरंजी",
  description:
    "इचलकरंजी, महाराष्ट्रातील प्रीमियम ड्रायव्हिंग प्रशिक्षण. आत्मविश्वासाने ड्रायव्हिंग शिका. नवशिक्यांसाठी अनुकूल, तज्ज्ञ प्रशिक्षक, ९८% परवाना यश दर.",
  keywords: "driving school Ichalkaranji, motor training Maharashtra, ड्रायव्हिंग स्कूल इचलकरंजी, driving lessons",
  openGraph: {
    title: "श्री बालाजी मोटर ट्रेनिंग स्कूल",
    description: "Confidence ने Driving शिका — Premium driving training in Ichalkaranji",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="mr" className="scroll-smooth">
      <body className="bg-[#050505] text-[#f8f8f0] font-body overflow-x-hidden">
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
