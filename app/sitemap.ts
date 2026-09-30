import { type MetadataRoute } from "next";
import { site } from "@/lib/constants";
import { getAllProjects } from "@/lib/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${site.url}/`, lastModified: now, priority: 1.0 },
    { url: `${site.url}/about`, lastModified: now, priority: 0.8 },
    { url: `${site.url}/skills`, lastModified: now, priority: 0.7 },
    { url: `${site.url}/projects`, lastModified: now, priority: 0.9 },
    { url: `${site.url}/resume`, lastModified: now, priority: 0.8 },
    { url: `${site.url}/contact`, lastModified: now, priority: 0.7 },
    { url: `${site.url}/blog`, lastModified: now, priority: 0.5 },
  ];

  const projectPages: MetadataRoute.Sitemap = getAllProjects().map((p) => ({
    url: `${site.url}/projects/${p.slug}`,
    lastModified: new Date(p.date),
    priority: 0.7,
  }));

  return [...staticPages, ...projectPages];
}