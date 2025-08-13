#!/bin/bash

# Start Next.js development server in the background
if [ -d "/var/www/html/frontend" ] && [ -f "/var/www/html/frontend/package.json" ]; then
    echo "Starting Next.js development server..."
    cd /var/www/html/frontend
    
    # Install dependencies first
    npm install
    
    # Start the development server
    nohup npm run dev -- -H 0.0.0.0 -p 3000 > /var/log/nextjs.log 2>&1 &
    echo "Next.js development server started on port 3000"
else
    echo "Frontend directory not found or package.json missing. Run 'ddev laravel-nextjs-setup' first."
    # Create a simple placeholder server to prevent nginx errors
    nohup python3 -c "import http.server; import socketserver; socketserver.TCPServer(('', 3000), http.server.SimpleHTTPRequestHandler).serve_forever()" > /dev/null 2>&1 &
    echo "Placeholder server started on port 3000"
fi
