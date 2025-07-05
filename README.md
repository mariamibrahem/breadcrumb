# Breadcrumb

A simple and customizable React breadcrumb navigation component.

## Installation

```bash
npm install vctors-breadcrumb
# or
yarn add vctors-breadcrumb
```

## Usage

```jsx
import { BreadCrumbs } from "vctors-breadcrumb";
import "vctors-breadcrumb/dist/styles.css"; // Import styles

function MyPage() {
  return (
    <BreadCrumbs
      onFirstItemPress={() => console.log("Home clicked")}
      firstItemText="Home"
      firstItemIcon="/path/to/home-icon.svg" // Optional
      onSecondItemPress={() => console.log("First level clicked")}
      secondItemText="Products"
      secondItemIcon="/path/to/arrow.svg" // Optional
      showSecondItem={true}
      thirdItemText="Product Details" // Optional
      showThirdItem={true} // Optional
      onThirdItemPress={() => console.log("Third item clicked")} // Optional
    />
  );
}
```

## Props

| Prop              | Type       | Required | Description                                 |
| ----------------- | ---------- | -------- | ------------------------------------------- |
| onFirstItemPress  | () => void | Yes      | Function called when first item is clicked  |
| firstItemText     | string     | Yes      | Text for the first navigation item          |
| firstItemIcon     | string     | No       | Icon URL for the first item                 |
| onSecondItemPress | () => void | Yes      | Function called when second item is clicked |
| secondItemText    | string     | Yes      | Text for the second navigation item         |
| secondItemIcon    | string     | No       | Icon URL for the second item                |
| showSecondItem    | boolean    | Yes      | Whether to show the second navigation item  |
| thirdItemText     | string     | No       | Text for the third navigation item          |
| thirdItemIcon     | string     | No       | Icon URL for the third item                 |
| showThirdItem     | boolean    | No       | Whether to show the third navigation item   |
| onThirdItemPress  | () => void | No       | Function called when third item is clicked  |

## License

MIT
