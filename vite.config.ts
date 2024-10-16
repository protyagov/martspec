// ladle uses vite under the hood
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import fs, { PathLike } from "fs";
import fsExtra from "fs-extra";
import { ladleBuildPath } from "./.ladle/config.mjs";
import { ServerResponse } from "http";

// Define paths for static files
const STATIC_FILE_PATHS = {
    i18n: path.resolve(__dirname, "src/i18n"),
    img: path.resolve(__dirname, "src/img"),
};

// Map of content types based on file extensions
const CONTENT_TYPES: Record<string, string> = {
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".png": "image/png",
    ".svg": "image/svg+xml",
    ".gif": "image/gif",
    ".webp": "image/webp",
};

// Get content type based on file extension
const getContentType = (ext: string) => CONTENT_TYPES[ext] || "application/octet-stream";

// Handlers for serving static files
const serveHandlers = {
    "/i18n/": (url: string, res: ServerResponse) => {
        const filePath = path.join(STATIC_FILE_PATHS.i18n, url.slice(6));
        return serveFile(res, filePath, "application/json");
    },
    "/img/": (url: string, res: ServerResponse) => {
        const ext = path.extname(url);
        const contentType = getContentType(ext);
        const filePath = path.join(STATIC_FILE_PATHS.img, url.slice(5));
        return serveFile(res, filePath, contentType);
    },
};

// Vite configuration
export default defineConfig({
    plugins: [
        react(),
        {
            name: "serve-static-files",
            configureServer(server) {
                // Middleware to handle static file requests
                server.middlewares.use((req, res, next) => {
                    const { url } = req;
                    if (!url) return handleError(res, 400, "Bad Request: URL is undefined");

                    for (const [prefix, handler] of Object.entries(serveHandlers)) {
                        if (url.startsWith(prefix)) {
                            return handler(url, res);
                        }
                    }

                    next(); // Proceed to the next middleware if no handler matched
                });
            },
            async writeBundle() {
                // Copy static files to the build directory after bundling
                const staticFilesMap = [
                    { from: "src/i18n", to: `${ladleBuildPath}/i18n` },
                    { from: "src/img", to: `${ladleBuildPath}/img` },
                ];
                await copyStaticFiles(staticFilesMap);
            },
        },
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"), // Alias for src directory
        },
    },
});

// Serve a file and handle errors
async function serveFile(res: ServerResponse, filePath: PathLike, contentType: string): Promise<void> {
    try {
        await fs.promises.access(filePath); // Check if file exists
        res.setHeader("Content-Type", contentType);
        const stream = fs.createReadStream(filePath);
        stream.pipe(res);
        stream.on("error", () => handleError(res, 500, "Internal Server Error"));
    } catch {
        handleError(res, 404, "File not found"); // Handle file not found error
    }
}

// Copy static files to the specified locations
async function copyStaticFiles(staticFilesMap: { from: string; to: string }[]) {
    try {
        await Promise.all(staticFilesMap.map(({ from, to }) => copyFile(from, to)));
        console.log("Successfully copied all static files");
    } catch (error) {
        console.error("Failed to copy static files:", error.message);
    }
}

// Copy a single file from one location to another
async function copyFile(from: string, to: string): Promise<void> {
    const fromPath = path.resolve(__dirname, from);
    const toPath = path.resolve(__dirname, to);
    try {
        await fsExtra.copy(fromPath, toPath);
        console.log(`Successfully copied ${from} to ${to}`);
    } catch (error) {
        console.error(`Failed to copy ${from} to ${to}:`, error.message);
        throw error; // Rethrow the error to be caught by the outer try-catch
    }
}

// Handle HTTP errors by setting the response status and message
function handleError(res: ServerResponse, statusCode: number, message: string): void {
    res.statusCode = statusCode;
    res.end(message);
}
