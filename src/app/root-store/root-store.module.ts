import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MarkedReportsStoreModule } from './marked-reports-store/marked-reports-store.module';
import { ConstructionsStoreModule } from './constructions-store/constructions-store.module';

@NgModule({
  imports: [
    CommonModule,
    MarkedReportsStoreModule,
    ConstructionsStoreModule,
    StoreModule.forRoot({ router: routerReducer }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
    }),
    StoreRouterConnectingModule.forRoot(),
  ],
  declarations: [],
})
export class RootStoreModule {}
