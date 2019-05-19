import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { featureReducer } from './reducer';
import { ConstructionsStoreEffects } from './effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('constructions', featureReducer),
    EffectsModule.forFeature([ConstructionsStoreEffects]),
  ],
  providers: [ConstructionsStoreEffects],
})
export class ConstructionsStoreModule {}
