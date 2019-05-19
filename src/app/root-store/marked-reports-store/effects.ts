import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { Observable, of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import * as featureActions from './actions';
import { MarkedReportsService } from 'src/app/shared/_shared';

@Injectable()
export class MarkedReportsEffects {
  constructor(
    private markedReportsService: MarkedReportsService,
    private actions$: Actions
  ) {}

  @Effect()
  markedReportsRequestEffect$: Observable<Action> = this.actions$.pipe(
    ofType<featureActions.ReportsRequestAction>(
      featureActions.ActionTypes.REPORTS_REQUEST
    ),
    switchMap(action =>
      this.markedReportsService.get(action.payload.query).pipe(
        map(items => {
          return new featureActions.ReportsSuccessAction({ items });
        }),
        catchError(error =>
          observableOf(new featureActions.ReportsFailureAction({ error }))
        )
      )
    )
  );
}
