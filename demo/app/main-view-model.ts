import { Observable } from 'tns-core-modules/data/observable';
import { FoldingTabItem } from 'nativescript-folding-tab';

export class HelloWorldModel extends Observable {

  public items: FoldingTabItem[];

  constructor() {
    super();

    this.items =[
      new FoldingTabItem('Nearby', 'ic_nearby_icon'),
      new FoldingTabItem('Chat', 'ic_new_chat_icon'),
      new FoldingTabItem('Profile', 'ic_profile_icon'),
      new FoldingTabItem('Settings', 'ic_settings_icon')
    ];
  }
}
