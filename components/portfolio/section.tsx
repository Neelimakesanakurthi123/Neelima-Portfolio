import { cn } from "@/lib/utils"

interface SectionProps {
  id: string
  reel: string
  title: string
  children: React.ReactNode
  className?: string
}

/** A page section styled like a reel slate: mono reel number, serif title, hairline rule. */
export function Section({ id, reel, title, children, className }: SectionProps) {
  return (
    <section id={id} className={cn("scroll-mt-20 border-t border-line py-20 sm:py-28", className)}>
      <div className="mx-auto max-w-5xl px-4 sm:px-8">
        <header className="mb-12 flex items-baseline gap-4 sm:mb-16">
          <span className="font-mono text-xs tracking-[0.2em] text-amber">REEL {reel}</span>
          <h2 className="font-display text-3xl text-foreground sm:text-5xl">{title}</h2>
        </header>
        {children}
      </div>
    </section>
  )
}
