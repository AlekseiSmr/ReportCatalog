import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Construction } from '../../_shared';
import { ConstructionsSelectors, RootStoreState } from 'src/app/root-store';
import { Store } from '@ngrx/store';
import { ConstructionRequestAction } from 'src/app/root-store/constructions-store/actions';

@Component({
  selector: 'app-new-construction',
  templateUrl: './new-construction.component.html',
  styleUrls: ['./new-construction.component.scss'],
})
export class NewConstructionComponent implements OnInit {
  constructions$: Observable<Construction[]>;

  constructor(private store$: Store<RootStoreState.State>) {}

  ngOnInit() {
    this.store$.dispatch(new ConstructionRequestAction({ query: 'all' }));
    this.constructions$ = this.store$.select(
      ConstructionsSelectors.selectAllItems
    );
  }
}
