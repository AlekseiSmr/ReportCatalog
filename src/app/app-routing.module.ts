import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { NewConstructionComponent } from './shared/components/new-construction/new-construction.component';
import { MarketReportComponent } from './shared/components/market-report/market-report.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'construction',
    component: NewConstructionComponent,
  },
  {
    path: 'market',
    component: MarketReportComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
