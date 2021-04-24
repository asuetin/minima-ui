# ui-components

This is a library of reusable React UI components created with simplicity, customization and accessibility in mind.

The library is written in TypeScript. It utilizes styled-components for styling and Jest for testing.

## Components

The library includes the following components:

1. [Icon](https://asuetin.github.io/ui-components/?path=/docs/components-icon--basic) - an SVG icon component that is easily scalable and includes a few preset icons;
2. [Button](https://asuetin.github.io/ui-components/?path=/docs/components-button--basic) - a basic button;
3. [Switch](https://asuetin.github.io/ui-components/?path=/docs/components-switch--basic) - a button that allows the user to switch between "on" and "off" states;
4. [List](https://asuetin.github.io/ui-components/?path=/docs/components-list--basic) - a basic virtualized list;
5. [ComboBox](https://asuetin.github.io/ui-components/?path=/docs/components-combobox--basic) - a control allowing the user to search and select among a list of options.

Each component, in addition to the default export of the component itself, also exports the props type and all of its styled components:

```JSX
import ComboBox from './ComboBox';
import Styles from './ComboBox.styles';

export default ComboBox;
export {ComboBoxProps} from './ComboBox';
export {Styles as ComboBoxStyles};
```

## Installation and usage

To install ui-components, use the following command:

	npm i https://github.com/asuetin/ui-components

To use the library in your app, import one or more of the included components:
```JSX
import {FC, useState} from 'react';

import {ComboBox} from 'ui-components';

const App: FC = () => {
  const [value, setValue] = useState(0);

  return <div>
    <ComboBox
      options={Array.from({length: 1000}, (v, i) => ({
        value: i,
        label: `Option ${i+1}`
      }))}
      value={value}
      onChange={setValue}
    />
  </div>;
};

export default App;
```

## Documentation

The library uses Storybook for documentation.

The GitHub Page with the Storybook is available [here.](https://asuetin.github.io/ui-components/?path=/docs/introduction--page)
