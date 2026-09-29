type TechTagProps = {
  label: string;
};

export function TechTag({ label }: TechTagProps) {
  return (
    <span className="inline-flex items-center rounded-md border border-border bg-surface px-2 py-1 text-xs font-medium text-text-secondary">
      {label}
    </span>
  );
}