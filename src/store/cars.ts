import axios from 'axios';
import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Car } from '@/types/Car';
import { AppThunk } from '@/store/index';

type State = {
  data: Array<Car>;
  pagesCount: number | null;
  totalCount: number | null;
  loading: boolean;
  error: string | null;
};

const slice = createSlice({
  name: 'cars',
  initialState: {
    data: [],
    pagesCount: null,
    totalCount: null,
    loading: true,
    error: null,
  } as State,
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
  dispatch(updateLoading(true));
  dispatch(updateError(null));

  try {
    const result = await axios.get('/api/cars', { params });
    dispatch(updateData(result.data));
  } catch (error) {
    dispatch(updateError(error.message));
  } finally {
    dispatch(updateLoading(false));
  }
};
