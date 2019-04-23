import * as app from 'tns-core-modules/application';
import * as utils from 'tns-core-modules/utils/utils';
import { View, Style, Property, CssProperty, isIOS } from 'tns-core-modules/ui/core/view';
import { EventData } from 'tns-core-modules/data/observable';
import { booleanConverter, Color } from 'tns-core-modules/ui/core/view-base';


/**
 * Event interface for tab selected event
 */
export interface OnItemSelectedEventData extends EventData {
  object: FoldingTabBase;
  oldIndex: number;
  newIndex: number;
}

export abstract class FoldingTabBase extends View {
  /**
   * Get or Set Tab Items
   */
  public items: FoldingTabItemBase[];

  /**
   * Get or set the current selected tab index
   */
  public selectedTabIndex: number = 0;

  /**
  * Get or set the backgroundColor of the FoldingTab
  */
  public backgroundColor: string = '#4BD7BF';

  /**
   * Get or set the selectionColor of the FoldingTab
   */
  public selectionColor: string = '#5E5B95';

  /**
   * Get or set the main icon of the FoldingTab
   */
  public mainIcon: string = 'ic_action_plus';


  /**
   * Method to raise event when a item is selected
   */
  public onItemSelected(index: number) {
    let eventData: OnItemSelectedEventData = {
      eventName: 'tabSelected',
      object: this,
      oldIndex: this.selectedTabIndex || 0,
      newIndex: index
    };
    this.selectedTabIndex = index;
    this.notify(eventData);
  }


  /**
   * Method to raise event when the main icon is clicked
   */
  public onMainTapped() {
    let eventData: EventData = {
      eventName: 'tabMainTapped',
      object: this
    };
    this.notify(eventData);
  }

  /**
   * Method allowing to manually select a tab
   */
  protected abstract selectItem(index: number): void;

}

/**
 * Define Items as Property
 */
export const itemsProperty = new Property<FoldingTabBase, FoldingTabItemBase[]>(
  {
    name: 'items',
    equalityComparer: (a: any[], b: any[]) => !a && !b && a.length === b.length
  }
);

itemsProperty.register(FoldingTabBase);

/**
 * Define Main Icon as Property
 */
export const mainIconProperty = new Property<FoldingTabBase, number>(
  {
    name: 'mainIcon',
    valueConverter: v => {
      if (isIOS) {
        return null;
      } else {
        return utils.ad.resources.getId(':drawable/' + v);
      }
    }
  }
);

mainIconProperty.register(FoldingTabBase);

/**
 * Define BackgroundColor as Property and css Style
 */
export const backgroundColorProperty = new Property<FoldingTabBase, Color>(
  {
    name: 'backgroundColor',
    equalityComparer: Color.equals,
    valueConverter: v => new Color(v)
  }
);

backgroundColorProperty.register(FoldingTabBase);

export const backgroundColorCssProperty = new CssProperty<Style, Color>(
  {
    name: 'foldingTabBackgroundColor',
    cssName: 'folding-tab-background-color',
    equalityComparer: Color.equals,
    valueConverter: v => new Color(v)
  }
);
backgroundColorCssProperty.register(Style);

/**
 * Define Border Radius as property and css
 */
export const radiusProperty = new Property<FoldingTabBase, number>(
  {
    name: 'radius',
    valueConverter: v => parseFloat(v)
  }
);

radiusProperty.register(FoldingTabBase);

export const radiusCssProperty = new CssProperty<Style, number>(
  {
    name: 'foldingTabRadius',
    cssName: 'folding-tab-radius',
    valueConverter: v => parseFloat(v)
  }
);
radiusCssProperty.register(Style);

/**
 * Define indicator Color as property and css
 */
export const indicatorProperty = new Property<FoldingTabBase, Color>(
  {
    name: 'indicator',
    equalityComparer: Color.equals,
    valueConverter: v => new Color(v)
  }
);

indicatorProperty.register(FoldingTabBase);

export const indicatorCssProperty = new CssProperty<Style, Color>(
  {
    name: 'foldingTabIndicator',
    cssName: 'folding-tab-indicator',
    equalityComparer: Color.equals,
    valueConverter: v => new Color(v)
  }
);
indicatorCssProperty.register(Style);

/**
 * Folding Tab Bar Item
 */
export class FoldingTabItemBase {

  constructor(title: string, icon: string) {
    this._title = title;
    this._icon = icon;
  }

  private _title: string;

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    if (this.title !== value) {
      this._title = value;
    }
  }

  private _icon: string;

  get icon(): string {
    return this._icon;
  }

  set icon(value: string) {
    if (this._icon !== value) {
      this._icon = value;
    }
  }
}