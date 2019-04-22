# Nativescript Folding Tab ![apple](https://cdn3.iconfinder.com/data/icons/picons-social/57/16-apple-32.png) ![android](https://cdn4.iconfinder.com/data/icons/logos-3/228/android-32.png) 

[![npm](https://img.shields.io/npm/v/nativescript-folding-tab.svg)](https://www.npmjs.com/package/nativescript-folding-tab)
[![npm](https://img.shields.io/npm/dt/nativescript-folding-tab.svg?label=npm%20downloads)](https://www.npmjs.com/package/nativescript-folding-tab)
[![Build Status][build-status]][build-url]

 [build-status]:https://travis-ci.org/skhye05/nativescript-folding-tab.svg?branch=master
 [build-url]:https://travis-ci.org/skhye05/nativescript-folding-tab

## Overview

 Nativescript Folding Tab is a navigation tab plugins which provides beautiful navigations.

 <p>
  <img src="https://raw.githubusercontent.com/skhye05/NativeScript-folding-tab/master/ios.gif"  width="300"/>
  <img src="https://raw.githubusercontent.com/skhye05/NativeScript-folding-tab/master/android.gif" width="300"/>
</p>

## Installation

```javascript
tns plugin add nativescript-folding-tab
```

## Usage

### <img src="https://raw.githubusercontent.com/skhye05/NativeScript-folding-tab/master/res/typescript.png" width="20"/> TypeScript

#### xml

```xml
```

#### main-page.ts

```typescript

```

#### main-view-model.ts

```typescript

```

### <img src="https://raw.githubusercontent.com/skhye05/nativescript-folding-tab/master/res/angular.png" width="20"/> Angular

#### app.module.ts

```typescript

```

#### your.component.ts

```typescript

```

#### your.component.html

```html

```

### <img src="https://raw.githubusercontent.com/skhye05/NativeScript-folding-tab/master/res/vue.png" width="20"/> Vue

#### app.js

```javascript

import FoldingTab from "nativescript-folding-tab/vue";

Vue.use(FoldingTab);

new Vue({
  ...
}).$start();

```

#### your-component.vue

```html
```

## API

### FoldingTab

#### Properties

| Property        | Css Name                       | Type                    | Description                                  | Platforms                                                                                                                                                        |
| --------------- | ------------------------------ | ----------------------- | -------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| items           | none                           | `Array<FoldingTabItem>` | Array containing the tabs for the FoldingTab | ![android](https://cdn4.iconfinder.com/data/icons/logos-3/228/android-16.png)  ![apple](https://cdn3.iconfinder.com/data/icons/picons-social/57/16-apple-16.png) |
| backgroundColor | `folding-tab-background-color` | `string`                | Set Tab Bar Background Color                 | ![android](https://cdn4.iconfinder.com/data/icons/logos-3/228/android-16.png)  ![apple](https://cdn3.iconfinder.com/data/icons/picons-social/57/16-apple-16.png) |
| radius          | `folding-tab-radius`           | `number`                | Set Tab Bar radius                           | ![android](https://cdn4.iconfinder.com/data/icons/logos-3/228/android-16.png)  ![apple](https://cdn3.iconfinder.com/data/icons/picons-social/57/16-apple-16.png) |


#### Events

| Property    | Type                                           | Description                                                                         | Platforms                                                                                                                                                        |
| ----------- | ---------------------------------------------- | ----------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| tabSelected | `function ($event: OnTabSelectedEventData) {}` | Event get trigger every time the user select a new tab that receive an event object | ![android](https://cdn4.iconfinder.com/data/icons/logos-3/228/android-16.png)  ![apple](https://cdn3.iconfinder.com/data/icons/picons-social/57/16-apple-16.png) |

#### Methods

| Property                   | Type   | Description                   | Platforms                                                                                                                                                        |
| -------------------------- | ------ | ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `selectTab(index: number)` | `Void` | Select a tab programmatically | ![android](https://cdn4.iconfinder.com/data/icons/logos-3/228/android-16.png)  ![apple](https://cdn3.iconfinder.com/data/icons/picons-social/57/16-apple-16.png) |

### FoldingTabItem

#### Properties

| Property | Type     | Description        | Platforms                                                                                                                                                        |
| -------- | -------- | ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| title    | `string` | Select a tab title | ![android](https://cdn4.iconfinder.com/data/icons/logos-3/228/android-16.png)  ![apple](https://cdn3.iconfinder.com/data/icons/picons-social/57/16-apple-16.png) |
| icon     | `string` | Select a tab icon  | ![android](https://cdn4.iconfinder.com/data/icons/logos-3/228/android-16.png)  ![apple](https://cdn3.iconfinder.com/data/icons/picons-social/57/16-apple-16.png) |

## Author

Jonathan Mayunga, mayunga.j@gmail.com

## Credits

- For Android we're using the [OfficialFoldingTabBar.Android by Yalantis](https://github.com/Yalantis/OfficialFoldingTabBar.Android),
- For iOS [FoldingTabBar.iOS by Yalantis](https://github.com/Yalantis/FoldingTabBar.iOS).

## License

Apache License Version 2.0, January 2004
