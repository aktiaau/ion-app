import { useState, useEffect } from "react";
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
import "./Tab3.css";

import ListItem from '../components/ListItem';
//import {currentUserContext} from '../App';

const Tab3: React.FC = () => {

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
					<IonTitle>My Plan</IonTitle>
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

				<div style={{
					width:'200px',
					height:'200px',
					margin:'0px auto',
					backgroundImage:'url(https://psikologi.undip.ac.id/wp-content/uploads/mbkm.png)',
					backgroundSize:'contain',
					backgroundRepeat:'no-repeat',
					backgroundPosition:'center',
					//backgroundColor:'grey',
				}}></div>

				<h1 className="ion-text-center" style={{
					color:"darkBlue",
					fontSize:"36px"
				}}>Version 1</h1>
			</IonContent>
		</IonPage>

   
	);
};

export default Tab3;