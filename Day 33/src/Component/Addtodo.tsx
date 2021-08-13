import { useState } from "react";
import ListTodo from "./Listtodo";

export interface SetTodo {
	task: string;
}
const button = {
	fontSize: "1.1rem",
	padding: "0.3em",
	marginLeft: "5px",
};

const Addtodo = () => {
	const [todos, setTodos] = useState<SetTodo[]>([]);
	const [Value, setValue] = useState<string>("");
	return (
		<div className='todo-app'>
			<div>
				<input
					type='text'
					value={Value}
					onChange={(e) => setValue(e.target.value)}
				/>
				<button
					style={button}
					onClick={() => {
						if (Value) {
							setTodos([...todos, { task: Value }]);
							setValue("");
						}
					}}
				>
					ADD
				</button>
			</div>
			<div className='list'>
				{todos.map((todo, index) => (
					<ListTodo
						key={index}
						todos={todos}
						todo={todo}
						setTodos={setTodos}
						index={index}
					/>
				))}
			</div>
		</div>
	);
};

export { Addtodo };
