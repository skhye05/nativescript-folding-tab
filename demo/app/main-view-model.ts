import { Observable } from 'tns-core-modules/data/observable';
import { FoldingTab } from 'nativescript-folding-tab';

export class HelloWorldModel extends Observable {
  public message: string;
  private foldingTab: FoldingTab;

  constructor() {
    super();

    this.foldingTab = new FoldingTab();
    this.message = this.foldingTab.message;
  }
}
