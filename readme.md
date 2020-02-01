# React Flagon

A vessel for your React flags.

## Usage

T.B.C.

### Dev notes

If you `yarn link` / `npm link` this into a local project, you may run into a "*Rule of Hooks*" violation and get an error, such as `Hooks can only be called inside the body of a function component`. This is because there are 2 versions of React.

**The workaround for this is:**

Assuming `my-app` and `react-flagon` are sibling folders, run `yarn link ../my-app/node_modules/react` (or `npm link ...`) from `react-flagon`. This should make the `react-flagon` use the application’s own React copy.

*For more info see [this React Issue](https://github.com/facebook/react/issues/15050).*
