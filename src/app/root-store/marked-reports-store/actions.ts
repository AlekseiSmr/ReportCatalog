import { Action } from '@ngrx/store';
import { MarkedReport } from 'src/app/shared/_shared';

export enum ActionTypes {
  REPORTS_REQUEST = '[Get reports] Request',
  REPORTS_FAILURE = '[Get reports] Failure',
  REPORTS_SUCCESS = '[Get reports] Success',
}

export class ReportsRequestAction implements Action {
  constructor(public payload: { query: string }) {}
  readonly type = ActionTypes.REPORTS_REQUEST;
}

export class ReportsFailureAction implements Action {
  constructor(public payload: { error: string }) {}
  readonly type = ActionTypes.REPORTS_FAILURE;
}

export class ReportsSuccessAction implements Action {
  constructor(public payload: { items: MarkedReport[] }) {}
  readonly type = ActionTypes.REPORTS_SUCCESS;
}

/* ACTIONS */
export type Actions =
  | ReportsRequestAction
  | ReportsFailureAction
  | ReportsSuccessAction;
