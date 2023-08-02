import {Meta, StoryObj} from "@storybook/react";
import ArchivedNotesTable from "../components/archivedNotesTable/ArchivedNotesTable";
import { store } from "../store/store";
import { Provider } from "react-redux";
import "../index.css";

const meta: Meta<typeof ArchivedNotesTable> = {
	title: "Components/ArchivedNotesTable",
	component: ArchivedNotesTable,
	tags: ["autodocs"],
	decorators: [
		(Story) => (
			<Provider store={store}>
				<Story/>
			</Provider>
		),
	],
};

type StoryTable = StoryObj<typeof ArchivedNotesTable>;
export const ArchivedNotes: StoryTable = {
	
}



export default meta;