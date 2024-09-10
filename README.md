# Rock of Ages Client with Vite+Tailwind CSS

This project was created with a tool named Vite. The React code is exactly like the code that you learned how to write. The only difference is that your files will have the extension of **_.jsx_** instead of **_.js_**.

## Getting Started

1. Clone this repository.
2. `cd` to the project directory.
3. Run `npm install`
4. Run `npm run dev`

You should see output in your terminal like this.

```txt
VITE v4.4.9  ready in 3531 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help
```

Open the URL that you see in your browser.

## How This Was Generated

To use Vite+Tailwind in any future project, here are the steps you can follow.

1. `mkdir rock-client && cd rock-client`
2. `npm create vite@latest . -- --template react`
3. `npm install -D tailwindcss postcss autoprefixer react-router-dom`
4. `npx tailwindcss init -p`
5. Replace the contents of `tailwind.config.js` with the following.
   ```js
   /** @type {import('tailwindcss').Config} */
   export default {
     content: [
       "./index.html",
       "./src/**/*.{js,ts,jsx,tsx}",
     ],
     theme: {
       extend: {},
     },
     plugins: [],
   }
   ```
6. Replace the contents of `index.css`
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```
7. Run with `npm run dev`

## Reference Links

- [Getting Started with Vite](https://vitejs.dev/guide/)
- [Install Tailwind CSS with Vite](https://tailwindcss.com/docs/guides/vite)
