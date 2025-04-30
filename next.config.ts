import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  trailingSlash: true, // CloudFrontとS3の互換性のためにURLと同じフォルダ構造でエクスポート
  output: 'export', // CloudFrontとS3構成にするために静的エクスポート
  /* config options here */
}

export default nextConfig
