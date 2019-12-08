import axios from 'axios';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '@/store/index';

type State = {
  data: Array<string>;
  error: string | null;
  loading: boolean;
};

const slice = createSlice<State, any>({
  name: 'colors',
  initialState: { data: [], error: null, loading: false },
  reducers: {
    updateData(state: State, action: PayloadAction<Array<string>>) {
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

export const fetchColors = (): AppThunk => async dispatch => {
  // @ts-ignore
  dispatch(updateLoading(true));
  // @ts-ignore
  dispatch(updateError(null));

  try {
    const result = await axios.get('/api/colors');
    // @ts-ignore
    dispatch(updateData(result.data.colors));
  } catch (error) {
    // @ts-ignore
    dispatch(updateError(error.message));
  } finally {
    // @ts-ignore
    dispatch(updateLoading(false));
  }
};
