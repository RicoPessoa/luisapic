import { NgModule } from '@angular/core';
import { DrankeOnHoverDirective } from './darken-on-hover.directive';

@NgModule({
    declarations: [
        DrankeOnHoverDirective
    ],
    exports: [
        DrankeOnHoverDirective
    ]
})
export class DarkenOnHoverModule{}
