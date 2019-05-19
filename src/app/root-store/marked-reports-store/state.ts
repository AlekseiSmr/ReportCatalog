import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { MarkedReport } from 'src/app/shared/_shared';

export const featureAdapter: EntityAdapter<MarkedReport> = createEntityAdapter<
  MarkedReport
>({
  selectId: model => model.id,
  sortComparer: (a: MarkedReport, b: MarkedReport): number => {
    if (a.id < b.id) {
      return -1;
    } else if (a.id === b.id) {
      return 0;
    } else if (a.id > b.id) {
      return 1;
    }
  },
});

export interface State extends EntityState<MarkedReport> {
  reports: MarkedReport[];
  isLoading?: boolean;
  error?: any;
}

export const initialState: State = featureAdapter.getInitialState({
  reports: [],
  isLoading: false,
  error: null,
});
