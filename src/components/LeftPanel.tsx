export default function LeftPanel() {
  return (
    <div className="flex flex-col justify-between h-full p-10 lg:p-14 xl:p-16 select-none">
      <div>
        <h1 className="text-4xl lg:text-5xl font-light tracking-tight text-zinc-100 leading-[1.1]">
          Hologram
          <br />
          <span className="font-semibold">Steve</span>
        </h1>
      </div>

      <div className="space-y-12">
        <div className="space-y-4">
          <p className="text-sm text-zinc-400 leading-relaxed max-w-[220px]">
            16yo from the Netherlands.
            <br />
            Building Discord bots and web apps.
          </p>
          <div className="inline-flex items-center gap-1.5 text-xs text-zinc-500">
            <span className="size-1.5 rounded-full bg-emerald-400/70" />
            Co-Founder @ AstroLink.cc
          </div>
        </div>

        <div className="flex gap-6">
          <a
            href="https://github.com/HologramSteve"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.15em] text-zinc-500 hover:text-zinc-100 transition-colors duration-300"
          >
            <svg className="size-3.5" viewBox="0 0 19 19" fill="currentColor">
              <use href="/icons.svg#github-icon" />
            </svg>
            GitHub
            <svg className="size-3 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7" />
              <path d="M7 7h10v10" />
            </svg>
          </a>
          <a
            href="https://discord.com/users/hologramsteve"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.15em] text-zinc-500 hover:text-zinc-100 transition-colors duration-300"
          >
            <svg className="size-3.5" viewBox="0 0 20 19" fill="currentColor">
              <use href="/icons.svg#discord-icon" />
            </svg>
            Discord
            <svg className="size-3 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7" />
              <path d="M7 7h10v10" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}
