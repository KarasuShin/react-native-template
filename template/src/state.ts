import { proxy } from 'valtio';

export interface State {
  count: number;
}

const state: State = proxy({
  count: 0,
});

export default state;
