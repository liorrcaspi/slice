/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => { 
        config.externals.push({ sharp: 'commonjs sharp', canvas: 'commonjs canvas' }); 
        config.resolve.extensionAlias = {
            ".js": [".ts", ".tsx", ".js", ".jsx"],
            ".pdf": [".pdf"],
            ".docx": [".docx"],
            ".mjs": [".mts", ".mjs"],
            ".cjs": [".cts", ".cjs"],
          };
        config.module.rules.push({
            test: /\.pdf$/i,
            type: 'asset/source'
        })
        config.module.rules.push({
            test: /\.docx$/i,
            type: 'asset/source'
        })
        return config 
    }
};

export default nextConfig;
