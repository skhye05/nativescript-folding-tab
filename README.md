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

#### main-page.xml

```xml
<Page xmlns="http://schemas.nativescript.org/tns.xsd" loaded="pageLoaded" class="page" 
  xmlns:ui="nativescript-folding-tab">
  <ActionBar title="{{ title }}" flat="true">
  </ActionBar>
  <GridLayout class="p-20">
    <StackLayout class="p-t-20" verticalAlignment="top">
      <Image class="p-10" src="res://{{icon}}" width="100" height="100"/>
      <Label class="text-center h2" text="{{ title }} tab has been selected!" textWrap="true"/>
    </StackLayout>
    <ui:FoldingTab items="{{ items }}" backgroundColor="#B36A5E" indicator="#EED7C5" verticalAlignment="bottom"/>
  </GridLayout>
</Page>
```

#### main-page.ts

```typescript
import * as observable from 'tns-core-modules/data/observable';
import * as pages from 'tns-core-modules/ui/page';
import { HelloWorldModel } from './main-view-model';
import { FoldingTab } from 'nativescript-folding-tab';

let vm = new HelloWorldModel();

// Event handler for Page 'loaded' event attached in main-page.xml
export function pageLoaded(args: observable.EventData) {
    // Get the event sender
    let page = <pages.Page>args.object;
    page.bindingContext = vm;
}

export function onFoldingTabLoaded(args) {
    let folding: FoldingTab = args.object;
    folding.on('tabSelected', tabSelected);
}

export function tabSelected(args: any) {
    vm.set('title', vm.items[args.newIndex].title);
    vm.set('icon', vm.items[args.newIndex].icon);
    console.log('tab selected ' + this.items[args.newIndex].title + ' at index ' + args.newIndex);
}

```

#### main-view-model.ts

```typescript
import { Observable } from 'tns-core-modules/data/observable';
import { FoldingTabItem } from 'nativescript-folding-tab';

export class HelloWorldModel extends Observable {

  public items: FoldingTabItem[];
  public title: string = 'Nearby';
  public icon: string = 'ic_nearby_icon';

  constructor() {
    super();

    this.items = [
      new FoldingTabItem('Nearby', 'ic_nearby_icon'),
      new FoldingTabItem('Chat', 'ic_new_chat_icon'),
      new FoldingTabItem('Profile', 'ic_profile_icon'),
      new FoldingTabItem('Settings', 'ic_settings_icon')
    ];
  }
}

```

### <img src="https://raw.githubusercontent.com/skhye05/nativescript-folding-tab/master/res/angular.png" width="20"/> Angular

#### app.module.ts

```typescript
...
import { FoldingTabModule } from "nativescript-folding-tab/angular";

@NgModule({
    ...
    imports: [
        ...
        FoldingTabModule
        ...
    ],
    ...
})
export class AppModule { }

```

#### your.component.ts

```typescript
import { Component, OnInit } from "@angular/core";
import { FoldingTabItem, } from 'nativescript-folding-tab';

@Component({
...
})
export class YourComponent implements OnInit {

    public items: FoldingTabItem[];
    public title: string = 'Nearby';
    public icon: string = 'ic_nearby_icon';

    constructor() {
        ...
    }

    ngOnInit(): void {
        this.items = [
            new FoldingTabItem('Nearby', 'ic_nearby_icon'),
            new FoldingTabItem('Chat', 'ic_new_chat_icon'),
            new FoldingTabItem('Profile', 'ic_profile_icon'),
            new FoldingTabItem('Settings', 'ic_settings_icon')
        ];
    }

    public onTabSelected(args: any): void {
        this.title = this.items[args.newIndex].title;
        this.icon = this.items[args.newIndex].icon;
        console.log('tab selected ' + this.items[args.newIndex].title + ' at index ' + args.newIndex);
    }
}
```

#### your.component.html

```html
<ActionBar class="action-bar" flat="true">
    <Label class="action-bar-title bold" [text]="title"></Label>
</ActionBar>

<GridLayout class="page p-20">
    <StackLayout class="p-t-20" verticalAlignment="top">
        <Image class="p-10" src="res://{{icon}}"  width="100" height="100"></Image>
        <Label class="text-center h2" text="{{ title }} tab has been selected!" textWrap="true"></Label>
    </StackLayout>

    <FoldingTab [items]="items" backgroundColor="#684756" indicator="#EED7C5" verticalAlignment="bottom"
        (tabSelected)="onTabSelected($event)"></FoldingTab>
</GridLayout>

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
