import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { featureReducer } from './reducer';
import { MarkedReportsEffects } from './effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('marked-reports', featureReducer),
    EffectsModule.forFeature([MarkedReportsEffects]),
  ],
  providers: [MarkedReportsEffects],
})
export class MarkedReportsStoreModule {}
