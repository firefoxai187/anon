import { experienceData } from "@/lib/data";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Terminal, ExternalLink } from "lucide-react";
import ImageCarousel from "@/components/ImageCarousel";

export async function generateStaticParams() {
  return experienceData.map((exp) => ({
    slug: exp.slug,
  }));
}

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = experienceData.find((exp) => exp.slug === slug);

  if (!data) {
    notFound();
  }

  return (
    <div className="min-h-screen py-20 px-6 max-w-4xl mx-auto">
      <Link 
        href="/" 
        className="inline-flex items-center gap-2 text-zinc-500 hover:text-accent font-mono text-sm mb-12 transition-colors group"
      >
        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
        cd ..
      </Link>

      <div className="border border-zinc-800 bg-zinc-950/80 crt-glow rounded overflow-hidden">
        {/* Terminal Header */}
        <div className="bg-zinc-900 px-4 py-3 border-b border-zinc-800 flex items-center justify-between">
          <div className="flex gap-2">
            <Terminal size={14} className="text-zinc-500" />
            <div className="text-xs font-mono text-zinc-400">
              ~/work/{data.slug}.md
            </div>
          </div>
          <div className="text-[10px] font-mono text-accent">--READ_ONLY</div>
        </div>

        <div className="p-6 sm:p-10 space-y-16">
          {/* Header Block */}
          <header className="space-y-4">
            <div className="text-accent/70 font-mono text-xs tracking-widest uppercase">
              {data.date}
            </div>
            <h1 className="text-4xl md:text-5xl font-mono font-bold text-zinc-100">
              {data.company}
            </h1>
            <div className="text-zinc-500 font-mono text-lg lowercase">
              // {data.headline}
            </div>
          </header>

          {/* Main Hero Header */}
          <div className="mb-4">
            <ImageCarousel images={data.images} />
          </div>

          <div className="space-y-12">
            {/* Overview */}
            <section className="space-y-4">
              <h2 className="text-xl font-mono font-bold text-zinc-200 border-b border-zinc-800 pb-2 flex items-center gap-2">
                <span className="text-accent underline decoration-accent/30">&gt;</span> OVERVIEW
              </h2>
              <div className="space-y-4">
                {data.overview.map((paragraph, idx) => (
                  <p key={idx} className="text-zinc-400 font-sans text-sm leading-relaxed sm:text-base">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>

            {/* My Role */}
            <section className="space-y-4">
              <h2 className="text-xl font-mono font-bold text-zinc-200 border-b border-zinc-800 pb-2 flex items-center gap-2">
                <span className="text-accent underline decoration-accent/30">&gt;</span> MY_ROLE
              </h2>
              <ul className="list-disc list-outside ml-4 space-y-2 text-zinc-400 font-sans text-sm leading-relaxed sm:text-base marker:text-accent">
                {data.roleDescription.map((bullet, idx) => (
                  <li key={idx} className="pl-2 relative">
                    {bullet}
                  </li>
                ))}
              </ul>
            </section>

            {/* System Metrics */}
            {data.systemMetrics && data.systemMetrics.length > 0 && (
              <section className="space-y-4">
                <h2 className="text-xl font-mono font-bold text-zinc-200 border-b border-zinc-800 pb-2 flex items-center gap-2">
                  <span className="text-accent underline decoration-accent/30">&gt;</span> SYSTEM_METRICS
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {data.systemMetrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center gap-3 border border-zinc-800 bg-zinc-900/40 p-4 crt-glow hover:border-accent/50 transition-colors">
                      <div className="w-3 h-3 bg-accent animate-pulse shrink-0" />
                      <span className="font-mono text-zinc-300 text-sm">{metric}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Achievements */}
            <section className="space-y-8">
              <h2 className="text-xl font-mono font-bold text-zinc-200 border-b border-zinc-800 pb-2 flex items-center gap-2">
                <span className="text-accent underline decoration-accent/30">&gt;</span> ACHIEVEMENTS
              </h2>
              <div className="space-y-8">
                {data.achievements.map((achievement, idx) => (
                  <div key={idx} className="space-y-3 block">
                    <h3 className="text-lg font-mono font-semibold text-zinc-300">
                      {achievement.title}
                    </h3>
                    <ul className="list-disc list-outside ml-4 space-y-2 text-zinc-400 font-sans text-sm leading-relaxed sm:text-base marker:text-zinc-600">
                      {achievement.description.map((bullet, bIdx) => (
                        <li key={bIdx} className="pl-2 relative">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                    {achievement.metric && (
                      <div className="inline-block mt-3 font-mono text-xs text-accent bg-accent/5 border border-accent/20 px-3 py-1">
                        {achievement.metric}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Featured Projects */}
            {data.featuredProjects && data.featuredProjects.length > 0 && (
              <section className="space-y-8">
                <h2 className="text-xl font-mono font-bold text-zinc-200 border-b border-zinc-800 pb-2 flex items-center gap-2">
                  <span className="text-accent underline decoration-accent/30">&gt;</span> FEATURED_CAMPAIGNS
                </h2>
                <div className="grid gap-6 sm:grid-cols-2">
                  {data.featuredProjects.map((project, idx) => (
                    <div key={idx} className="border border-zinc-800 bg-zinc-900/30 p-5 space-y-4 hover:border-accent/40 transition-colors">
                      <div className="space-y-1">
                        <div className="flex items-start justify-between gap-4">
                          <h3 className="text-md font-mono font-bold text-zinc-200">
                            {project.title}
                          </h3>
                          {project.url && (
                            <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-accent mt-1 transition-colors shrink-0">
                              <ExternalLink size={14} />
                            </a>
                          )}
                        </div>
                      </div>

                      {/* Campaign Image Carousel */}
                      <ImageCarousel images={project.images} />

                      <p className="text-zinc-400 font-sans text-xs leading-relaxed">
                        {project.description}
                      </p>
                      {project.metrics && project.metrics.length > 0 && (
                        <div className="flex flex-wrap gap-2 pt-2 border-t border-zinc-800/50">
                          {project.metrics.map(metric => (
                            <span key={metric} className="text-[10px] font-mono text-zinc-400">
                              <span className="text-accent mr-1">█</span>
                              {metric}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* External Links */}
            {data.externalLinks && data.externalLinks.length > 0 && (
              <section className="space-y-4">
                <h2 className="text-xl font-mono font-bold text-zinc-200 border-b border-zinc-800 pb-2 flex items-center gap-2">
                  <span className="text-accent underline decoration-accent/30">&gt;</span> EXTERNAL_LINKS
                </h2>
                <ul className="space-y-2">
                  {data.externalLinks.map((link, idx) => (
                    <li key={idx}>
                      <a 
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-zinc-400 hover:text-accent font-mono text-sm transition-colors group"
                      >
                        <ExternalLink size={14} className="text-zinc-600 group-hover:text-accent transition-colors" />
                        <span className="border-b border-transparent group-hover:border-accent/40 transition-colors">
                          {link.label}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          {/* Tags Block */}
          <section className="pt-8 border-t border-zinc-800">
            <div className="flex flex-wrap gap-2">
              {data.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-500">
                  --{tag.toLowerCase().replace(/ /g, "_")}
                </span>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
