export function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <span className="flex items-baseline gap-2 text-foreground">
      <span className="text-xl font-black uppercase sm:text-2xl">Avant</span>
      {!compact ? (
        <span className="text-xs font-semibold uppercase tracking-widest text-primary">Movies</span>
      ) : null}
    </span>
  );
}
