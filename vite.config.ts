// ladle uses vite under the hood
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import fs from "fs";
import fsExtra from "fs-extra";
import { ladleBuildPath } from "./.ladle/config.mjs";

export default defineConfig({
    plugins: [
        react(),
        // Custom middleware to serve static files
        {
            name: "serve-static-files",
            configureServer(server) {
                server.middlewares.use((req, res, next) => {
                    const { url } = req;
                    // Check if url is defined
                    if (!url) {
                        res.statusCode = 400; // Bad Request
                        res.end("Bad Request: URL is undefined");
                        return;
                    }
                    // Serve i18n files
                    if (url.startsWith("/i18n/")) {
                        const filePath = path.resolve(__dirname, "src/i18n", url.slice(6));
                        if (fs.existsSync(filePath)) {
                            res.setHeader("Content-Type", "application/json");
                            fs.createReadStream(filePath).pipe(res);
                            return;
                        } else {
                            res.statusCode = 404;
                            res.end("File not found");
                            return;
                        }
                    }
                    // Serve image files
                    if (url.startsWith("/img/")) {
                        const filePath = path.resolve(__dirname, "src/img", url.slice(5));
                        if (fs.existsSync(filePath)) {
                            // Determine content type based on file extension
                            const ext = path.extname(filePath).toLowerCase();
                            let contentType: string;

                            switch (ext) {
                                case ".jpg":
                                case ".jpeg":
                                    contentType = "image/jpeg";
                                    break;
                                case ".png":
                                    contentType = "image/png";
                                    break;
                                case ".svg":
                                    contentType = "image/svg+xml";
                                    break;
                                case ".gif":
                                    contentType = "image/gif";
                                    break;
                                case ".webp":
                                    contentType = "image/webp";
                                    break;
                                // Add more cases for other image types if needed
                                default:
                                    // Fallback for unknown types
                                    contentType = "application/octet-stream";
                            }
                            res.setHeader("Content-Type", contentType);
                            fs.createReadStream(filePath).pipe(res);
                            return;
                        } else {
                            res.statusCode = 404;
                            res.end("File not found");
                            return;
                        }
                    }
                    next();
                });
            },
            async writeBundle() {
                await copyStaticFiles(ladleBuildPath);
            },
        },
    ],
    resolve: {
        // Set up the alias
        alias: {
            "@": path.resolve(__dirname, "src"),
        },
    },
});

async function copyStaticFiles(toPath: string) {
    const staticFilesMap = [
        { from: "src/i18n", to: `${toPath}/i18n` },
        { from: "src/img", to: `${toPath}/img` },
    ];

    try {
        await Promise.all(staticFilesMap.map(({ from, to }) => moveStatic(from, to)));
        console.log("Successfully copied all static files");
    } catch (error) {
        console.error("Failed to copy static files:", error.message);
        throw error;
    }
}
async function moveStatic(fromPath: string, toPath: string) {
    const from = path.resolve(__dirname, fromPath);
    const to = path.resolve(__dirname, toPath);

    try {
        await fsExtra.copy(from, to);
        console.log(`Successfully copied ${fromPath} to ${toPath}`);
    } catch (error) {
        console.error(`Failed to copy ${fromPath} to ${toPath}:`, error.message);
        throw error;
    }
}
