import { FoldingTabBase, FoldingTabItemBase, itemsProperty, mainIconProperty, radiusProperty, backgroundColorProperty } from './folding-tab.common';
import * as app from 'tns-core-modules/application';
import * as utils from 'tns-core-modules/utils/utils';
import { Color } from 'tns-core-modules/color/color';

declare var client: any;

export class FoldingTab extends FoldingTabBase {

    nativeView: any;


    private density;

    get android(): any {
        return this.nativeView;
    }

    /**
     * Creates new native Folding Tab Bar.
     */
    public createNativeView(): Object {
        const owner = new WeakRef(this);

        // android.os.Environment.getExternalStoragePublicDirectory(android.os.Environment.DIRECTORY_DOWNLOADS).toString();

        const tab = new client.yalantis.com.foldingtabbar.FoldingTabBar(this._context);

        tab.setOnFoldingItemClickListener(new client.yalantis.com.foldingtabbar.FoldingTabBar.OnFoldingItemSelectedListener({
            onFoldingItemSelected: (item: android.view.MenuItem) => {

                const index = owner.get().items.findIndex(v => {
                    return utils.ad.resources.getId(':drawable/' + v.icon) === item.getItemId();
                });

                owner.get().onItemSelected(index);
                return false;
            }
        }));

        tab.setOnMainButtonClickListener(new client.yalantis.com.foldingtabbar.FoldingTabBar.OnMainButtonClickedListener({
            onMainButtonClicked: () => {
                owner.get().onMainTapped();
            }
        }));

        this.density = this._context.getResources().getDisplayMetrics().density;
        const dp = 70 * this.density;

        const layoutParams = new android.widget.LinearLayout.LayoutParams(dp, dp);
        tab.setLayoutParams(layoutParams);

        return tab;
    }

    createTabs(items: FoldingTabItem[]) {
        // if (!this.items) { this.items = items; }
        const menu = new android.support.v7.view.menu.MenuBuilder(app.android.currentContext);
        for (let item of items) {
            let icon = utils.ad.resources.getId(':drawable/' + item.icon);
            menu.add(item.title).setIcon(icon);
        }

        this.nativeView.initTabBar(menu);
        const dp = 70 * this.density;
        this.nativeView.setRadius(dp);
    }

    protected selectItem(index: number): void {
        this.nativeView.select(index);
    }

    /**
     * Initializes properties/listeners of the native view.
     */
    initNativeView(): void {
        (<any>this.nativeView).owner = this;
        super.initNativeView();
        const icon = utils.ad.resources.getId(':drawable/' + this.mainIcon);
        this.nativeView.setBgColor(new Color("red").android);
        this.nativeView.setRadius(100);
        this.nativeView.setMainIcon(icon);

    }

    disposeNativeView(): void {
        // Remove reference from native view to this instance.
        (<any>this.nativeView).owner = null;
        super.disposeNativeView();
    }

    /**
     * Get or Set Items Property
     */
    [itemsProperty.getDefault](): FoldingTabItem[] {
        return null;
    }

    [itemsProperty.setNative](value: FoldingTabItem[]) {
        this.createTabs(value);
    }

    /**
     * Set Main Icon Property
     */
    [mainIconProperty.setNative](value: number) {
        this.nativeView.setMainIcon(value);
    }

    /**
     * Set Background Property
     */
    [backgroundColorProperty.setNative](value: Color) {
        // this.nativeView.setBgColor(value.android);
    }

    /**
    * Set Radius Property
    */
    [radiusProperty.setNative](value: number) {
        this.nativeView.setRadius(value);
    }
}

export class FoldingTabItem extends FoldingTabItemBase {
    constructor(title: string, icon: string) {
        super(title, icon);
    }
}