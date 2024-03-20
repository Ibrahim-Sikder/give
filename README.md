# React + TypeScript + Vite

### Locally run this project
# client side : npm run dev
# server side : nodemon index.js


### Technology:

## Frontend

# Html, Css, Tailwind Css, Material UI, React, TypeScript , Redux , RTK query, .

## Backend

# Node js, Express js, JWT,

## Database

# MongoDB

## Animation

# Framer Motion / AOS

### Feature:

## Dark theme

## Authentication

## Dashboard

# Do not access dashboard page without login.

# user can register/login

# user can donate

# A Volunteer fil the submission form and join us.

# A donor create post for his donor review.

# Top donor list page

# Pie & Bar chart implementation to show our success, complete project, due, total donors and total user.

## Donation Crud Operation

# User can create/update/delete Donations post.

# User can comment in community wall page and express his gratitude

## Full mobile first responsive UI design in fixel perfect.

### Client side url link:https://aidurgency.vercel.app/

### Server side url link: https://aidurgency-server.vercel.app/

#### Video url link:https://www.awesomescreenshot.com/video/25413142?key=6dcf3d3a12e50a25ff00246e7b0ab61a



This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
