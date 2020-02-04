# React Flagon

A vessel for your React flags.

## Install

`yarn add react-flagon` or `npm install --save react-flagon`

## Usage

Add the `FlagonModal` somewhere in your `App.js` file to be able to switch options on and off. And optionally the css file:

```jsx
import 'react-flagon/lib/main.css';
import { FlagonModal } from 'react-flagon';
const isDev = process.env.NODE_ENV === 'development';

. . .
<FlagonModal isDev={isDev} />
. . .
```

*Note: Pass in the `isDev` flag to ensure the component is only rendered in development environments.*

You can access the modal by pressing the backtick key ```(`)```. This is configurable in the `options` object.

Then use the `useFlagon` hook to retrieve a value:

```jsx
import { useFlagon } from 'react-flagon';

. . .
const { getValue } = useFlagon();
{getValue('isDebug') && <>Only shown when debug flag is checked</>}
. . .
```

## Options

### activationKey (string) [default = "`"]

Keyboard key to toggle visibility of modal. Defaults to backtick ```(`)```.

### localStorageKey (string) [default = "flagon"]

**Not implemented yet.** The key which settings are stored in localstorage. Defaults to `flagon`.

### hasStyles (boolean) [default = "true"]

`true` will use hashed classnames generated by css modules. `false` will render with human-readable classNames for fully custom styling. Defaults to `true`.

### modalTitle (string) [default = "Flagon"]

Heading / title displayed in modal. Defaults to `Flagon`.

### settings: (FlagonSetting[])

Array of settings objects. Defaults to a single item of `isDebug`.

#### key: (string)

The key the value will be stored under.

#### label: (string)

The label displayed in the modal.

#### type?: ("checkbox" | "text") [default = "text"]

The type of value to store. Currently only `text` for strings and `checkbox` for booleans are supported. Defaults to `text` (string).

#### initialValue: (boolean | string)

The initial value for  value will be stored under.

### Dev notes

If you `yarn link` / `npm link` this into a local project, you may run into a "*Rule of Hooks*" violation and get an error, such as `Hooks can only be called inside the body of a function component`. This is because there are 2 versions of React.

**The workaround for this is:**

Assuming `my-app` and `react-flagon` are sibling folders, run `yarn link ../my-app/node_modules/react` (or `npm link ...`) from `react-flagon`. This should make the `react-flagon` use the application’s own React copy.

*For more info see [this React Issue](https://github.com/facebook/react/issues/15050).*
