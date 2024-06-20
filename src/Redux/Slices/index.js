import { combineReducers, createSlice } from "@reduxjs/toolkit";
import { fetchData } from "../../Requests/api";

const exampleSlice = createSlice({
    name: 'example',
    initialState: {
        data: [],
        loading: false,
    },
    reducers: {
        setData: (state, action) => {
            state.data = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
    },
});

const flashLightSlice = createSlice({
    name: 'flashLight',
    initialState: {
        fOnOff: false
    },
    reducers: {
        setfOnOff: (state, action) => {
            state.fOnOff = action.payload;
        }
    }
})

const newSplice = createSlice({
    name: 'newSlice',
    initialState: {
        intialVal: false,
    },
    reducers: {
        setInitalVal: (state, action) => {
            state.intialVal = action.payload;
        }
    }
})

const asyncDataSlice = createSlice({
    name: 'asyncData',
    initialState: {
        data: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state, action) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchData.rejected , (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
    }
})

// export action
export const { setData, setLoading } = exampleSlice.actions;
export const { setfOnOff } = flashLightSlice.actions;
export const { setInitalVal } = newSplice.actions;

// combine Reducer
const rootReducer = combineReducers({
    example: exampleSlice.reducer,
    flashLight: flashLightSlice.reducer,
    newSplice: newSplice.reducer,
    asyncData: asyncDataSlice.reducer,
});

export default rootReducer;