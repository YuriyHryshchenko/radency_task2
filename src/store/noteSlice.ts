import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { WritableDraft } from 'immer/dist/internal';

interface NoteSlice {
	notes: Note[],
	archivedNotes: Note[],
	summary: {
		"taskActive": number,
		"ideaActive": number,
		"thoughtActive": number,
		"taskArchived": number,
		"ideaArchived": number,
		"thoughtArchived": number
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
				"2022-07-13",
				"2023-08-15"
			]
		},
		{
			"id": '2',
			"name": "HELLO2",
			"timeOfCreation": "July 21, 2023",
			"category": "Random Thought",
			"content": "TEST2",
			"date": [
				"2022-07-17"
			]
		},
		{
			"id": '3',
			"name": "HELLO3",
			"timeOfCreation": "July 22, 2023",
			"category": "Idea",
			"content": "TEST3",
			"date": [
				"2022-07-14",
				"2023-08-16"
			]
		},
		{
			"id": '4',
			"name": "HELLO4",
			"timeOfCreation": "June 21, 2023",
			"category": "Task",
			"content": "TEST4",
			"date": [
				"2022-05-13",
				"2023-10-15"
			]
		},
		{
			"id": '5',
			"name": "HELLO5",
			"timeOfCreation": "June 19, 2023",
			"category": "Random Thought",
			"content": "TEST5",
			"date": [
				"2022-06-17"
			]
		},
		{
			"id": '6',
			"name": "HELLO6",
			"timeOfCreation": "June 10, 2023",
			"category": "Idea",
			"content": "TEST6",
			"date": [
				"2022-01-14",
				"2023-02-16"
			]
		},
		{
			"id": '7',
			"name": "HELLO7",
			"timeOfCreation": "October 7, 2023",
			"category": "Idea",
			"content": "TEST7",
			"date": [
				"2000-10-07",
			]
		}
	],
	archivedNotes: [

	],
	summary: {
		"taskActive": 2,
		"ideaActive": 3,
		"thoughtActive": 2,
		"taskArchived": 0,
		"ideaArchived": 0,
		"thoughtArchived": 0
	}
} as NoteSlice;
const countSummaryTableCategories = (state: WritableDraft<NoteSlice>) => {
	state.summary.taskActive = countSumOfSpecifiedNotes(state.notes, 'Task');
	state.summary.ideaActive = countSumOfSpecifiedNotes(state.notes, 'Idea');
	state.summary.thoughtActive = countSumOfSpecifiedNotes(state.notes, 'Random Thought');
	state.summary.taskArchived = countSumOfSpecifiedNotes(state.archivedNotes, 'Task');
	state.summary.ideaArchived = countSumOfSpecifiedNotes(state.archivedNotes, 'Idea');
	state.summary.thoughtArchived = countSumOfSpecifiedNotes(state.archivedNotes, 'Random Thought');
}
const countSumOfSpecifiedNotes = (notes: Note[], category: string) => {
	return notes.reduce((sum: number, curr: Note) => {
		if(curr.category === category) {
			sum +=1;
		}
		return sum;
	}, 0)
}

export const noteSlice = createSlice({
	name: 'note',
	initialState,
	reducers: {
		addNote(state, action: PayloadAction<Note>) {
			state.notes.push(action.payload);
			countSummaryTableCategories(state);
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
			countSummaryTableCategories(state);
		},
		archiveNote(state, action: PayloadAction<Note>){
			state.archivedNotes.push(action.payload);
			state.notes = state.notes.filter(item => item.id !== action.payload.id);
			countSummaryTableCategories(state);
		},
		unarchiveNote(state, action: PayloadAction<Note>){
			state.notes.push(action.payload);
			state.archivedNotes = state.archivedNotes.filter(item => item.id !== action.payload.id);
			countSummaryTableCategories(state);
		}
	}
})

export const {addNote, editNote, deleteNote, archiveNote, unarchiveNote} = noteSlice.actions;

export default noteSlice.reducer;