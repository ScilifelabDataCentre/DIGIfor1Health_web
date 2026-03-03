#!/usr/bin/env bash
# Run this script in a system terminal (outside Cursor) to view the site at http://127.0.0.1:4000
# Example: open a terminal from your OS, then: cd /home/joannasendecka/DIGIfor1Health_web && ./serve-local.sh

set -e
cd "$(dirname "$0")"

# Use local theme so we don't need GitHub (config is already set)
echo "Starting Jekyll at http://127.0.0.1:4000 ..."
echo "Press Ctrl+C to stop."
bundle exec jekyll serve --host 127.0.0.1 --port 4000
