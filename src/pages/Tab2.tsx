import { useState } from "react";
import {
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar,
	IonList,
	IonItem,
	IonInput,
	IonButton,
} from "@ionic/react";
import "./Tab2.css";

import ListItem from '../components/ListItem';

const Tab2: React.FC = () => {

	const [todos, setTodos] = useState(["Makan", "Minum", "Jajan"]);
	const [inputText, setInputText] = useState<string>("");

	const removeTodo = (i: number) => {
		const newTodos = todos.filter((value, index) => {
			return index !== i;
		});
		setTodos(newTodos);
	};
	const removeTodos = () => {
		setTodos([]);
	};

	const submitTodo = () => {
		setTodos([inputText, ...todos]);
		setInputText("");
	};

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Todos</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<IonHeader collapse="condense">
					<IonToolbar>
						<IonTitle size="large">Todos</IonTitle>
					</IonToolbar>
				</IonHeader>

				<IonList>
					<IonItem>
						<IonInput
							value={inputText}
							placeholder="Please input todo here ..."
							clearInput={true}
							autofocus={true}
							onIonChange={(e) => {
								setInputText(e.detail.value!);
							}}
							onKeyPress={(e) => {
								if (e.key === "Enter") {
									submitTodo();
								}
							}}
						/>
					</IonItem>
				</IonList>

				{todos.map((item, i) => (
					<ListItem
						text={item}
						onClick={() => {
							removeTodo(i);
						}}
					/>
				))}
				{todos.length ? (
					<IonButton
						onClick={removeTodos}
						expand="full"
						fill="clear"
						size="small"
						color="danger"
					>
						Remove all todos
					</IonButton>
				) : null}
			</IonContent>
		</IonPage>
	);
};

export default Tab2;