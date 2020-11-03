import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PhotoModule } from './photo/photo.module';
import { PhotoFromModule } from './photo-form/photo-form.module';
import { PhotoListMOdule } from './photo-list/photo-list.module';

@NgModule({
    imports: [
        PhotoModule,
        PhotoFromModule,
        PhotoListMOdule,
        CommonModule
    ]
})
export class PhotosModule {}