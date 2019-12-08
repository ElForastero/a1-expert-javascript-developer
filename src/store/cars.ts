import axios from 'axios';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Car } from '@/types/Car';
import { AppThunk } from '@/store/index';

type State = {
  data: Array<Car>;
  pagesCount: number | null;
  totalCount: number | null;
  loading: boolean;
  error: string | null;
};

const slice = createSlice<State, any>({
  name: 'cars',
  initialState: { data: [], pagesCount: null, totalCount: null, loading: true, error: null },
  reducers: {
    updateData(state: State, action: PayloadAction<State>) {
      state.data = action.payload.data;
      state.totalCount = action.payload.totalCount;
      state.pagesCount = action.payload.pagesCount;
    },
    updateLoading(state: State, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    updateError(state: State, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
  },
});

const { actions, reducer } = slice;
export const { updateData, updateLoading, updateError } = actions;
export default reducer;

export type FetchCarsParams = {
  page: number;
  sort: 'asc' | 'desc' | null;
  manufacturer: 'string' | null;
  color: 'string' | null;
};

export const fetchCars = (params: FetchCarsParams): AppThunk => async dispatch => {
  // @ts-ignore
  dispatch(updateLoading(true));
  // @ts-ignore
  dispatch(updateError(null));

  try {
    const result = await axios.get('/api/cars', { params });
    // @ts-ignore
    dispatch(updateData(result.data));
  } catch (error) {
    // @ts-ignore
    dispatch(updateError(error.message));
  } finally {
    // @ts-ignore
    dispatch(updateLoading(false));
  }
};
