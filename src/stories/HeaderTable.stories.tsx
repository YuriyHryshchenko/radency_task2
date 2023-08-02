import {Meta, StoryObj} from "@storybook/react";
import NotesTableHeader from "../components/notesTableHeader/NotesTableHeader";
import { store } from "../store/store";
import { Provider } from "react-redux";
import "../index.css";

const meta: Meta<typeof NotesTableHeader> = {
	title: "Components/TableHeader",
	component: NotesTableHeader,
	tags: ["autodocs"],
	decorators: [
		(Story) => (
			<Provider store={store}>
				<Story/>
			</Provider>
		),
	],
	argTypes: {
		headerType: {
			type: 'string',
			defaultValue: 'notes',
			options: ['notes', 'archivedNotes', 'summary'],
			control: {
				type: 'radio'
			}
		},
	}
};

type StoryHeader = StoryObj<typeof NotesTableHeader>;
export const NotesHeader: StoryHeader = {
	args: {
		headerType: 'notes'
	}
}
export const ArchivedNotesHeader: StoryHeader = {
	args: {
		headerType: 'archivedNotes',
	}
}
export const SummaryHeader: StoryHeader = {
	args: {
		headerType: 'summary'
	}
}



export default meta;