#!/usr/bin/env python3
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from pathlib import Path
import webbrowser

PORT = 8080
ROOT = Path(__file__).resolve().parents[1]

class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)

if __name__ == "__main__":
    url = f"http://localhost:{PORT}"
    print(f"Serving Universal Prompt Studio at {url}")
    try:
        webbrowser.open(url)
    except Exception:
        pass
    ThreadingHTTPServer(("", PORT), Handler).serve_forever()
