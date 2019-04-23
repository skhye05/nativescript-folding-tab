import { NgModule, Directive } from '@angular/core';

@Directive({
    selector: 'FoldingTab'
})
export declare class FoldingTabDirective {
}

@NgModule({
    declarations: [FoldingTabDirective],
    exports: [FoldingTabDirective],
})
export declare class FoldingTabModule {
}
