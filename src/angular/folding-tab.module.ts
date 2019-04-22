import { NgModule } from '@angular/core';
import { registerElement } from 'nativescript-angular/element-registry';

import { DIRECTIVES } from './folding-tab.directive';

@NgModule({
    declarations: [DIRECTIVES],
    exports: [DIRECTIVES],
})
export class FoldingTabModule { }

registerElement('FoldingTab', () => require('../').FoldingTab);