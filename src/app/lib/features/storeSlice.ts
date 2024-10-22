import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import storeService from './storeService'
import axios from 'axios'

const initialState = {
  stores: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Create new store
// export const createStore:any = createAsyncThunk(
//   'stores/create',
//   async (storeData :any, thunkAPI:any) => {
//     try {
//       const token = thunkAPI.getState().auth.user.token
//       return await storeService.createStore(storeData, token)
//     } catch (error:any) {
//       const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString()
//       return thunkAPI.rejectWithValue(message)
//     }
//   }
// )

// Update new store
// export const updateStore:any = createAsyncThunk(
//   'stores/update',
//   async (storeData :any, thunkAPI:any) => {
//     try {
//       const token = thunkAPI.getState().auth.user.token
//       const storeId = thunkAPI.getState().stores.stores.id
//       const config = {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//       // return await storeService.updateStore(storeData, token)
//       return await axios.patch(`http://localhost:8000/stores/${storeId}`, storeData, config)
//     } catch (error:any) {
//       const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString()
//       return thunkAPI.rejectWithValue(message)
//     }
//   }
// )

// Get user stores
// export const getStores:any = createAsyncThunk(
//   'stores/getAll',
//   async (_, thunkAPI:any) => {
//     try {
//       const token = thunkAPI.getState().auth.user.token
//       return await storeService.getStores(token)
//     } catch (error:any) {
//       const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString()
//       return thunkAPI.rejectWithValue(message)
//     }
//   }
// )

// Get user stores
export const getStores:any = createAsyncThunk(
  'stores/getAll',
  async (_, thunkAPI:any) => {
    try {
    const res = await axios.get('https://devapi.tailorspace.store/stores/ankara')
//   const res = await storeService.getStores()
     return await res.data
    } catch (error:any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Delete user store
// export const deleteStore = createAsyncThunk(
//   'stores/delete',
//   async (storeId:string, thunkAPI:any) => {
//     try {
//       const token = thunkAPI.getState().auth.user.token
//       return await storeService.deleteStore(storeId, token)
//     } catch (error:any) {
//       const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString()
//       return thunkAPI.rejectWithValue(message)
//     }
//   }
// )

export const storeSlice = createSlice({
  name: 'store',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
    //   .addCase(createStore.pending, (state) => {
    //     state.isLoading = true
    //   })
    //   .addCase(createStore.fulfilled, (state:any, action) => {
    //     state.isLoading = false
    //     state.isSuccess = true
    //     state.stores.push(action.payload)
    //   })
    //   .addCase(createStore.rejected, (state:any, action) => {
    //     state.isLoading = false
    //     state.isError = true
    //     state.message = action.payload
    //   })
    //   .addCase(updateStore.pending, (state) => {
    //     state.isLoading = true
    //   })
    //   .addCase(updateStore.fulfilled, (state:any, action) => {
    //     state.isLoading = false
    //     state.isSuccess = true
    //     state.stores.push(action.payload)
    //   })
    //   .addCase(updateStore.rejected, (state:any, action) => {
    //     state.isLoading = false
    //     state.isError = true
    //     state.message = action.payload
    //   })
      .addCase(getStores.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getStores.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.stores = action.payload
      })
      .addCase(getStores.rejected, (state:any, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
    //   .addCase(deleteStore.pending, (state) => {
    //     state.isLoading = true
    //   })
    //   .addCase(deleteStore.fulfilled, (state, action) => {
    //     state.isLoading = false
    //     state.isSuccess = true
    //     state.stores = state.stores.filter(
    //       (store:any) => store.storeId !== action.payload.id
    //     )
    //   })
    //   .addCase(deleteStore.rejected, (state:any, action) => {
    //     state.isLoading = false
    //     state.isError = true
    //     state.message = action.payload
    //   })
  },
})

export const { reset } = storeSlice.actions
export default storeSlice.reducer
