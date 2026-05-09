import { socialLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-zinc-900 bg-black mt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="space-y-4">
          <div className="text-2xl font-mono font-bold tracking-tighter">
            ANON<span className="text-accent text-sm ml-1">.md</span>
          </div>
          <div className="text-zinc-600 font-mono text-xs">
            © {new Date().getFullYear()} — SYSTEM_TERMINATED_ACCESS_REVOKED
          </div>
        </div>

        <div className="flex flex-col items-center md:items-end gap-4">
          <div className="flex flex-wrap gap-6">
            {socialLinks.map(link => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-zinc-500 hover:text-accent transition-colors tracking-widest"
              >
                // {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
