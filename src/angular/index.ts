import { NgModule, Directive } from '@angular/core';
import { registerElement } from 'nativescript-angular/element-registry';

@Directive({
    selector: 'FoldingTab'
})
export class FoldingTabDirective { }

@NgModule({
    declarations: [FoldingTabDirective],
    exports: [FoldingTabDirective],
})
export class FoldingTabModule { }

registerElement('FoldingTab', () => require('../').FoldingTab);