import "./globals.css";
import Navbar from "./Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#0c0c0c] text-zinc-100 selection:bg-amber-500/30 selection:text-amber-200">
        <div className="fixed top-0 w-full z-50 backdrop-blur-xl border-b border-white/5 bg-black/20">
          <Navbar />
        </div>
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}