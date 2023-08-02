import {Meta, StoryObj} from "@storybook/react";
import CreateNoteButton from "../components/createNoteButton/CreateNoteButton";
import "../index.css";

const meta: Meta<typeof CreateNoteButton> = {
	title: "Components/CreateNoteButton",
	component: CreateNoteButton,
	tags: ["autodocs"],
	argTypes: {
		onClick: {
			description: "Shows modal where we can create note"
		}
	}
};

type Story = StoryObj<typeof CreateNoteButton>;
export const CreateNote: Story = {
	
}

export default meta;