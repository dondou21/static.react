# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

```
import { createRoot } from "react-dom/client"
const root = createRoot(document.getElementById("root"))

/**
Challenge: Project setup

- Create an App component in a separate App.jsx file which is a sibling
  to this index.jsx file.
- Create a `components` folder
- Create  the following components in separate files inside
  the components folder. In each one, just render an `h1` 
  with the name of the component (e.g. return <h1>Navbar goes here</h1>):
    - Navbar
    - Main
- Have App component import and render the Navbar and Main components
- Import and render the App component inside of index.jsx using ReactDOM
    - At this point you should have your "Navbar goes here" etc. showing up
      in the mini-browser.
- Go to Google fonts and get the "Inter" font with weights 400, 600, and 700.
  Put the `<links />` to those fonts ABOVE the style.css link in index.html.
  You may need to do some extra research to figure out how this 
  works if you haven't done it before.
*/

root.render(/*App component rendered here*/)

```
