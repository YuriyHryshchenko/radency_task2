import {Meta, StoryObj} from "@storybook/react";
import SummaryNotesTable from "../components/summaryNotesTable/SummaryNotesTable";
import { store } from "../store/store";
import { Provider } from "react-redux";
import "../index.css";

const meta: Meta<typeof SummaryNotesTable> = {
	title: "Components/SummaryNotesTable",
	component: SummaryNotesTable,
	tags: ["autodocs"],
	decorators: [
		(Story) => (
			<Provider store={store}>
				<Story/>
			</Provider>
		),
	],
};

type StoryTable = StoryObj<typeof SummaryNotesTable>;
export const SummaryNotes: StoryTable = {
	
}



export default meta;