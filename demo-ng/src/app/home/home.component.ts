import { Component, OnInit } from "@angular/core";
import { FoldingTabItem } from 'nativescript-folding-tab';

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    public items: FoldingTabItem[];

    constructor() {
        // Use the component constructor to inject providers.
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
        // vm.set('title', args.name.toUpperCase() + ' TAB!');
        // vm.set('bg', vm.items[args.position].colorInactive);

        console.log('tab selected ' + this.items[args.index].title + ' at index ' + args.index);
    }
}
