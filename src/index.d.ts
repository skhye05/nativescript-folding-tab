import { FoldingTabBase, FoldingTabItemBase, OnItemSelectedEventData } from './folding-tab.common';
export declare class FoldingTab extends FoldingTabBase {
  nativeView: any;
  readonly android: any;
  createNativeView(): Object;
  createTabs(items: FoldingTabItem[]): void;
  protected selectItem(index: number): void;
  initNativeView(): void;
  disposeNativeView(): void;
}
export declare class FoldingTabItem extends FoldingTabItemBase {
  constructor(title: string, icon: string);
}
