#!/bin/bash
# Alternative installation script for when pnpm is not available

echo "Installing dependencies with npm..."
npm install

echo "Dependencies installed successfully!"
echo "To run the project:"
echo "  npm run dev     # Start development server"
echo "  npm run build   # Build for production"
echo "  npm run lint    # Run ESLint"