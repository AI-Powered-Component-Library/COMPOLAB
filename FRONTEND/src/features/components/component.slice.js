import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import componentService from './service/component.service'

// ── Async Thunks ───────────────────────────────────────────────────────────────
export const fetchAllComponents = createAsyncThunk(
  'component/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      return await componentService.getAll()
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message || 'Failed to fetch components')
    }
  }
)

export const deleteComponent = createAsyncThunk(
  'component/delete',
  async (id, { rejectWithValue }) => {
    try {
      await componentService.remove(id)
      return id  // return id so we can remove from state
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message || 'Failed to delete')
    }
  }
)

export const createComponent = createAsyncThunk(
  'component/create',
  async (payload, { rejectWithValue }) => {
    try {
      return await componentService.create(payload)
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message || 'Failed to create')
    }
  }
)

export const updateComponent = createAsyncThunk(
  'component/update',
  async ({ id, data }, { rejectWithValue }) => {
    try {
      return await componentService.update(id, data)
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message || 'Failed to update')
    }
  }
)

// ── Slice ──────────────────────────────────────────────────────────────────────
const componentSlice = createSlice({
  name: 'component',
  initialState: {
    components: [],
    loading: false,
    error: null,
  },
  reducers: {
    clearError: (state) => { state.error = null },
  },
  extraReducers: (builder) => {
    // fetchAll
    builder
      .addCase(fetchAllComponents.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchAllComponents.fulfilled, (state, { payload }) => {
        state.loading = false
        state.components = payload
      })
      .addCase(fetchAllComponents.rejected, (state, { payload }) => {
        state.loading = false
        state.error = payload
      })

    // delete
    builder
      .addCase(deleteComponent.fulfilled, (state, { payload }) => {
        state.components = state.components.filter((c) => c._id !== payload)
      })
      .addCase(deleteComponent.rejected, (state, { payload }) => {
        state.error = payload
      })
  },
})

export const { clearError } = componentSlice.actions
export default componentSlice.reducer
