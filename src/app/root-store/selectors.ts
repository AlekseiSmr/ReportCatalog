import { createSelector, MemoizedSelector } from '@ngrx/store';
import { MarkedReportsSelectors } from './marked-reports-store';
import { ConstructionsSelectors } from './constructions-store';

export const selectMarkedReportsError: MemoizedSelector<
  object,
  string
> = createSelector(
  MarkedReportsSelectors.selectError,
  (error: string) => {
    return error;
  }
);

export const selectMarkedReportsIsLoading: MemoizedSelector<
  object,
  boolean
> = createSelector(
  MarkedReportsSelectors.selectIsLoading,
  (item: boolean) => {
    return item;
  }
);

export const selectConstructionsError: MemoizedSelector<
  object,
  string
> = createSelector(
  ConstructionsSelectors.selectError,
  (error: string) => {
    return error;
  }
);

export const selectConstructionsIsLoading: MemoizedSelector<
  object,
  boolean
> = createSelector(
  ConstructionsSelectors.selectIsLoading,
  (item: boolean) => {
    return item;
  }
);
