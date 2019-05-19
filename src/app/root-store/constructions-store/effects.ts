import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { Observable, of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import * as featureActions from './actions';
import { ConstructionsService } from 'src/app/shared/_shared';

@Injectable()
export class ConstructionsStoreEffects {
  constructor(
    private constructionsService: ConstructionsService,
    private actions$: Actions
  ) {}

  @Effect()
  constructionsRequestEffect$: Observable<Action> = this.actions$.pipe(
    ofType<featureActions.ConstructionRequestAction>(
      featureActions.ActionTypes.CONSTRUCTIONS_REQUEST
    ),
    switchMap(action =>
      this.constructionsService.get(action.payload.query).pipe(
        map(items => {
          return new featureActions.ConstructionSuccessAction({ items });
        }),
        catchError(error =>
          observableOf(new featureActions.ConstructionFailureAction({ error }))
        )
      )
    )
  );
}
