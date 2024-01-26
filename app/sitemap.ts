import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseURL = "https://ymm4-info.vercel.app";
  const lastModified = new Date();

  const staticPaths = [
    {
      url: baseURL,
      lastModified,
    },
  ];

  return [...staticPaths];
}