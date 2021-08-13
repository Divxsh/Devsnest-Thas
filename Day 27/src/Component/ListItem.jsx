import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { DeleteItems } from "../actions";
import { BsFillXCircleFill } from "react-icons/bs";
import "../Style/listitem.css";

const ListItem = () => {
	const todos = useSelector((state) => state.todos);
	const dispatch = useDispatch();
	const { theme } = useSelector((state) => state.theme);
	return (
		<div className='todos'>
			{todos.map((todo, index) => (
				<div key={index} className={theme ? "todo dark" : "todo"}>
					<span>{todo.task}</span>
					<button
						className={theme ? "dltbtn dark" : "dltbtn"}
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
