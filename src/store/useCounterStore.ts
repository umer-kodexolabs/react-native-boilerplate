import {create} from 'zustand';

type CounterStore = {
  count: number;
  increase: () => void;
  decrease: () => void;
  reset: () => void;
};

const useCounterStore = create<CounterStore>(set => ({
  count: 0,
  increase: () => set(state => ({count: state.count + 1})),
  decrease: () => set(state => ({count: state.count - 1})),
  reset: () => set({count: 0}),
}));

export {useCounterStore};
