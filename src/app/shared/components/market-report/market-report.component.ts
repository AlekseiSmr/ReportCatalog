import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { RootStoreState, MarkedReportsSelectors } from 'src/app/root-store';
import { ReportsRequestAction } from 'src/app/root-store/marked-reports-store/actions';
import { Observable } from 'rxjs';
import { MarkedReport } from '../../_shared';

@Component({
  selector: 'app-market-report',
  templateUrl: './market-report.component.html',
  styleUrls: ['./market-report.component.scss'],
})
export class MarketReportComponent implements OnInit {
  reports$: Observable<MarkedReport[]>;

  constructor(private store$: Store<RootStoreState.State>) {}

  ngOnInit() {
    this.store$.dispatch(new ReportsRequestAction({ query: 'all' }));
    this.reports$ = this.store$.select(MarkedReportsSelectors.selectAllItems);
  }
}
