import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { WritableDraft } from 'immer/dist/internal';
import { Note } from '../interfaces/appInterfaces';


interface NoteSlice {
	notes: Note[],
	archivedNotes: Note[],
	summary: {
		sumCategoriesActive: {
			[i: string]: number,
		},
		sumCategoriesArchived: {
			[i: string]: number
		}
	}
}

const initialState = {
	notes: [
		{
			"id": '1',
			"name": "HELLO1",
			"timeOfCreation": "July 26, 2023",
			"category": "Task",
			"content": "TEST1",
			"date": [
				"13/07/2022",
				"15/08/2022"
			]
		},
		{
			"id": '2',
			"name": "HELLO2",
			"timeOfCreation": "July 21, 2023",
			"category": "Random Thought",
			"content": "TEST2",
			"date": [
				"17/07/2022"
			]
		},
		{
			"id": '3',
			"name": "HELLO3",
			"timeOfCreation": "July 22, 2023",
			"category": "Idea",
			"content": "TEST3",
			"date": [
				"14/07/2022",
				"16/08/2022"
			]
		},
		{
			"id": '4',
			"name": "HELLO4",
			"timeOfCreation": "June 21, 2023",
			"category": "Task",
			"content": "TEST4",
			"date": [
				"13/06/2023",
				"15/10/203"
			]
		},
		{
			"id": '5',
			"name": "HELLO5",
			"timeOfCreation": "June 19, 2023",
			"category": "Random Thought",
			"content": "TEST5",
			"date": [
				"17/06/2022"
			]
		},
		{
			"id": '6',
			"name": "HELLO6",
			"timeOfCreation": "June 10, 2023",
			"category": "Idea",
			"content": "TEST6",
			"date": [
				"14/01/2023",
				"16/02/2022"
			]
		},
		{
			"id": '7',
			"name": "HELLO7",
			"timeOfCreation": "October 7, 2023",
			"category": "Idea",
			"content": "TEST7",
			"date": [
				"07/10/2000",
			]
		}
	],
	archivedNotes: [

	],
	summary: {
		sumCategoriesActive: {
			"Task": 2,
			"Idea": 3,
			"Random Thought": 2
		},
		sumCategoriesArchived: {
		}
	}
} as NoteSlice;
const countSummaryTableCategories = (state: WritableDraft<NoteSlice>) => {
	const sumCategoriesActive = getNotesStats(state.notes);
	const sumCategoriesArchived = getNotesStats(state.archivedNotes);
	return {
		sumCategoriesActive,
		sumCategoriesArchived
	}
}

const getNotesStats = (notes: Note[]) => {
	const categories = new Map<string, number>();
	notes.forEach((note) => {
      const categoryCount = categories.get(note.category) || 0;
      categories.set(note.category, categoryCount + 1);
    });
    return Object.fromEntries(categories);
}

export const noteSlice = createSlice({
	name: 'note',
	initialState,
	reducers: {
		addNote(state, action: PayloadAction<Note>) {
			state.notes.push(action.payload);
			state.summary = countSummaryTableCategories(state);
		},
		editNote(state, action: PayloadAction<{id: string | undefined, note: {name: string, category: string, content: string, date: string[]}}>) {
			const noteIndex = state.notes.findIndex(item => item.id === action.payload.id);

			const note = {
				...state.notes[noteIndex],
				name: action.payload.note.name,
				category: action.payload.note.category,
				content: action.payload.note.content,
				date: [...state.notes[noteIndex].date, ...action.payload.note.date]
			}

			state.notes.splice(noteIndex, 1, note);
		},
		deleteNote(state, action: PayloadAction<string>) {
			state.notes = state.notes.filter(item => item.id !== action.payload);
			state.summary = countSummaryTableCategories(state);
		},
		archiveNote(state, action: PayloadAction<Note>){
			state.archivedNotes.push(action.payload);
			state.notes = state.notes.filter(item => item.id !== action.payload.id);
			state.summary = countSummaryTableCategories(state);
		},
		unarchiveNote(state, action: PayloadAction<Note>){
			state.notes.push(action.payload);
			state.archivedNotes = state.archivedNotes.filter(item => item.id !== action.payload.id);
			state.summary = countSummaryTableCategories(state);
		}
	}
})

export const {addNote, editNote, deleteNote, archiveNote, unarchiveNote} = noteSlice.actions;

export default noteSlice.reducer;