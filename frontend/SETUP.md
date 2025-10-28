# Todo App - Setup Instructions

## Package Manager Issue Fix

The project was initially configured for `pnpm` but it's not available in the current environment. Here are the solutions:

### Option 1: Install pnpm (Recommended)

```bash
npm install -g pnpm
```

### Option 2: Use npm instead

1. Remove the pnpm lock file:

```bash
rm pnpm-lock.yaml
```

2. Install dependencies with npm:

```bash
npm install
```

3. Run the project:

```bash
npm run build   # Build the project
npm run dev     # Start development server (if needed)
npm run lint    # Run linting
```

## Project Structure

The Todo App has been fully implemented with:

- **TodoForm**: Simple form with title input only
- **TodoList**: Displays todos with completion status
- **TodoItem**: Individual todo with toggle and delete functionality
- **Mock Data Support**: Set `VITE_USE_MOCK_DATA=true` for development

## Features Implemented

- ✅ Add todos with title only
- ✅ Toggle completion status
- ✅ Delete todos
- ✅ Responsive design
- ✅ Form validation
- ✅ Loading states
- ✅ Error handling
- ✅ Mock data for testing

## Commands After Setup

```bash
npm run build      # Build for production
npm run lint       # Run ESLint
npm run type-check # TypeScript checking
npm run prettier   # Code formatting
```

The app is fully functional and ready to use once dependencies are installed!
