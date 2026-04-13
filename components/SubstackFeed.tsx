import Parser from "rss-parser";
import { ArrowRight, Rss, ExternalLink } from "lucide-react";
import Image from "next/image";

type CustomItem = {
  enclosure?: { url: string };
  "content:encoded"?: string;
  description?: string;
};

// Next.js config to revalidate this page/component every 1 hour (3600s)
export const revalidate = 3600;

export default async function SubstackFeed() {
  const parser = new Parser<any, CustomItem>({
    customFields: {
      item: ["enclosure", "content:encoded", "description"],
    },
  });

  let posts = [];
  try {
    // We use next fetch to leverage Next.js native caching
    const res = await fetch("https://0xjustin.substack.com/feed", {
      next: { revalidate: 3600 },
    });
    if (!res.ok) throw new Error("Failed to fetch RSS");
    
    const xml = await res.text();
    const feed = await parser.parseString(xml);
    
    // Grab the latest 3 posts
    posts = feed.items.slice(0, 3);
  } catch (error) {
    console.error("Error fetching Substack feed:", error);
    return null; // Fail gracefully if offline or blocked
  }

  if (posts.length === 0) return null;

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto" id="writing">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl font-mono font-bold text-accent flex items-center gap-3">
          <Rss className="animate-pulse" />
          BROADCAST_LOGS
        </h2>
        <div className="h-px flex-1 bg-zinc-800" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, i) => {
          // Substack places thumbnails inside the enclosure object
          const thumbnailUrl = post.enclosure?.url;
          
          // Clean HTML from description for a neat snippet
          const snippet = post.description 
            ? post.description.replace(/<[^>]*>?/gm, '').substring(0, 120) + "..."
            : "Transmission incoming...";

          // Format Date
          const dateStr = post.pubDate 
            ? new Date(post.pubDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
            : "UNKNOWN_DATE";

          return (
            <a 
              key={post.guid || post.link} 
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col border border-zinc-900 bg-zinc-900/20 hover:bg-zinc-900/40 hover:border-accent/50 transition-all overflow-hidden crt-glow relative cursor-pointer"
            >
              {/* Thumbnail Header */}
              <div className="w-full aspect-[16/9] relative border-b border-zinc-900 overflow-hidden bg-black flex items-center justify-center">
                {thumbnailUrl ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img 
                    src={thumbnailUrl} 
                    alt={post.title || "Post Thumbnail"} 
                    className="object-cover w-full h-full opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  />
                ) : (
                  <div className="flex flex-col items-center">
                    <span className="text-xs font-mono text-zinc-600">NO_IMG_DATA</span>
                  </div>
                )}
                {/* Overlay Date */}
                <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-sm border border-zinc-800 px-2 py-1">
                  <p className="text-[10px] font-mono text-accent uppercase tracking-widest">{dateStr}</p>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 flex flex-col flex-1">
                <div className="block group-hover:text-accent transition-colors">
                  <h3 className="text-xl font-mono font-bold text-zinc-100 group-hover:text-accent transition-colors mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                </div>
                
                <p className="text-zinc-500 font-sans text-sm leading-relaxed mb-6 line-clamp-3">
                  {snippet}
                </p>

                {/* Footer Action */}
                <div className="mt-auto pt-4 border-t border-zinc-900 flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 group-hover:text-accent transition-colors relative">
                    READ_ARTICLE <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300"></span>
                  </div>
                  <ExternalLink size={14} className="text-zinc-700" />
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
