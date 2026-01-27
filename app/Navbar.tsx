
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-neutral-900 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Brand */}
        <Link href="/" className="font-semibold tracking-wide text-white">
          Vignesh Murugesan
        </Link>

        {/* Navigation */}
        <div className="flex space-x-6 text-sm text-neutral-300">
          <Link href="/about" className="hover:text-white transition">
            About
          </Link>
<Link href="/research" className="hover:text-white transition">
            Research
          </Link>
          <Link href="/education" className="hover:text-white transition">
            Education
          </Link>
<Link href="/experience" className="hover:text-white transition">
            Experience
          </Link>
          <Link href="/projects" className="hover:text-white transition">
            Projects

          </Link>
           <Link href="/publications" className="hover:text-white transition">
            Publications

           </Link>
          <Link href="/system-thinking" className="hover:text-white transition">
            System Thinking
          </Link>

          <Link href="/ai-systems" className="hover:text-white transition">
            AI Systems
          </Link>

          <Link href="/certifications" className="hover:text-white transition">
            Certifications
          </Link>   

          <Link href="/ethics" className="hover:text-white transition">
            Ethics
          </Link>   
          

            <Link href="/writing" className="hover:text-white transition">
            Writing
          </Link>  

          <Link href="/contact" className="hover:text-white transition">
            Contact
          </Link>
        </div>

      </div>
    </nav>
  );
}
