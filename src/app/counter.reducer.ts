import { Action, createReducer, on} from '@ngrx/store';
import {increment, decrement, reset} from './counter.actions';

export const initialState = 0;

const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, (state) => 0)
);

export function counterReducer(state: number | undefined, action: Action) {
  return _counterReducer(state, action);
}

export const moneyState = 5;
const _moneyReducer = createReducer(
  moneyState,
  on(increment, (state) => state - 1),
  on(decrement, (state) => state + 2),
  on(reset, (state) => 5 )
)

export function moneyReducer(state:number | undefined, action: Action){
  return _moneyReducer(state, action)
}
