import { createSlice } from '@reduxjs/toolkit';

interface UiSlice {
	displayArchiveTable: boolean
}


const initialState = {
	displayArchiveTable: false
} as UiSlice

export const uiSlice = createSlice({
	name: 'ui',
	initialState,
	reducers: {
		toggleDisplay(state) {
			state.displayArchiveTable = !state.displayArchiveTable;
		}
	}
})

export const {toggleDisplay} =  uiSlice.actions;

export default uiSlice.reducer;