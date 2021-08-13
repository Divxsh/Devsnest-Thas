import { useContext } from "react";
import { SetTodo } from "./Addtodo";
import { BsFillXCircleFill } from "react-icons/bs";
import { ThemeContext } from "../ThemeContext";

interface Props {
	todos: SetTodo[];
	todo: {
		task: string;
	};
	setTodos: ([]) => void;
	index: number;
}

function ListTodo({ todos, todo, setTodos, index }: Props) {
	const { theme } = useContext(ThemeContext);
	return (
		<div className={theme ? "todo " : "todo dark"}>
			<span>{todo.task}</span>
			<button
				className={theme ? "dltbtn" : "dltbtn dark"}
				onClick={() => {
					setTodos(todos.filter((item, n) => n !== index));
				}}
			>
				<BsFillXCircleFill />
			</button>
		</div>
	);
}

export default ListTodo;
