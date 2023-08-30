# JACCS-Frontend-Starter-Template
Here is the initial project boilerplate for the JACCS project

## Adding to the technology stack
1. Create a branch from the main using the format `test/<technology-name>` eg: `test/Vuetify`
2. Install your package and use this branch as the playground
3. Once you are confident with the technology return to the main branch and create a new branch using the format `feature/<teachnology-name>` eg: `feature/Vuetify`
4. Install your package again, add any initial setup or boilerplate notes and create a PR to the main branch

## Current Stack
- Vue3
- Typescript
- Vite
- PostCSS
	- PostCSS Nesting
	- PostCSS Media Queries
- Pinia
- Vitest
- ESLint
- Pretier
- Volar

## For local testing using other devices (Mobile, Tablet etc...)
1. After running `npm run dev`, vite automatically exposes port `5173` to your network
2. Using your other device make sure you are connected to the same network
3. Access the webpage using `https://<NetworkIp>.<Id>:5173/`
