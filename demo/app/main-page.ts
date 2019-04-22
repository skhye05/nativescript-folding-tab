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
    // vm.set('title', args.name.toUpperCase() + ' TAB!');
    // vm.set('bg', vm.items[args.position].colorInactive);
    console.log('tab selected ' + vm.items[args.index].title + ' at index ' + args.index);
}