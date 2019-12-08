import axios from 'axios';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Car } from '@/types/Car';
import { AppThunk } from '@/store/index';

type State = {
  data: Car | null;
  loading: boolean;
  error: string | null;
};

const slice = createSlice<State, any>({
  name: 'car',
  initialState: { data: null, loading: true, error: null },
  reducers: {
    updateData(state: State, action: PayloadAction<Car>) {
      state.data = action.payload;
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

export const fetchCar = (id: number): AppThunk => async dispatch => {
  // @ts-ignore
  dispatch(updateLoading(true));
  // @ts-ignore
  dispatch(updateError(null));

  try {
    const result = await axios.get(`/api/cars/${id}`);
    // @ts-ignore
    dispatch(updateData(result.data.car));
  } catch (error) {
    // @ts-ignore
    dispatch(updateError(error.message));
  } finally {
    // @ts-ignore
    dispatch(updateLoading(false));
  }
};
