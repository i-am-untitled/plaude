export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-primary-brand">
      <span className="flex items-center gap-1">
        <span className="h-[3px] w-3 rounded-full bg-primary-brand" />
        <span className="h-[3px] w-1.5 rounded-full bg-surface-container" />
      </span>
      {children}
    </span>
  );
}
