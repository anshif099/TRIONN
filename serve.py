"""Serve the downloaded TRIONN snapshot with its sanitized asset names restored."""

from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
import re
import sys
from urllib.parse import urlsplit


SITE_ROOT = Path(__file__).resolve().parent / "trionn.com"

# The downloader removed ``~`` from three JavaScript filenames, while the
# saved HTML still requests their original URLs.
ASSET_ALIASES = {
    "/_next/static/chunks/0.t3mu8kba~-e.js": "/_next/static/chunks/0.t3mu8kba-e.js",
    "/_next/static/chunks/0.924d2y-5~87.js": "/_next/static/chunks/0.924d2y-587.js",
    "/_next/static/chunks/0eox~aw2ff066.js": "/_next/static/chunks/0eoxaw2ff066.js",
    "/_next/static/chunks/0y3~cortx~or~.js": "/_next/static/chunks/0y3cortxor.js",
    "/_next/static/chunks/0xt8hh0aijjr~.css": "/_next/static/chunks/0xt8hh0aijjr.css",
}


class SnapshotHandler(SimpleHTTPRequestHandler):
    def translate_path(self, path: str) -> str:
        requested_path = urlsplit(path).path
        local_path = ASSET_ALIASES.get(requested_path, requested_path)
        return super().translate_path(local_path)

    def end_headers(self) -> None:
        self.send_header("Cache-Control", "no-store")
        super().end_headers()

    def do_GET(self) -> None:
        if urlsplit(self.path).path.endswith(".js"):
            self._serve_repaired_javascript()
            return
        super().do_GET()

    def _serve_repaired_javascript(self) -> None:
        source = Path(self.translate_path(self.path))
        if not source.is_file():
            self.send_error(404, "File not found")
            return

        content = source.read_bytes()
        # The downloader's formatter split optional chaining and nullish
        # coalescing operators. Do not change ternaries containing decimals,
        # such as ``condition ? .5 : 1``.
        content = re.sub(rb"\?\s+\.(?=[$A-Za-z_(\[])", b"?.", content)
        content = re.sub(rb"\?\s+\?", b"??", content)
        content = re.sub(rb"\?\?\s+=", b"??=", content)

        self.send_response(200)
        self.send_header("Content-Type", "text/javascript; charset=utf-8")
        self.send_header("Content-Length", str(len(content)))
        self.end_headers()
        self.wfile.write(content)


def main() -> None:
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8000
    handler = lambda *args, **kwargs: SnapshotHandler(  # noqa: E731
        *args, directory=str(SITE_ROOT), **kwargs
    )
    server = ThreadingHTTPServer(("127.0.0.1", port), handler)
    print(f"Serving TRIONN at http://localhost:{port}")
    print("Press Ctrl+C to stop.")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        server.server_close()


if __name__ == "__main__":
    main()
