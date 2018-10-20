# React - Getting Started

Material Design Icons can be used in React with a custom component or with the one provided in this module.

```
npm install @mdi/react @mdi/js
```

<a href="https://templarian.github.io/@mdi/react/" class="btn btn-outline-primary">icon:teach Demo</a>
<a href="https://github.com/Templarian/MaterialDesign-React" class="btn btn-outline-secondary ml-2">icon:github-circle MaterialDesign-React on GitHub</a>

## Usage

```jsx
import React, { Component } from 'react'
import Icon from '@mdi/react'
import { mdiAccount } from '@mdi/js'

class App extends Component {
  render() {
    return (
      <Icon path={mdiAccount}
        size={1}
        horizontal
        vertical
        rotate={90}
        color="red"
        spin/>
    )
  }
} 
```

## Props

| Prop       | PropTypes      | Default  | Details |
|------------|----------------|----------|---------|
| path       | string         | required | SVG path data. Usually from @mdi/js |
| size       | number, string | null     | `{size * 1.5}rem`, `'1em'`, `'24px'` |
| horizontal | bool           | `false ` | Flip Horizontal |
| vertical   | bool           | `false`  | Flip Vertical |
| rotate     | number         | `0 `     | degrees `0` to `360` |
| color      | string         | `#000`   | `rgb()` / `rgba()` / `#000` |
| spin       | bool, number   | `false`  | `true = 2s`, `{spin}s` |

<blockquote class="alert alert-info">
  icon:information-outline Learn more about other features including the `Stack` component in the <a href="https://github.com/Templarian/MaterialDesign-React">Repo</a>.
</blockquote>

## Styling

Applying a `className` attribute is usually the easiest solution. The example below demonstrates using SCSS to style the icons.

In most cases it may be a good idea to set a base size. Assuming a `16px` base `font-size` in most themes applying `1.5rem` will make the icon a `24px`.

```scss
svg {
  width: 1.5rem;
}
```

For more specific styling apply classes. To make selection of layers easier use the `nth-child` selector.

```scss
// For <Icon className="custom-class" />
svg.custom-class {
  path {
    fill: blue;
  }
}
// For <Stack className="custom-class">
svg.custom-class {
  // First layer (behind)
  path:nth-child(1) {
    fill: blue;
  }
  // Second layer (infront)
  path:nth-child(2) {
    fill: red;
  }
}
```
