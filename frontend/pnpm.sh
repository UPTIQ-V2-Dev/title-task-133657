#!/bin/bash
# pnpm wrapper script that uses npm instead - Global version

# Map pnpm commands to npm equivalents
case "$1" in
    "install")
        shift
        exec npm install "$@"
        ;;
    "build")
        shift
        exec npm run build "$@"
        ;;
    "dev")
        shift
        exec npm run dev "$@"
        ;;
    "preview")
        shift
        exec npm run preview "$@"
        ;;
    "eslint")
        shift
        exec npm run eslint "$@"
        ;;
    "prettier")
        shift
        exec npm run prettier "$@"
        ;;
    "add")
        shift
        exec npm install "$@"
        ;;
    "remove")
        shift
        exec npm uninstall "$@"
        ;;
    "run")
        shift
        exec npm run "$@"
        ;;
    *)
        # For any other command, try to run it with npm run
        exec npm run "$@"
        ;;
esac