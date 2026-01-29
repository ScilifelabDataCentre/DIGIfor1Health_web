# Multi-Project Cursor Setup Guide

## Quick Setup Commands

### 1. Create a General Projects Directory (Optional)
```bash
# Create a directory for general questions/projects
mkdir -p ~/cursor-projects/general
cd ~/cursor-projects/general
```

### 2. Set Up Rules for Each Project

For each project, create a `.cursor/rules/` directory and add project-specific rules.

## Workflow Commands

### Opening Projects in Separate Windows

**Option A: Using Cursor CLI (if available)**
```bash
# Open DIGIfor1Health project
cursor /home/joannasendecka/DIGIfor1Health_web

# Open another project (replace with your project path)
cursor /path/to/your/other/project
```

**Option B: Manual Method**
1. In Cursor: `File → New Window` (or `Cmd/Ctrl+Shift+N`)
2. `File → Open Folder` → Select your project directory
3. Each window maintains separate chat history

### Creating Project Rules Template

For any new project, run:
```bash
# Navigate to your project
cd /path/to/your/project

# Create .cursor directory
mkdir -p .cursor/rules

# Create a basic rule file (customize as needed)
cat > .cursor/rules/project-conventions.mdc << 'EOF'
---
description: Project-specific conventions and structure
alwaysApply: true
---

# Project Name

Brief description of the project.

## Project Structure
- Key directories and their purposes
- Important configuration files

## Conventions
- Coding standards
- File naming conventions
- Technology stack

## Common Tasks
- How to run the project
- How to build/deploy
- Key commands
EOF
```

## Daily Workflow

### Starting Work on DIGIfor1Health
1. Open Cursor
2. Open folder: `/home/joannasendecka/DIGIfor1Health_web`
3. Start new chat for your task
4. The rule file provides automatic context

### Starting Work on Another Project
1. `File → New Window` in Cursor
2. Open that project's folder
3. Start new chat
4. Project-specific rules apply automatically

### For General Questions
1. Create a general workspace: `~/cursor-projects/general`
2. Open it in a separate Cursor window
3. Use for questions not tied to a specific project

## Verification

Check that rules are set up correctly:
```bash
# Check DIGIfor1Health rules
ls -la /home/joannasendecka/DIGIfor1Health_web/.cursor/rules/

# Should show: jekyll-project.mdc
```

## Tips

- **One window per project**: Keeps context clean
- **New chat per task**: Prevents confusion
- **Use @ mentions**: Reference specific files when asking questions
- **Project rules**: They apply automatically, no need to explain project structure
