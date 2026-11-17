/** @type {import('next').NextConfig} */
const nextConfig = {
  // Genera un sito statico nella cartella "out", pubblicato su GitHub Pages
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
