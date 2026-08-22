import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { Readable } from "node:stream";
import { extname, join, normalize, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import nitroHandler from "./server/index.mjs";

const distDirectory = fileURLToPath(new URL(".", import.meta.url));
const publicDirectory = resolve(distDirectory, "public");
const port = Number(process.env.PORT || 3000);

const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".map": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
};

function getStaticFile(pathname) {
  const relativePath = normalize(decodeURIComponent(pathname)).replace(/^[/\\]+/, "");
  const candidate = resolve(publicDirectory, relativePath);

  if (!candidate.startsWith(`${publicDirectory}/`) || !existsSync(candidate)) {
    return null;
  }

  return statSync(candidate).isFile() ? candidate : null;
}

async function handleRequest(req, res) {
  try {
    const origin = `http://${req.headers.host || "localhost"}`;
    const url = new URL(req.url || "/", origin);
    const staticFile = getStaticFile(url.pathname);

    if (staticFile) {
      res.writeHead(200, { "content-type": mimeTypes[extname(staticFile)] || "application/octet-stream" });
      createReadStream(staticFile).pipe(res);
      return;
    }

    const init = { method: req.method, headers: req.headers };
    if (req.method !== "GET" && req.method !== "HEAD") {
      init.body = Readable.toWeb(req);
      init.duplex = "half";
    }

    const response = await nitroHandler(new Request(url, init));
    res.writeHead(response.status, Object.fromEntries(response.headers));

    if (response.body) {
      Readable.fromWeb(response.body).pipe(res);
    } else {
      res.end();
    }
  } catch (error) {
    console.error("[production] Request failed", error);
    res.writeHead(500, { "content-type": "application/json; charset=utf-8" });
    res.end(JSON.stringify({ error: "Internal Server Error" }));
  }
}

createServer(handleRequest).listen(port, "0.0.0.0", () => {
  console.log(`PTI Magic Maker listening on port ${port}`);
});
