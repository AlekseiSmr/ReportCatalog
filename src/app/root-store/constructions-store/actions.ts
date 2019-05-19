import { Action } from '@ngrx/store';
import { Construction } from 'src/app/shared/_shared';

export enum ActionTypes {
  CONSTRUCTIONS_REQUEST = '[Get constructions] Request',
  CONSTRUCTIONS_FAILURE = '[Get constructions] Failure',
  CONSTRUCTIONS_SUCCESS = '[Get constructions] Success',
}

export class ConstructionRequestAction implements Action {
  constructor(public payload: { query: string }) {}
  readonly type = ActionTypes.CONSTRUCTIONS_REQUEST;
}

export class ConstructionFailureAction implements Action {
  constructor(public payload: { error: string }) {}
  readonly type = ActionTypes.CONSTRUCTIONS_FAILURE;
}

export class ConstructionSuccessAction implements Action {
  constructor(public payload: { items: Construction[] }) {}
  readonly type = ActionTypes.CONSTRUCTIONS_SUCCESS;
}

/* ACTIONS */
export type Actions =
  | ConstructionRequestAction
  | ConstructionFailureAction
  | ConstructionSuccessAction;
