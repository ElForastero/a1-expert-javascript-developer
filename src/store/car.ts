import axios from 'axios';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Car } from '@/types/Car';
import { AppThunk } from '@/store/index';

type State = {
  data: Car | null;
  loading: boolean;
  error: number | null;
};

const slice = createSlice({
  name: 'car',
  initialState: { data: null, loading: true, error: null } as State,
  reducers: {
    updateData(state: State, action: PayloadAction<Car | null>) {
      state.data = action.payload;
    },
    updateLoading(state: State, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    updateError(state: State, action: PayloadAction<number | null>) {
      state.error = action.payload;
    },
  },
});

const { actions, reducer } = slice;
export const { updateData, updateLoading, updateError } = actions;
export default reducer;

export const fetchCar = (id: number): AppThunk => async dispatch => {
  dispatch(updateLoading(true));
  dispatch(updateError(null));

  try {
    const result = await axios.get(`/api/cars/${id}`);
    dispatch(updateData(result.data.car));
    dispatch(updateLoading(false));
  } catch (error) {
    dispatch(updateError(error.response.status));
  }
};
