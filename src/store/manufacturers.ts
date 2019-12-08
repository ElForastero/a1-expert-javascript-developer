import axios from 'axios';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Manufacturer } from '@/types/Manufacturer';
import { AppThunk } from '@/store/index';

type State = {
  data: Array<Manufacturer>;
  error: string | null;
  loading: boolean;
};

const slice = createSlice<State, any>({
  name: 'manufacturers',
  initialState: { data: [], error: null, loading: false },
  reducers: {
    updateData(state: State, action: PayloadAction<Manufacturer[]>) {
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

export const fetchManufacturers = (): AppThunk => async dispatch => {
  // @ts-ignore
  dispatch(updateLoading(true));
  // @ts-ignore
  dispatch(updateError(null));

  try {
    const result = await axios.get('/api/manufacturers');
    // @ts-ignore
    dispatch(updateData(result.data.manufacturers));
  } catch (error) {
    // @ts-ignore
    dispatch(updateError(error.message));
  } finally {
    // @ts-ignore
    dispatch(updateLoading(false));
  }
};
