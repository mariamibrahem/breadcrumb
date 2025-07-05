# Breadcrumb

A simple and customizable React breadcrumb navigation component.

## Installation

```bash
npm install breadcrumb
# or
yarn add breadcrumb
```

## Usage

```jsx
import { BreadCrumbs } from "breadcrumb";
import "breadcrumb/dist/styles.css"; // Import styles

function MyPage() {
  return (
    <BreadCrumbs
      onFirstItemPress={() => console.log("Home clicked")}
      onSecondItemPress={() => console.log("First level clicked")}
      firstItemText="Products"
      secondItemText="Product Details"
      showSecondItem={true}
    />
  );
}
```

## Props

| Prop              | Type       | Description                                         |
| ----------------- | ---------- | --------------------------------------------------- |
| onFirstItemPress  | () => void | Function called when the home icon is clicked       |
| onSecondItemPress | () => void | Function called when the first text item is clicked |
| firstItemText     | string     | Text for the first level navigation item            |
| secondItemText    | string     | Text for the second level navigation item           |
| showSecondItem    | boolean    | Whether to show the second level navigation item    |

## License

MIT
