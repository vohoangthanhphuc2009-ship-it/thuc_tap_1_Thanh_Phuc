import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Bắt buộc để xuất ra file tĩnh deploy lên Github Pages
  images: {
    unoptimized: true, // Bắt buộc khi dùng output: 'export'
  },
};

export default nextConfig;