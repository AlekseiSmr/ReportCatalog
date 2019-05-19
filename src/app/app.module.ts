import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './shared/components/home/home.component';
import { TileComponent } from './shared/components/home/tile/tile.component';
import { NewConstructionComponent } from './shared/components/new-construction/new-construction.component';
import { MarketReportComponent } from './shared/components/market-report/market-report.component';
import { RootStoreModule } from './root-store';
import { HttpClientModule } from '@angular/common/http';
import { LinksComponent } from './shared/components/links/links.component';
import { LinkComponent } from './shared/components/link/link.component';
import { SettingsComponent } from './shared/components/settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TileComponent,
    NewConstructionComponent,
    MarketReportComponent,
    LinksComponent,
    LinkComponent,
    SettingsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RootStoreModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
