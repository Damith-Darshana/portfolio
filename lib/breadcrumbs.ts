export type Crumb = {
  label: string;
  href?: string;
};

export function buildCrumbs(...crumbs: Crumb[]): Crumb[] {
  return [{ label: "Home", href: "/" }, ...crumbs];
}