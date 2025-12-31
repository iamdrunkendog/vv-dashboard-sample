import type { NextConfig } from "next";

const repo = "vv-dashboard-sample";
const assetPrefix = `/${repo}/`;
const basePath = `/${repo}`;

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  output: "export",
  assetPrefix: assetPrefix,
  basePath: basePath,
  trailingSlash: true,
};

export default nextConfig;
