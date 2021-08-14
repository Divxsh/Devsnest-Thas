import "../Style/listitem.css";
import { useSelector, useDispatch } from "react-redux";
import { DeleteItems } from "../actions";
import { reducerType } from "../reducers";
import { BsFillXCircleFill } from "react-icons/bs";

interface Todo {
	task: string;
}

const ListItem = () => {
	const todos: Todo[] = useSelector((state: reducerType) => state.todos);
	const { theme } = useSelector((state: reducerType) => state.theme);
	const dispatch = useDispatch();
	return (
		<div className='todos'>
			{todos.map((todo, index) => (
				<div key={index} className={theme ? "todo dark" : "todo"}>
					<span className={theme ? "dark" : ""}>{todo.task}</span>
					<button
						className={theme ? "dark dltbtn" : "dltbtn"}
						onClick={() => dispatch(DeleteItems(index))}
					>
						<BsFillXCircleFill />
					</button>
				</div>
			))}
		</div>
	);
};

export default ListItem;
