#!/bin/bash
# Script to set up Cursor rules for a new project
# Usage: ./setup-new-project.sh /path/to/project "Project Name"

PROJECT_PATH="${1:-$(pwd)}"
PROJECT_NAME="${2:-$(basename "$PROJECT_PATH")}"

if [ ! -d "$PROJECT_PATH" ]; then
    echo "Error: Directory $PROJECT_PATH does not exist"
    exit 1
fi

CURSOR_RULES_DIR="$PROJECT_PATH/.cursor/rules"

echo "Setting up Cursor rules for: $PROJECT_NAME"
echo "Project path: $PROJECT_PATH"

# Create .cursor/rules directory
mkdir -p "$CURSOR_RULES_DIR"

# Create a basic rule file
cat > "$CURSOR_RULES_DIR/project-conventions.mdc" << EOF
---
description: Project-specific conventions and structure for $PROJECT_NAME
alwaysApply: true
---

# $PROJECT_NAME

## Project Structure

<!-- Describe your project structure here -->
- Key directories and their purposes
- Important configuration files

## Conventions

<!-- Add your project conventions -->
- Coding standards
- File naming conventions
- Technology stack

## Common Tasks

<!-- Document common tasks -->
- How to run the project
- How to build/deploy
- Key commands
EOF

echo "✓ Created $CURSOR_RULES_DIR/project-conventions.mdc"
echo ""
echo "Next steps:"
echo "1. Edit $CURSOR_RULES_DIR/project-conventions.mdc with your project details"
echo "2. Open this project in a separate Cursor window"
echo "3. Start a new chat - the rules will apply automatically"
