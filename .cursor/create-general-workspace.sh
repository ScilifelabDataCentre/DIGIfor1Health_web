#!/bin/bash
# Script to create a general workspace for non-project-specific questions

GENERAL_DIR="$HOME/cursor-projects/general"

echo "Creating general workspace for Cursor..."

mkdir -p "$GENERAL_DIR/.cursor/rules"

# Create a rule file for general questions
cat > "$GENERAL_DIR/.cursor/rules/general-questions.mdc" << 'EOF'
---
description: General questions and miscellaneous topics
alwaysApply: true
---

# General Questions Workspace

This workspace is for:
- General programming questions
- Questions not tied to a specific project
- Learning and exploration
- Quick reference questions

## Usage

Ask any question here that doesn't belong to a specific project. This keeps project workspaces clean and focused.
EOF

# Create a README
cat > "$GENERAL_DIR/README.md" << EOF
# General Cursor Workspace

This workspace is for general questions and topics that don't belong to a specific project.

## Usage

Open this folder in a separate Cursor window for:
- General programming questions
- Learning new technologies
- Quick reference questions
- Questions not tied to any specific project

## Opening in Cursor

1. File → New Window
2. File → Open Folder
3. Select: $GENERAL_DIR
EOF

echo "✓ Created general workspace at: $GENERAL_DIR"
echo ""
echo "To use:"
echo "1. In Cursor: File → New Window"
echo "2. File → Open Folder → $GENERAL_DIR"
echo "3. Start asking general questions!"
