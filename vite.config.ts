// ladle uses vite under the hood
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import fs from "fs";

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
                            let contentType = "application/octet-stream"; // Default content type

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
                                    contentType = "application/octet-stream"; // Fallback for unknown types
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
        },
    ],
    resolve: {
        // Set up the alias
        alias: {
            "@": path.resolve(__dirname, "src"),
        },
    },
});
