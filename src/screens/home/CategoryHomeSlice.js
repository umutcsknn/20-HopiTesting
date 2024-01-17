import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCategories } from '../../services/api'; 

export const fetchCategories = createAsyncThunk('categoryhome/fetchCategories', async () => {
  const categories = await getCategories();
  return categories;
});

const categoryHomeSlice = createSlice({
  name: 'categoryhome',
  initialState: {
    categories: [],
  },
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        console.error('Kategori getirme hatası:', action.error.message);
      });
  },
});

export default categoryHomeSlice.reducer;
