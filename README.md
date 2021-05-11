# Minima UI

This is a library of reusable React UI components created with simplicity, customization and accessibility in mind.

The library is written in TypeScript. It utilizes styled-components for styling and Jest for testing.

## Components

The library includes the following components:

#### Inputs
1. [Button](https://asuetin.github.io/minima-ui/?path=/docs/components-inputs-button--basic) - a basic button;
2. [CheckBox](https://asuetin.github.io/minima-ui/?path=/docs/components-inputs-checkbox--basic) - a basic checkbox;
3. [Switch](https://asuetin.github.io/minima-ui/?path=/docs/components-inputs-switch--basic) - a button that allows the user to switch between "on" and "off" states;
4. [TextInput](https://asuetin.github.io/minima-ui/?path=/docs/components-inputs-textinput--basic) - a text input component that support single- and multi-line modes;
5. [ComboBox](https://asuetin.github.io/minima-ui/?path=/docs/components-inputs-combobox--basic) - a control allowing the user to search and select among a list of options;
6. [RadioGroup](https://asuetin.github.io/minima-ui/?path=/docs/components-inputs-radiogroup--basic) - a control allowing the user select an option among a list of radio buttons;
7. [Slider](https://asuetin.github.io/minima-ui/?path=/docs/components-inputs-slider--basic) - a slider with multi-thumb support.

#### Display
1. [Icon](https://asuetin.github.io/minima-ui/?path=/docs/components-display-icon--basic) - an SVG icon component that is easily scalable and includes a few preset icons;
2. [ProgressBar](https://asuetin.github.io/minima-ui/?path=/docs/components-display-progressbar--basic) - a basic progress bar.

#### Utility
1. [List](https://asuetin.github.io/minima-ui/?path=/docs/components-utility-list--basic) - a basic virtualized list;
2. [Table](https://asuetin.github.io/minima-ui/?path=/docs/components-utility-table--basic) - a virtualized table with sorting and column resizing that allows custom cell renderers;
3. [Tooltip](https://asuetin.github.io/minima-ui/?path=/docs/components-utility-tooltip--basic) - a wrapper around an element that shows a tooltip on hover;
4. [Modal](https://asuetin.github.io/minima-ui/?path=/docs/components-utility-modal--basic) - a modal dialog.

## Installation and usage

To install minima-ui, use the following command:

	npm i minima-ui

To use the library in your app, import one or more of the included components:
```tsx
import {useState} from 'react';

import {ComboBox} from 'minima-ui';

const App = (): JSX.Element => {
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

The GitHub Page with the Storybook is available [here.](https://asuetin.github.io/minima-ui/?path=/docs/introduction--page)
