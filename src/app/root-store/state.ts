import { ConstructionsState } from './constructions-store';
import { MarkedReportsState } from './marked-reports-store';

export interface State {
  reports: MarkedReportsState.State;
  constructions: ConstructionsState.State;
}
