import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "export", // Important for static HTML export
    images: { unoptimized: true } // Required for static export
};

export default nextConfig;
