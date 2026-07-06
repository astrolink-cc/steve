import { useState } from "react"
import { skills } from "../data/skills"
import { projects } from "../data/projects"
import { services } from "../data/services"

function FaqItem({ question, answer, defaultOpen }: { question: string; answer: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen ?? false)

  return (
    <div className="border-b border-zinc-800 pb-3">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full text-left text-sm text-zinc-300 hover:text-zinc-100 transition-colors duration-200"
      >
        {question}
        <svg
          className={`w-3.5 h-3.5 text-zinc-500 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      <div
        className={`grid transition-all duration-300 ${open ? "grid-rows-[1fr] opacity-100 mt-2" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div className="overflow-hidden">
          <p className="text-sm text-zinc-500 leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  )
}

export default function RightPanel() {
  return (
    <div className="h-full overflow-y-auto p-10 lg:p-14 xl:p-16 scrollbar-thin">
      <div className="max-w-xl space-y-20">
        <section className="space-y-4">
          <div className="group relative">
            <h2 className="text-lg font-medium text-zinc-200 border-b border-dashed border-zinc-600 inline-block cursor-help transition-colors duration-300 group-hover:border-zinc-400">
              What I'm using
            </h2>
            <div className="absolute left-0 top-full mt-2 max-w-xs pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-xs text-zinc-400 bg-neutral-900 rounded-md px-3 py-2 leading-relaxed">
                These are the tools I've used for projects and can use for projects. I'm not fluent in everything.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            {skills.map((group) => (
              <div key={group.category} className="space-y-3">
                <h3 className="text-sm font-medium text-zinc-300">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="relative z-10 px-3 py-1.5 text-sm text-zinc-400 rounded-sm cursor-default
                        hover:text-zinc-200 transition-colors duration-300
                        before:absolute before:inset-0 before:-z-10 before:bg-zinc-700/30 before:rounded-sm before:scale-x-0 before:origin-left
                        hover:before:scale-x-100 before:transition-transform before:duration-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-lg font-medium text-zinc-200">
            Projects
          </h2>
          <div className="space-y-4">
            {projects.map((project) => (
              <div
                key={project.name}
                className="border border-zinc-800 rounded-sm p-4 hover:border-zinc-600 transition-colors duration-300"
              >
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <h3 className="text-sm font-medium text-zinc-200 group-hover:text-zinc-100 transition-colors duration-200">
                    {project.name}
                  </h3>
                </a>
                <p className="mt-1.5 text-sm text-zinc-500 leading-relaxed">
                  {project.description}
                </p>
                {project.links && project.links.length > 0 && (
                  <div className="mt-2 flex gap-3">
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-1 text-xs text-zinc-500 hover:text-zinc-100 transition-colors duration-200"
                      >
                        {link.label}
                        <svg className="size-2.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M7 17L17 7" />
                          <path d="M7 7h10v10" />
                        </svg>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-lg font-medium text-zinc-200">
            Services
          </h2>
          <div className="space-y-3">
            {services.map((service) => (
              <a
                key={service.name}
                href={service.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-zinc-800/20 rounded-sm transition-all duration-300 hover:bg-zinc-800/40"
              >
                <div className="px-5 py-4 border-l-2 border-zinc-600 group-hover:border-zinc-400 transition-colors duration-300">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-medium text-zinc-100 group-hover:text-white transition-colors duration-200">
                      {service.name}
                    </h3>
                    {service.tag && (
                      <span className="text-[10px] uppercase tracking-widest text-zinc-400 bg-zinc-800/60 px-2 py-0.5 rounded">
                        {service.tag}
                      </span>
                    )}
                  </div>
                  <p className="mt-1.5 text-sm text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors duration-200">
                    {service.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="space-y-6 pb-8">
          <h2 className="text-lg font-medium text-zinc-200">
            FAQ
          </h2>
          <div className="space-y-3">
            {[
              { q: "Do you work for free?", a: "I'm open to learning opportunities and small projects. Depends on the scope." },
              { q: "How do I contact you?", a: "DM me on Discord: @hologramsteve or open an issue on my GitHub." },
              { q: "What can you build?", a: "Discord bots, web dashboards, APIs." },
            ].map((faq, i) => (
              <FaqItem key={faq.q} question={faq.q} answer={faq.a} defaultOpen={i === 0} />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
