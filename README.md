# React Bootstrap Starter Project

A simple, clean starter project with React and Bootstrap 5.

The public pages.
![Screenshot of a public page](screenshot_public.png)

The restricted admin console.
![Screenshot of the admin console](screenshot_console.png)

## Motivation

Learning React through this project and motivated to create a boilerplate project that I (or anyone) can use. Here are some of the design principles for this project.

* Keep it simple.
* Use it for quick prototyping yet extensible enough for a production-ready project.
* Leverage `eslint` and `prettier` with the right amount of plugins and mix of configurations to maximize for developer productivity and code cleanliness.

## Setup

1. Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

   ```bash
   $ yarn start
   ```

   The page will reload if you make edits. You will also see any lint errors in the console.

1. Launches the test runner in the interactive watch mode.

   ```bash
   $ yarn test
   ```

1. Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

   ```bash
   $ yarn build
   ```

## Notes

### React Router v6

This project uses React Router v6, which I think has a clean programming model for routing. The downside is that it is still in beta. Hopefully, the library will be officially released by the end of 2021.

There seems to be in the `Routes` component from `react-router-dom`. I can't seem to get `Routes` to recognize my custom Route component that I wrote for encapsulating the auth logic. The workaround is to embed the logic in the `ConsoleLayout`.

## Credits

* [Bootstrap 5 Examples](https://getbootstrap.com/docs/5.1/examples) - Used many of the examples on Bootstrap 5 website on this project.
* [Form validation with React Hook](https://felixgerschau.com/react-hooks-form-validation-typescript/) - Borrowed code to write a custom React Hook to handle a form, including validation.

## Reference

* [React Router v6 Preview](https://reacttraining.com/blog/react-router-v6-pre/)
* [Upgrade React Router v5 to v6](https://morioh.com/p/995f1244f33b)
* [React Router v6 Reference](https://github.com/remix-run/react-router/blob/c13b66939ef48eacf7067f7aec4752777be8b17c/docs/api-reference.md)
