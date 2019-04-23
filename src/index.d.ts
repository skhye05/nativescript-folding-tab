import { EventData } from 'tns-core-modules/data/observable';
import { AddChildFromBuilder, View } from 'tns-core-modules/ui/core/view';

export interface OnItemSelectedEventData extends EventData {
  object: FoldingTabBase;
  oldIndex: number;
  newIndex: number;
}

export declare abstract class FoldingTabBase extends View {
  items: FoldingTabItemBase[];
  selectedTabIndex: number;
  backgroundColor: string;
  selectionColor: string;
  mainIcon: string;
  onItemSelected(index: number): void;
  protected abstract selectItem(index: number): void;
}

export declare class FoldingTab extends FoldingTabBase {
  nativeView: any;
  readonly android: any;
  createNativeView(): Object;
  createTabs(items: FoldingTabItem[]): void;
  protected selectItem(index: number): void;
  initNativeView(): void;
  disposeNativeView(): void;
}

export declare class FoldingTabItemBase {
  constructor(title: string, icon: string);
  private _title;
  title: string;
  private _icon;
  icon: string;
}

export declare class FoldingTabItem extends FoldingTabItemBase {
  constructor(title: string, icon: string);
}
