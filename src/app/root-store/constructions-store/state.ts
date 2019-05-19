import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Construction } from 'src/app/shared/_shared';

export const featureAdapter: EntityAdapter<Construction> = createEntityAdapter<
  Construction
>({
  selectId: model => model.id,
  sortComparer: (a: Construction, b: Construction): number => {
    if (a.id < b.id) {
      return -1;
    } else if (a.id === b.id) {
      return 0;
    } else if (a.id > b.id) {
      return 1;
    }
  },
});

export interface State extends EntityState<Construction> {
  constructions: Construction[];
  isLoading?: boolean;
  error?: any;
}

export const initialState: State = featureAdapter.getInitialState({
  constructions: [],
  isLoading: false,
  error: null,
});
