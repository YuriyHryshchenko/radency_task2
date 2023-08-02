import {Meta, StoryObj} from "@storybook/react";
import NotesTable from "../components/notesTable/NotesTable";
import { store } from "../store/store";
import { Provider } from "react-redux";
import "../index.css";

const meta: Meta<typeof NotesTable> = {
	title: "Components/NotesTable",
	component: NotesTable,
	tags: ["autodocs"],
	decorators: [
		(Story) => (
			<Provider store={store}>
				<Story/>
			</Provider>
		),
	],
};

type StoryTable = StoryObj<typeof NotesTable>;
export const Notes: StoryTable = {
	
}



export default meta;