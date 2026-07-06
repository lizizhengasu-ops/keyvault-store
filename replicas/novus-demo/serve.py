import http.server, socketserver, os
PORT = 8084
DIR = r"C:\Users\31961\Documents\microsoft web\novus-demo"
os.chdir(DIR)
with socketserver.TCPServer(("", PORT), http.server.SimpleHTTPRequestHandler) as httpd:
    print(f"Serving at http://127.0.0.1:{PORT}")
    httpd.serve_forever()
