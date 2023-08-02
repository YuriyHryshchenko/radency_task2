import { Meta, StoryObj} from "@storybook/react";
import Modal from "../components/modal/Modal";
import { store } from "../store/store";
import { Provider } from "react-redux";
import "../index.css";
import { useArgs } from "@storybook/client-api";
import { Note } from "../interfaces/appInterfaces";


const meta: Meta<typeof Modal> = {
	title: "Components/Modal",
	component: Modal,
	tags: ["autodocs"],
	decorators: [
		(Story) => (
			<Provider store={store}>
				<Story/>
			</Provider>
		),
	],
	argTypes: {
		modalId: {
			type: 'string',
			defaultValue: 'modalNote',
			options: ['modalNote', 'editModalNote'],
			control: {
				type: 'radio'
			},
		},
		openModal: {
			type: 'string',
			defaultValue: undefined,
			options: ['dismissible', undefined],
			control: {
				type: 'radio'
			}
		},
		setOpenModal: () => {}
	}
};


type StoryModal = StoryObj<typeof Modal>;

type PropsType= {
	modalId: string,
	note?: Note
}
const Playground = (args: PropsType) => {
	const [{ openModal }, updateArgs] = useArgs();
	const handleClose = () => updateArgs({ openModal: undefined });
 
	return (
		 <Modal
			setOpenModal={handleClose}
			openModal={openModal}
			{...args}
		 />
	);
 };

export const ModalNote: StoryModal = {
	render: Playground,
	args: {
		modalId: 'modalNote',
		openModal: undefined 
	}
}

export const EditModalNote: StoryModal = {
	render: Playground,
	args: {
		modalId: 'editModalNote',
		openModal: undefined,
		note: {
			"id": '1',
			"name": "HELLO1",
			"timeOfCreation": "July 26, 2023",
			"category": "Task",
			"content": "TEST1",
			"date": [
				"13/07/2022",
				"15/08/2022"
			]
		}
	}
}



export default meta;